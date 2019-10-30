/*1 - Crie uma database chamada b-mean-pokemons:*/
use b_mean_pokemons
db.createCollection('meuspokemons')
/*2 - Liste quais database voce possui nesse servidor*/
show dbs
/*3 - Liste quais coleçoes voce possui nesta database*/
show collections
/*4 - Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrao de campos utilizados: name,
      description, attack, defense e heigth*/
var pok = {
    name:'Machamp',
    description:'Parece um esquilo mais nao e um esquilo',    
    attack:'40',
    defense:'45',
    heigth:'0.6'
    }
db.meuspokemons.insert(pok)

/*5 - Liste os pokemons existentes na sua coleçao*/
db.meuspokemons.find()

/*6 - Busque o pokemons a sua escolha, pelo nome e armazene-o em uma variavel chamada 'poke'*/
var loc = {name:'Machamp',
           description:'Parece um esquilo mais nao e um esquilo'}
var l = db.meuspokemons.find(loc)
l
var l = db.meuspokemons.findOne(loc)
l
db.meuspokemons.remove(loc)           

/*7 - Modifique sua 'description' e salve-o*/
l.name = 'Sandshrew' 
l          
db.meuspokemons.save(l)    
