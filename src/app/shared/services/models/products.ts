import { Categories } from "./categories";

export interface Products {
    id?:number,
    nom?:string,
    description?:string,
    prix?:number,
    qteCmde?:number,
    categorie?:string,
    image? :string
}
