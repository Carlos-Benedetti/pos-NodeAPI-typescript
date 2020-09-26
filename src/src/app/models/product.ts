import { Schema, model, Document } from 'mongoose';
interface IProdutoSchema extends Document {
    nome: string,
    preco: number,
    descricao: string
}
interface IProdutoBase extends IProdutoSchema {

}

export interface IProduto extends IProdutoBase {
    //add Relaçoes Aqui
}
const produtoSchema = new Schema<IProduto>({
    nome: String,
    preco: Number,
    descricao: String
});

export default model<IProduto>('Produto', produtoSchema);