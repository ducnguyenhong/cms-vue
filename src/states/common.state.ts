import Cookies from 'js-cookie';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const CK_JWT_TOKEN = 'cms-token';

export const useUserStore = defineStore('userInfo', () => {
  const token = ref<string | undefined>();
  const setToken = (data: string) => {
    token.value = data;
  };

  return { token, setToken };
});

export const useTokenStore = defineStore('token', () => {
  const token = ref<string | undefined>(Cookies.get(CK_JWT_TOKEN));
  const setToken = (data: string) => {
    token.value = data;
    if (!data) {
      Cookies.remove(CK_JWT_TOKEN);
      return;
    }
    Cookies.set(CK_JWT_TOKEN, data, { secure: true });
  };

  return { token, setToken };
});
