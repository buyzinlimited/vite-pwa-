import apiClient from "~/utils/axios";

export const useCaptcha = () => {
  const captcha = ref(null);

  const loadCaptcha = async () => {
    const response = await apiClient.get("/api/captcha");
    captcha.value = response.data;
  };

  return { captcha, loadCaptcha };
};
