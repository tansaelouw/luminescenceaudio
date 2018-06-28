
export interface Product{
    id: string;
    name: string;
    description: string;
    imgfile: string;
}

export interface Cate{
    name: string;
    id: string;
    children: Product[];
    imgfile: string;
    description: string;

}

export interface Nav{
    id: string;
    name: string;
    products: any[];
}