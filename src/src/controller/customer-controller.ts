import Cliente, { ICustomer } from '../app/models/customer';
import { RequestHandler } from 'express'
export module CustomerController {
    export const post: RequestHandler<any, any, ICustomer> = (req, res) => {
        debugger
        const cliente = new Cliente();
        cliente.name = req.body.name;
        cliente.password = req.body.password;
        cliente.email = req.body.email;

        cliente.save(function (error) {
            if (error)
                return res.status(500).send(`Erro ao tentar salvar um novo cliente ${error}`);

            return res.status(201).json({ message: 'cliente inserido com sucesso' });
        });
    }
    export const getById: RequestHandler = (req, res) => {
        const id = req.params.customerId;
        Cliente.findById(id, function (err, cliente) {
            if (err) {
                res.status(500).json({
                    message: "Erro ao tentar encontrar cliente; ID mal formato",
                });
            } else if (cliente == null) {
                res.status(400).json({
                    message: "Cliente não econtrado para o Id passado"
                });
            } else {
                res.status(200).json({
                    message: "Cliente encontrado",
                    cliente: cliente
                });
            }
        });
    }
    export const getAll: RequestHandler = (req, res) => {
        Cliente.find(function (err, prods) {
            if (err)
                res.send(err);

            res.status(200).json({
                message: "retorno ok de todos os clientes",
                allCustomers: prods
            });
        });
    }
    export const put: RequestHandler<any, any, ICustomer> = (req, res) => {
        const id = req.params.customerId;
        Cliente.findById(id, function (err, cliente) {
            if (err) {
                res.status(500).json({
                    message: "Erro ao tentar econtrar cliente, id mal formado"
                });
            } else if (cliente == null) {
                res.status(400).json({
                    message: "Cliente nao econtrado para o id passado"
                });
            } else {
                cliente.name = req.body.name;
                cliente.password = req.body.password;
                cliente.email = req.body.email;

                cliente.save(function (error) {
                    if (error)
                        res.send(`Erro ao entar atualizar o cliente", ${error}`);

                    res.status(200).json({
                        message: "cliente atualizado com sucesso"
                    });
                });
            }
        });
    }
    export const deleteById: RequestHandler = (req, res) => {
        Cliente.findByIdAndRemove(req.params.customerId, (err, cliente) => {
            if (!cliente) {
                return res.status(404).send()
            }
            if (err)
                return res.status(500).send(`Erro ao deletar ${err}`)

            const response = {
                message: "Cliente removido com sucesso",
                id: cliente.id
            };
            return res.status(200).send(response);
        });
    }
}