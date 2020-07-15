export enum NotificationType {
  Error,
  Success,
}

export interface Notification {
  text: string;
  type: NotificationType;
}

export type ShowNotification = (type: NotificationType, text: string) => void;
