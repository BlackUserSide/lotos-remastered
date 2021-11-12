import { IRegisterData } from "./../RegisterPage/type";
import { request } from ".";
export interface Ires {
  data: any;
  status: number;
}

export const loginUser = async (login: string, password: string) => {
  let response: Ires = {
    data: "",
    status: 0,
  };
  await request({
    method: "POST",
    url: `/login/`,
    data: {
      email: login,
      password: password,
    },
    validateStatus: () => true,
  }).then((res) => {
    if (res) {
      response = {
        ...response,
        data: res.data,
        status: res.status,
      };
    }
  });
  return response;
};
export const checkLinkData = async (code: string) => {
  let response: Ires = {
    data: "",
    status: 0,
  };
  await request({
    method: "POST",
    url: `/check/`,
    data: {
      code: code,
    },
    validateStatus: () => true,
  }).then((res) => {
    if (res) {
      response = {
        ...response,
        data: res.data,
        status: res.status,
      };
    }
  });
  return response;
};
export const registerUser = async (data: IRegisterData) => {
  let response: Ires = {
    data: "",
    status: 0,
  };
  console.log(data);

  await request({
    method: "POST",
    url: `/registration/`,
    data: data,
    validateStatus: () => true,
  }).then((res) => {
    if (res) {
      response = {
        ...response,
        data: res.data,
        status: res.status,
      };
    }
  });
  return response;
};
export const getDataUser = async () => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "GET",
    url: `/get_user_by_token`,
    validateStatus: () => true,
  }).then((res) => {
    if (res) {
      response = {
        ...response,
        data: res.data,
        status: res.status,
      };
    }
  });
  return response;
};
