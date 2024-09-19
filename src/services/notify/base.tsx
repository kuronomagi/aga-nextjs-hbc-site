import { v4uuid } from '~/lib/uuid/module';
import { notifyError } from '~/services/notify';

const STATUS_CODE_MESSAGES = {
  'not-found': '見つかりませんでした。',
  temporary: '一時的な障害が発生しています。',
  'network-response-was-not-ok': '通信がタイムアウトしました。通信環境に問題がないか、お確かめください。',
};

export function handleNotifyError(statusCode: keyof typeof STATUS_CODE_MESSAGES) {
  const customId = v4uuid || '';

  notifyError({
    message: STATUS_CODE_MESSAGES[statusCode] || 'しばらく時間を置いてから再度お試しください。',
    position: 'top',
    customId: customId,
  });
}
