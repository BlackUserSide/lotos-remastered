import { getAllImageProducts } from "../../components/api/main";

export const getAllImage = async (id: number) => {
  const response = await getAllImageProducts(id).then((res) => {
    if (res) {
      switch (res.status) {
        case 200:
          return res.data;
        case 422:
          return null;
      }
    }
  });
  return response;
};
