import { Base64 } from "js-base64";
export const paymentFunc = (amount: number, orderId: string) => {
  const data = {
    version: 3,
    public_key: "sandbox_i7445548617",
    private_key: "sandbox_J5x1Nf9bl29K1kevBPUgkLTmTNPMhvCxzcBpbDCl",
    action: "pay",
    amount: amount,
    currency: "UAH",
    description: "Покупка товарів у магазині lotus-namaste",
    order_id: orderId,
    result_url: "http://lotus-namaste.online/",
  };
  const json = JSON.stringify(data);
  //const newData = btoa(json);
  console.log(json);

  const newData = Base64.encode(json);

  return newData;
};
