import { ApolloError } from "apollo-client";

import { useNotificationContext } from "providers";
import { NotificationType } from "types";
import { getApolloError } from "utils";

import { useGetApolloCallbacks } from "./useGetApolloCallbacks";

jest.mock("providers");
jest.mock("utils");

describe("useGetApolloCallbacks", () => {
  beforeEach(jest.clearAllMocks);
  const mockShowNotification = jest.fn();
  (useNotificationContext as jest.Mock).mockReturnValue({
    showNotification: mockShowNotification,
  });
  (getApolloError as jest.Mock).mockReturnValue("test error");

  it("should return correct object", () => {
    expect(useGetApolloCallbacks({})).toEqual({
      onCompleted: expect.any(Function),
      onError: expect.any(Function),
    });
  });

  describe("onCompleted", () => {
    it("should show notification with success message", () => {
      const { onCompleted } = useGetApolloCallbacks({
        successMessage: "123",
      });
      onCompleted({});
      expect(mockShowNotification).toHaveBeenCalledWith(
        NotificationType.Success,
        "123"
      );
    });

    it("should call the success callback if passed", () => {
      const successCallback = jest.fn();
      const { onCompleted } = useGetApolloCallbacks({
        successMessage: "321",
        successCallback,
      });
      const data = { some: "data" };
      onCompleted(data);
      expect(successCallback).toHaveBeenCalledWith(data);
    });
  });

  describe("onError", () => {
    it("should parse apollo error", () => {
      const { onError } = useGetApolloCallbacks({
        errorMessage: "some error message",
      });
      onError({} as ApolloError);
      expect(getApolloError).toHaveBeenCalledWith({}, "some error message");
    });

    it("should show notification with error message", () => {
      const { onError } = useGetApolloCallbacks({
        errorMessage: "some error message",
      });
      onError({} as ApolloError);
      expect(mockShowNotification).toHaveBeenCalledWith(
        NotificationType.Error,
        "test error"
      );
    });
  });
});
