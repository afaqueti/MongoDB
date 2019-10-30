use meubanco /*Qual banco sera usado*/

show dbs /*Lista todos os Bancos gerados*/
db /*Informa qual banco esta conctado*/
show collections /*lista quantas coleçoes existem no banco, como se fosse as tabelas de banco gerado*/
db.createCollection('colecPkemons') /*Criar coleçao conforme banco (meubanco)*/
db.primColecao.find() /*Todos os objetos das devidas coleçoes*/
db.primColecao.insert({Nome:"Alessandro",Idade:43})
db.primColecao.find()
var inserirDados = {Nome:'Nicolas',Idade:09} /*Variavel para armazenar os dados referente os indice gerado*/
db.primColecao.insert(inserirDados)    /*Comando ira inserir dados na coleçao 'primColecao' por uma variavel*/
/*Iniciar coleçao de pokemons, inserrindo o Pikachu como Primeiro*/
var pokemon = {
    name:'Metapod',
    description:'Folha esmagadora',
    type:'terra',
    attack:74,
    heigth:2.9}
db.colecPokemons.insert(pokemon)  
db.colecPokemons.find()
db.colecPokemons.save(pokemon) /*Usando o camando save para inserir o objeto na coleçao. Importanto ressaltar que nao foi usado o insert*/
db.colecPokemons.remove({name:'Caterpie'}) /*Ira remover todos os itens que conter "Caterpie" necessario gerar uma condiçao para excluir um expecifico*/

var query = {name:'Caterpie'} /*Variavel para localizar um objeto conforme o registro name*/
var p = db.colecPokemons.find(query)
p /*Variavel para localizar o nome do objeto*/

var p = db.colecPokemons.findOne(query) /*findOne retorna o objeto direto*/
p
p.name

p.defense = 35 /*foi necessario usar a variavel 'p' com finOne para definir o formato de altracao, portanto depois foi 
                incluido um novo objeto 'defense' para o query Caterpie*/
p
db.colecPokemons.save(p) /*Apos incluir e necessario usar a funçao save para savar, pois ao incluir o defenser o mesmo estava locamente e nao
                         no servidor banco de dados*/
db.colecPokemons.find(query)

var cur = db.colecPokemons.find()
cur
while(cur.hasNext())
    {print(tojson(cur.next()))}
