export interface ICategory {
  id: number;

  name: string;
}

export interface ISubCategory {
  id: number;
  categoryId: string;
  name: string;
}
