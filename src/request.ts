// 请求拦截器 新增自动添加AccessToken的请求前拦截器

const authHeaderInterceptor = (url: any, options: any) => {
  const authHeader = {
    Authorization:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpblR5cGUiOiJsb2dpbiIsImxvZ2luSWQiOiJsb2dpbiIsInJuU3RyIjoiRGFGd1lTZnM1R3RIMUt2bTBIdk9lenV5V2VrTWxDelIifQ._HfqJ3pSvb2ssaqZcVgWvcYr_PwIw4BpVj9rn4ijNr0',
  };
  return {
    url: `${url}`,
    options: { ...options, interceptors: true, headers: authHeader },
  };
};

export const RequestConfig = {
  timeout: 3000,
  requestInterceptors: [authHeaderInterceptor],
};
