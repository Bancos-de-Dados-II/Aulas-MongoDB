const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'aula';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documentos');

    //Inserindo um documento
    // const documento = {
    //     titulo: "Exemplo2",
    //     conteudo: "Exemplo de documento2"
    // }
    // const retorno = await collection.insertOne(documento);
    // console.log(retorno);

    //Listar todos os documentos
    // const projection = {projection: {titulo:1}}
    // const saida = await collection.find({titulo:"Exemplo"}, projection).toArray();
    // console.log(saida);

    //Atualizando um documento
    const saida = await collection.updateOne({titulo:"Exemplo2"},{$set:{conteudo:"100% atualizado"}});
    console.log(saida);


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());