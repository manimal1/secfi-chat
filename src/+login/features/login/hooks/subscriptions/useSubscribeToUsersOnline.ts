import { useSubscription } from '@apollo/client';

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
