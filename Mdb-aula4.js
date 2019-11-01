======================= Parte 1 ==========================

use b_mean_pokemos
db.meuspokemons.find()
/*
db.collection.update(query, mod, options)

Para iniciar o novo modulo precisamos incluir um novo objeto
*/

var poke = {
    name:'Testemon',
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

db.meuspokemons.update({name:'Sandshrew'},{$set:{name:'Testtemon'}})/*update pode ser executado somente com um parametro*/
db.meuspokemons.update({name:'Sandshrew'},{$set:{defense:45,attack:40}})/*update poder ser executdado com dois parametros*/
db.meuspokemons.find({$and:[{name:'Sandshrew'}]})
db.meuspokemons.find()

var locand = {$and:[{name:'Testemon'},{heigth:2.1}]}
locand
db.meuspokemons.find(locand)

var qry = {name:'Testtemon'}/*Poder ser gerada uma variavel de localizaçao*/
qry
var up = {$set:{name:'Testemon'}}/*Depois gerar uma variavel de modificaçao*/
up
db.meuspokemons.update(locand,up)/*Com as duas variaveis os update e executado conforme a variavel "qry" que localizou o name:Testemon para o campo defense*/
db.meuspokemons.find(locand)

DELETE usando $unset - Operador de Modificaçao ==========================
Sintaxe - {$unset:{campo: valor}}/*Serve para Deletar*/

var dquery = {name:'Testemon'}
dquery
var delquery = {$unset:{heigth: 2.1}}
delquery
db.meuspokemons.update(dquery,delquery) /*Procedimento usado para deletar um objeto, usado o $unset para resolver o campo 
                                        e depois o update para atualizar o valor gerado */


INCLUSAO usando $inc - Operador de Modificaçao ==========================
Sintaxe - {$inc:{campo: valor}}/*Incrementa valor, caso necessairo decrementar somente usar a subtraçao (-)*/
var incquery = {name:'Testemon'}
incquery
var incqry = {$inc:{attack: -10}}
incqry
db.meuspokemons.update(incquery,incqry)
db.meuspokemons.find(incquery)

========================= OPERADORES DE ARRAY ==========================

Sintaxe - {$push:{campo: valor}}
var pushquery = {name:/Testemon/i}
pushquery
var pushqry = {$push:{moves:'servi para nada'}}
pushqry
db.meuspokemons.update(pushquery,pushqry)
db.meuspokemons.find()


Sintaxe - {$pushAll:{campo: [Arraay_de_valores]}}/*Funçao descontinuada necessario usar aseguente sintaxe
                                                 db.students.update({ name: "joe" },{ $push: { scores: { $each: [ 90, 92, 85 ] } } })*/
var pushquery = {name:'Testemon'}
var pushAllquery = ['Choque eletrico','ataque rapido','bola eletrica']
pushAllquery
var pushtodos = {$push:{moves:{$each:pushAllquery}}}/*Conforme ducumentaçao citada acima usando as variaveis de definçao, localizado pelo name "Testemon"*/
pushtodos
db.meuspokemons.update(pushquery,pushtodos)
db.meuspokemons.find(pushquery)


Sintaxe - {$pull:{campo: valor}}
var pullquery = {name:'Weedle'}
pullquery
var pullqry = ["hidro bomba"]
pullqry
var pullmod = {$pull:{moves: ["hidro bomba"]}}/*Ira remover o push incluido dentro do moves*/
pullmod
db.meuspokemons.update(pullquery,pullmod)
db.meuspokemons.find(pullquery)
db.meuspokemons.find()

Sintaxe - {$pullAll:{campo: [Arraay_de_valores]}}/*Remove mais de um valor*/
var pullAll = ["hidro bomba"]
pullAll
var pullAllmod = {$pullAll:{moves:pullAll}}
pullAllmod
db.meuspokemons.update(pullquery,pullAllmod)
db.meuspokemons.find(pullquery)

======================= Parte 2 ==========================
upsert 

var query ={}
query
var mod ={$set:{actve: false}}/*Active servira para nao fazer update sem where, pois o mongoDB tem como pardrao nao permitir executar update
                              multiplo nos objetos*/
var options = {multi:true}
db.meuspokemons.update(query,mod,options)
db.meuspokemons.find()

var query = {} /*Query para localizar todos os objetos da coleçao*/
var mod = {$set:{moves:['investida']}}/*Set para inserir o valor 'investida' para todos os objetos da coleçao*/
var options = {multi:true}/*mult:true servira para incluir o valor do set em todos os objetos da coleçao*/
db.meuspokemons.update(query,mod,options)/*update com as tres variaveis*/
db.meuspokemons.find(query)

OPERADOR $in=================================






