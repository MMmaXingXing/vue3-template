// import type { ModalFunc, ModalFuncProps } from 'element-plus/lib/modal/Modal';
import { getCurrentInstance, type Component } from 'vue'
import { ElMessage as Message  } from 'element-plus'

export declare type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
export declare type IconType = 'success' | 'info' | 'error' | 'warning';

/**
 * @description: message
 */
export function useMessage() {
  return {
    createMessage: Message,
  };
}
