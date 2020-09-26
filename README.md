# pos-NodeAPI-typescript

## Como desenvolver:
1. ### crie o arquivo 
    >.env
  
    na raiz do projeto
  
    e insira dentro dele: 
    ```
    MONGO_CONNECTION_STRING = <sua chave do mongo a.k.a(mongodb+srv://<user>:<senha>@<db>.wxwdo.gcp.mongodb.net/dbpos?retryWrites=true&w=majority)>
    ```
  
1. ### depois rode 
    `para live reload`
    ```shell
    npm run start:watch
    ```
    
    ### OU
    
    `sem live reload`
    ```shell
    npm run start
    ```
### PS
  edite `SOMENTE` os arquivos dentro da pasta ./app
  
## Debuggin
### no vscode somente
copie o link que o terminal ira exibir no inicio da aplicação 

ex: `Debugger listening on ws://127.0.0.1:5858/85969abe-0027-4973-b961-dcbdf02ebf33`
e cole a URL somente no address no ./vscode/launch.json
>./vscode/launch.json
```JSON
...
"configurations": [
{
    ...
    "address": "127.0.0.1:5858/85969abe-0027-4973-b961-dcbdf02ebf33"
    ...
```
coloque os breackpints
precione 
  >F5