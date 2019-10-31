================== EXERCICIOS ==============
use b_mean_pokemons

/*1 - Liste todos Pokemons com a altura menor que 0.5;*/
db.meuspokemons.find()
var locMenor = {heigth:{$lt:'0.5'}}
locMenor
db.meuspokemons.find(locMenor)

/*2 - Liste todos Pokemons com a altura maior ou igual que 0.5;*/
var locMaiorIgual = {heigth:{$gte:'0.5'}}
locMaiorIgual
db.meuspokemons.find(locMaiorIgual)

/*3 - Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama;*/

/*4 - Liste todos Pokemons com o nome 'Picachu' OU com attack menor ou igual que 0.5*/

/*5 - Liste todos Pokemons com attck maior ou igual que 48 E com height menor ou igual que 0.5*/

