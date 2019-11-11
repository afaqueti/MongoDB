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
/*O operdor $in retorna os documentos que possui algum dos valores passados dentro do Array
ARRAY_de_VALORES*/
Sintaxe - {campo:{$in:[Arrey_de_valores]}}

var inquery = {moves:{$in:[/choque do trovao/i]}}
var inqry = {moves:{$in:[/choque do trovao/i,/hidro bomba/i]}}/*Ira retornar o valor verdadeiro conforme funçao $in*/
db.meuspokemons.find(inquery)
db.meuspokemons.find(inqry)

$nin=================================
/*not in, retorna o inverso do in. */
Sintaxe - {campo:{$nin:[Arrey_de_valores]}}

var ninquery = {moves:{$nin:[/choque do trovao/i]}}
db.meuspokemons.find(ninquery)

$all=================================
Sintaxe - {campo:{$all:[Arrey_de_valores]}}
var allquery = {moves:{$all:[/investida/i,/hidro bomba/i]}}
allquery
db.meuspokemons.find(allquery)

db.meuspokemons.find({attack:{$lte:40}})

======================= OPERADORES DE NEGAÇAO ==========================

$ne=================================
sintaxe - {campo:{$ne:valor}}
/*Funçao pode ser definida como <> =! diferente*/
var nequery = {type:{$ne:'fogo'}}/*Para esse operador nao e possivel ter o Regex exemplo = /Raichu/i, isso e o REGEX*/
db.meuspokemons.find(nequery)

=====usado procedimento abaixo para incluir o "type" no objeto Raichu==========================

var query = {name:/Raichu/i} /*Variavel para localizar um objeto conforme o registro name*/
var p = db.meuspokemons.find(query)
p /*Variavel para localizar o nome do objeto*/

var p = db.meuspokemons.findOne(query) /*findOne retorna o objeto direto*/
p
p.name
p.type = 'fogo' /*foi necessario usar a variavel 'p' com finOne para definir o formato de altracao, portanto depois foi 
                incluido um novo objeto 'defense' para o query Caterpie*/
p
db.meuspokemons.save(p) /*Apos incluir e necessario usar a funçao save para savar, pois ao incluir o defenser o mesmo estava locamente e nao
                         no servidor banco de dados*/

$not=================================
sintaxe - {campo:{$not:valor}}
var notquery = {name:{$not:/Raichu/i}}/*Todos os objetos menos o 'Raichu'. portanto o Raichu nao foi retornado*/
db.meuspokemons.find(notquery)


db.meuspokemons.find()