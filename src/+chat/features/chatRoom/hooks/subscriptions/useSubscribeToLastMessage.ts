import { useSubscription } from '@apollo/client';

import {
  SubscribeToLastMessageDocument,
  SubscribeToLastMessageSubscription,
  // SubscribeToLastMessageSubscriptionVariables,
  // SubscribeToLastMessageSubscriptionResult,
} from '@generated';

export function useSubscribeToLastMessage() {
  return useSubscription<SubscribeToLastMessageSubscription>(
    SubscribeToLastMessageDocument
  );
}
