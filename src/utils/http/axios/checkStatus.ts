import type { ErrorMessageMode } from '/#/axios';
import { useMessage } from '/@/hooks/web/useMessage';
// import { useI18n } from '/@/hooks/web/useI18n';
// import router from '/@/router';
// import { PageEnum } from '/@/enums/pageEnum';
// import { useUserStoreWithOut } from '/@/store/modules/user';
// import projectSetting from '/@/settings/projectSetting';
// import { SessionTimeoutProcessingEnum } from '/@/enums/appEnum';

const { createMessage } = useMessage();
const error = createMessage.error!;
// const stp = projectSetting.sessionTimeoutProcessing;

export function checkStatus(
  status: number,
  msg: string,
  errorMessageMode: ErrorMessageMode = 'message',
): void {
  // const userStore = useUserStoreWithOut();
  let errMessage = '';

  switch (status) {
    case 400:
      errMessage = `${msg}`;
      break;
    // 401: Not logged in
    // Jump to the login page if not logged in, and carry the path of the current page
    // Return to the current page after successful login. This step needs to be operated on the login page.
    case 401:
      // userStore.setToken(undefined);
      errMessage = msg;
      // if (stp === SessionTimeoutProcessingEnum.PAGE_COVERAGE) {
        // userStore.setSessionTimeout(true);
      // } else {
        // userStore.logout(true);
      // }
      break;
    // 404请求不存在
    case 404:
      errMessage = 'Network request error, the resource was not found!';
      break;
    case 501:
      errMessage = 'The network is not implemented!';
      break;
    case 502:
      errMessage = 'Network Error!';
      break;
    case 503:
      errMessage = 'The service is unavailable, the server is temporarily overloaded or maintained!';
      break;
    case 504:
      errMessage = 'Network timeout!';
      break;
    case 505:
      errMessage = 'The http version does not support the request!';
      break;
    default:
      errMessage = msg;
      break
  }

  if (errMessage) {
    if (errorMessageMode === 'modal') {
      // createErrorModal({ title: t('sys.api.errorTip'), content: errMessage });
      error(errMessage);
    } else if (errorMessageMode === 'message') {
      error(errMessage);
    }
  }
}
