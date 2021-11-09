export type IDataListBusiness = {
  icon: string;
  p: string;
  span: string;
};
export interface IDataBusiness {
  id: number;
  topLine: string;
  dataList: IDataListBusiness[];
}
export const data: IDataBusiness[] = [
  {
    id: 0,
    topLine: "Обсяг обороту та гілки у структурі",
    dataList: [],
  },
];
