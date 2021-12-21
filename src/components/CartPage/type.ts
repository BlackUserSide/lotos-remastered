export interface IOrderCartMain {
  discount: number | null;
  id: number;
  name: string;
  price: number;
  src: string;
}

export interface IOrderDeliverty {
  [key: string]: string | number;
  deliveryMethod: number;
  firstName: string;
  lastName: string;
  surname: string;
  phone: string;
  email: string;
}
