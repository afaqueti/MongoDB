
use b_mena_pokemons
db.meuspokemons.find()

/*1 - Adicionar 2 ataques ao mesmo tempo para os seguintes pokemons:
Weedle,Pidgey,Raichu*/
var loc = {$or:[{name:'Weedle'}]}
loc
var pushAllqry = ['raio solar','brasas','investida']
var mod = {$push:{moves:{$each:pushAllqry}}}
db.meuspokemons.update(loc,mod)
db.meuspokemons.find(loc)

/*2 - Adcionar 1 movimento em todos os pokemons: 'desvio'*/
var todos = {}
var pushquery = {name:/Sandshrew/i}
var pu = ['investida']
var pushqry = {$push:{moves:{$each:pu}}}
db.meuspokemons.update(pushquery,pushqry)
db.meuspokemons.find(pushquery)
db.meuspokemons.find()

/*3 - Adicionar o pakemon 'AindaNaoExisteMmon' caso ele nao exista com todos os dados
com o valor ''null e a descriçao: "Sem maiores informaçoes."*/
var query = {name:/AindaNaoExisteMmon/i}
var modi = {$setOnInsert:
    {
    name:'AindaNaoExisteMmon',
    type:null,
    attack:null,
    defense:null,
    heigth:null,
    description:'Sem maiores informaçoes'
    }
}
var op = {upsert:true}
db.meuspokemons.update(query,modi,op)
db.meuspokemons.find()

/*4 - Pesquisar todos os pokemons que possuam o ataque 'investida' e mais um que
voce adiconou escolha seu pokemon favorito*/
var loc = {$or:[{name:/AindaNaoExisteMmon/i},{moves:/investida/i}]}
db.meuspokemons.find(loc)

/*5 - Pesquisar todos os pokemons que possuam os ataques
      que voce adicionou, escolha seu pokemon favorito*/
var locfav = {$or:[{attack:null},{name:'Testemon'},{moves:/raio solar/i}]}
db.meuspokemons.find(locfav)

/*6 - Pesquisar todos que nao sao do tipo 'eletrico'*/
var tipoele = {type:{$not:/fogo/i}}
db.meuspokemons.find(tipoele)

/*7 - Pesquisar todos pokemons que tenham o ataque 'investida E tenham a defesa nao menor ou igual a 49'*/
/*8 - Remover todos os pokemons do tipo agua e com attack menor que 50*/