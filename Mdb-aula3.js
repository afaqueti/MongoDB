db.meuspokemons.find()

var query = {name:'Raichu'}
var fields = {name:1,description:1,attack:1, _id:0} /*A variavel fields que representa 'CAMPOS' ira retornar
                                                     a quantidade de campos que serao retornados. O valor
                                                     zero tem como objetivo nao retornar o id do objeto*/
db.meuspokemons.find(query,fields)

/*
================== OPERADORES CONDICIONAIS =========================
PARA CONDIÇAO < menor
DEVEMOS USAR $lt que representa (less than) - Menor que

PARA CONDIÇAO <= menor ou igual
DEVEMOS USAR $lte que representa (less than or equal) - Menor ou igual

PARA CONDIÇAO <= maior
DEVEMOS USAR $gt que representa (great than) - Maior 

PARA CONDIÇAO <= maior ou igual
DEVEMOS USAR $gte que representa (great than or equal) - Maior ou igual
*/
var query = {height:{$lt:0.5}}
query

