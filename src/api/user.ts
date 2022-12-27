import { http } from "@/utils/http";
const BASIC_URL = "/deyi-enterprise-center/api/v1/manage/enterprise-user";

export type UserResult = {
  code: string;
  data: string;
  msg: string;
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<UserResult>("post", `${BASIC_URL}/login`, { data });
};
/** 获取用户信息 */
export const getUserInfo = () => {
  return http.request("get", `${BASIC_URL}/get`);
};

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/refreshToken", { data });
};
