import { Schema, model, Document } from 'mongoose';
export interface ICustomer {
    name: string
    email: string,
    password: string
}
interface ICustomerSchema extends Document,ICustomer {
    //add Relaçoes Aqui
}
interface ICustomerBase extends ICustomerSchema {

}


const customerSchema = new Schema<ICustomer>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export default model<ICustomerSchema>('Customer', customerSchema);