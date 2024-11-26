import { ElMessage } from 'element-plus';

interface ToastConfig {
  message: string;
  type?: 'error' | 'success' | 'warning' | 'info';
  duration?: number;
  plain?: boolean;
}

export const showToast = (config: ToastConfig) => {
  const { type, duration = 4000, message, plain = true } = config;

  ElMessage({
    message,
    type,
    duration,
    plain
  });
};
