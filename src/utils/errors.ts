import { ApolloError } from "apollo-client/errors/ApolloError";
import omit from "lodash/omit";
import toPairs from "lodash/toPairs";

interface ExtendedError extends Error {
  result?: any;
}

function processNetworkError(error: ExtendedError) {
  const result = error["result"];
  const resultErrors = result && result.errors;
  return resultErrors && resultErrors[0] && resultErrors[0].message;
}

function processBadUserInputError(extensions: {
  exception?: { code?: string };
}) {
  // TODO return message after https://app.clubhouse.io/secfiteam/story/7546/facade-graphql-send-error-message-along-with-code-in-case-of-validation-error
  if (extensions.exception && extensions.exception.code) {
    return extensions.exception.code;
  } else {
    const validationErrors = omit(extensions, ["code", "exception"]);
    return toPairs(validationErrors)
      .map((item) => item.join(": "))
      .join("; ");
  }
}

// Server errors are returned in the non_field_errors field nested in the
// Apollo error object.  This utility can be used to extract these error messages.
export function getApolloError(error: ApolloError, defaultMessage: string) {
  if (error.networkError) {
    return processNetworkError(error.networkError) || defaultMessage;
  }
  if (!error.graphQLErrors || !error.graphQLErrors[0]) {
    return defaultMessage;
  }
  const { extensions = {}, path = [] } = error.graphQLErrors[0];

  if (extensions.non_field_errors) {
    return extensions.non_field_errors;
  } else if (extensions.code === "BAD_USER_INPUT") {
    return processBadUserInputError(extensions) || defaultMessage;
  } else if (extensions.code === "FORBIDDEN") {
    return error.message;
  } else if (extensions.code === "INTERNAL_SERVER_ERROR") {
    return `Internal server error: ${error.message}`;
  } else if (extensions.code === "GRAPHQL_VALIDATION_FAILED") {
    const stackTracePart =
      extensions.exception && extensions.exception.stacktrace
        ? extensions.exception.stacktrace[0]
        : "";
    if (stackTracePart && path.length > 0) {
      return `${stackTracePart}. Path: ${path.join(".")}`;
    }
  }

  return defaultMessage;
}
