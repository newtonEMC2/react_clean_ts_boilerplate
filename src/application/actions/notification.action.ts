import { PUSH_NOTIFICATION, REMOVE_NOTIFICATION } from '../types';

interface NotificationAction {
    message: string,
    severity: string,
    id: any,
    normalizeKey: any
}

// NOTIFICATION
export const pushNotification: any = ({
  message, severity, id, normalizeKey,
}: NotificationAction) => ({
  type: PUSH_NOTIFICATION,
  payload: { message, severity, id },
  meta: { normalizeKey },
});

export const removeNotification: any = ({ id }: any) => ({
  type: REMOVE_NOTIFICATION,
  payload: id,
});
