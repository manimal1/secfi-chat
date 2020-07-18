import { useSubscription } from '@apollo/client';

import {
  UsersOnlineDocument,
  UsersOnlineSubscription,
  // UsersOnlineSubscriptionVariables,
  // UsersOnlineSubscriptionResult,
} from '@generated';

export function useSubscriptionUsersOnline() {
  return useSubscription<UsersOnlineSubscription>(UsersOnlineDocument);
}
