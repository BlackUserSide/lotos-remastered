import { ISubmitPass } from "./../ui/ChangePass/ChangePass";
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
export const changePassword = async (data: ISubmitPass) => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "POST",
    url: `/update_pass`,
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
export const sendUpaderCodePass = async (phone: string) => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "POST",
    url: `/update_pass_code`,
    data: { phone: phone },
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
export const checkCodePass = async (code: string) => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "POST",
    url: `/confirm_code`,
    data: { code: code },
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
export const resetPasswordWrapper = async (data: any) => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "POST",
    url: `/update_pass_by_code `,
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
