use b_mean_pokemons
db.meuspokemons.find()

var query = {name:'Raichu'}
var fields = {name:1,description:1,attack:1, _id:0} /*A variavel fields que representa 'CAMPOS' ira retornar
                                                     a quantidade de campos que serao retornados. O valor
                                                     zero tem como objetivo nao retornar o id do objeto*/
db.meuspokemons.find(query,fields)


================== OPERADORES CONDICIONAIS =========================
/*
PARA CONDIÇAO < menor
DEVEMOS USAR $lt que representa (less than) - Menor que

PARA CONDIÇAO <= menor ou igual
DEVEMOS USAR $lte que representa (less than or equal) - Menor ou igual

PARA CONDIÇAO > maior
DEVEMOS USAR $gt que representa (great than) - Maior que

PARA CONDIÇAO >= maior ou igual
DEVEMOS USAR $gte que representa (great than or equal) - Maior ou igual
*/
db.meuspokemons.find({attack:{$lte:'45'}}) /*Consulta executada sem usar a variavel qry*/

var qry = {attack: {$lte: '40'}} /*Consulta executada usando a variavel qry, procedimento possibilita
                                  alteraçao somente dos valores.*/
qry
db.meuspokemons.find(qry)

================== OPERADORES LOGICOS =========================
db.meuspokemons.find()
var query = {$or:[{name:'Raichu'},{heigth:'0.3'}]} /*O operados OR ira aceitar um array de obejtos, portanto ele ira retornar objetos verdadeiros
                                                   ou o nome ou a altura, conforme valor do objeto.*/
query
db.meuspokemons.find(query) /*O parametro QEURY ira usar os objetos conforme a variavel definida*/

