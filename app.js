// importando o MongoClient módulo mongodb
const mongoClient = require("mongodb").MongoClient;

// declara a função assíncrona que realiza operações assíncronas (com uso do await)
async function listarBooks() {

    // pede para o mongoClient uma promessa de conexão
    // essa é uma operação assíncrona - PRECISAMOS ESPERAR QUE ELA SE REALIZE
    const conn = await mongoClient.connect("mongodb://localhost");

    // pede para a conexão nos oferecer a database hellomongo
    const database = conn.db("hellomongo");

    // pede para a database nos entregar a coleção books
    const booksCol = database.collection("books");

    // pede para a coleção uma promessa de dados
    // essa é outra operação assíncrona - PRECISAMOS ESPERAR QUE ELA SE REALIZE
    const booksData = await booksCol.find();

    // transforma os dados que o mondoDB envia para o formato de array
    // essa é outra operação assíncrona - PRECISAMOS ESPERAR QUE ELA SE REALIZE
    const booksArray = await booksData.toArray();

    console.table(booksArray);

}

// chama a função para execução
listarBooks();