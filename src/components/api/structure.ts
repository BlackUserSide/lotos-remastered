import { request } from ".";
export interface Ires {
  data: any;
  status: number;
}

export const getDataStructure = async (id: number) => {
  let response: Ires = {
    data: "",
    status: 0,
  };
  await request({
    method: "GET",
    url: `/get_struct/${id}`,

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
