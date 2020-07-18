import { useSubscription } from '@apollo/client';

import {
  OnMessageAddedDocument,
  OnMessageAddedSubscription,
  // OnMessageAddedSubscriptionVariables,
  // OnMessageAddedSubscriptionResult,
} from '@generated';

export function useSubscriptionOnMessageAdded() {
  return useSubscription<OnMessageAddedSubscription>(OnMessageAddedDocument);
}
