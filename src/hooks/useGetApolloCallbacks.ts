import { ApolloError } from '@apollo/client';

import { useNotificationContext } from 'providers';
import { NotificationType } from 'types';
import { getApolloError } from 'utils';

export function useGetApolloCallbacks<T = any>({
  successMessage = '',
  successCallback,
  errorMessage = '',
}: {
  successMessage?: string;
  successCallback?: (data: T) => void;
  errorMessage?: string;
}) {
  const { showNotification } = useNotificationContext();
  return {
    onCompleted: (data: T) => {
      successMessage &&
        showNotification(NotificationType.Success, successMessage);
      successCallback && successCallback(data);
    },
    onError: (error: ApolloError) => {
      showNotification(
        NotificationType.Error,
        getApolloError(error, errorMessage)
      );
    },
  };
}
