db.meuspokemons.find()
var query = {name:'Raichu'}
var fields = {name:1,description:1,attack:1, _id:0} /*A variavel fields que representa 'CAMPOS' ira retornar
                                                     a quantidade de campos que serao retornados. O valor
                                                     zero tem como objetivo nao retornar o id do objeto*/
db.meuspokemons.find(query,fields)

