import { useTokenStore } from '@/states/common.state';
import { API } from '@/utils/API';
import { showToast } from '@/utils/helper';
import { useMutation } from '@tanstack/vue-query';
import { useRouter } from 'vue-router';

export const useMutateLogin = () => {
  const router = useRouter();
  const tokenStore = useTokenStore();
  const { setToken } = tokenStore;

  return useMutation({
    mutationFn: (params) => {
      return API.request({
        url: '/api/auth/login',
        method: 'POST',
        params: params
      })
        .then((res) => {
          const token = res.token;
          setToken(token);
          router.push('/');
        })
        .catch(() => {
          showToast({ type: 'error', message: 'Tài khoản hoặc mật khẩu không chính xác' });
        });
    }
  });
};
