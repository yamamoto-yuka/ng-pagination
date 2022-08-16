export interface Product{
  id:number;
  attributes:{
    product_name: string;
    product_desc: string;
    product_price: number;
    product_quantity: number;
    product_display: boolean;
  }
}

export interface Products{
  data:Product[];
  meta:{
    pagination:{
      page:number;
      pageSize:number;
      pageCount:number;
      total:number;
    }
  }
}