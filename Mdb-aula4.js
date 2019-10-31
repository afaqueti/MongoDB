use b_mean_pokemos
db.meuspokemons.find()
/*
db.collection.update(query, mod, options)

Para iniciar o novo modulo precisamos incluir um novo objeto
*/

var poke = {
    name:'Testtemon',
    description:'Pokemon de teste para Update',
    attack:8000,
    defense:8000,
    heigth:2.1}
poke
db.meuspokemons.save(poke)
    
var locPoke = {name:/Testtemon/i}
locPoke
db.meuspokemons.find(locPoke) /*ID anotado _id" : ObjectId("5dbb17bf63148f790d7c2279") para futura consulta e eftido do update*/

========================= UPDATE ==========================
var query = {"_id" : ObjectId("5dbb17bf63148f790d7c2279")}
var modi = {description:'Nao fazer isso que vai da rium, Se nao acredita executa que vc vai ver'}
db.meuspokemons.update(query,modi) /*Por favor nao executa essa linha, pois vai acabar com sua coleçao POKE conforme update acima*/


========================= UPDATE - Operador de Modificaçao ==========================
Sintaxe - {$set:{campo: valor}}

db.meuspokemons.update({name:'Sandshrew'},{$set:{heigth:0.6}})/*update pode ser executado somente com um parametro*/
db.meuspokemons.update({name:'Sandshrew'},{$set:{defense:45,attack:40}})/*update poder ser executdado com dois parametros*/
db.meuspokemons.find({$and:[{name:'Sandshrew'}]})
db.meuspokemons.find()

var qry = {name:'Testemon'}/*Poder ser gerada uma variavel de localizaçao*/
qry
var up = {$set:{defense:22}}/*Depois gerar uma variavel de modificaçao*/
up
db.meuspokemons.update(qry,up)/*Com as duas variaveis os update e executado conforme a variavel "qry" que localizou o name:Testemon para o campo defense*/
db.meuspokemons.find(qry)

Sintaxe - {$unset:{campo: valor}}/*Serve para Deletar*/






