import { Schema, model, Document } from 'mongoose';
export interface IProduct  {
    nome: string,
    preco: number,
    descricao: string
}
interface IProductSchema extends Document,IProduct {
    
}
interface IProductBase extends IProductSchema {

}


const productSchema = new Schema<IProduct>({
    nome: String,
    preco: Number,
    descricao: String
});

export default model<IProductSchema>('Produto', productSchema);