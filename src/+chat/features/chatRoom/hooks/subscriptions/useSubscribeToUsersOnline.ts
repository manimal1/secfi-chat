import { useSubscription } from 'react-apollo';

import {
  SubscribeToUsersOnlineDocument,
  SubscribeToUsersOnlineSubscription,
  // SubscribeToUsersOnlineSubscriptionVariables,
  // SubscribeToUsersOnlineSubscriptionResult,
} from '@generated';

export function useSubscribeToUsersOnline() {
  return useSubscription<SubscribeToUsersOnlineSubscription>(
    SubscribeToUsersOnlineDocument
  );
}
