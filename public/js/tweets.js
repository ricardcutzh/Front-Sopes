var socket = io.connect('http://35.185.119.34:8000/home');
var area = document.getElementById('tw')

var tot_users = document.getElementById('tot_users');
var tot_tweets = document.getElementById('tot_tweets');
var tot_categos = document.getElementById('tot_categos');

var us_mas_tweets = document.getElementById('us_mas_tweets');
var catgo_mas_tweets = document.getElementById('catgo_mas_tweets');

var usuarios_select = document.getElementById('usuarios_select');
var categorias_select = document.getElementById('categorias_select');

socket.on('tweets', function(data){
    var cad = "";
    for(x = 0; x < data.length; x++)
    {
        cad = cad + "<div class='row'>\n";
        cad = cad + "<div class='col'>\n";
        cad = cad + "<div class='card'>"
        cad = cad + "<div class='card-header text-white bg-info'>\n";
        cad = cad + "<i class='fas fa-user'></i> @"+data[x].usuario.alias+" | #"+data[x].categoria.nombre+"\n";
        cad = cad + "</div>\n";
        cad = cad + "<div class='card-body'>\n";
        cad = cad + data[x].text + "\n";
        cad = cad + "</div>\n";
        cad = cad + "<div class='card-footer text-muted'>\n";
        cad = cad + "<strong>"+data[x].usuario.nombre+"</strong>\n";
        cad = cad + "</div>\n";
        cad = cad + "</div>\n";
        cad = cad + "</div>\n";
        cad = cad + "</div>\n";
        cad = cad + "</div>\n";
        cad = cad + "<br>\n";
    }
    area.innerHTML = cad;
});

socket.on('numeroTweets', function(data){
    tot_tweets.innerHTML = data.twts;
});

socket.on('numeroCategorias', function(data){
    tot_categos.innerHTML = data.categos;
});

socket.on('numeroUsuarios', function(data){
    tot_users.innerHTML = data.users;
});

socket.on('topUsuario', function(data){
    if(data.length==1)
    {
      us_mas_tweets.innerHTML = data[0].alias;
    }
});

socket.on('topCategoria', function(data){
    if(data.length == 1)
    {
      catgo_mas_tweets.innerHTML = "#" + data[0].nombre;
    }
});
/*
socket.on('lista_categorias', function(data){
    var cad = "";
    //cad = cad + "<select class='custom-select' id='nombre'>\n";
    for(x = 0; x < data.length; x++)
    {
      cad = cad + "<option value=''"+data[x].nombre+"'>"+data[x].nombre+"</option>\n";
    }
    //cad = cad + "</select>\n";
    categorias_select.innerHTML = cad;
});


socket.on('lista_usuarios', function(data){

  var cad = "";
  //cad = cad + "<select class='custom-select' id='alias'>\n";
  for(x = 0; x < data.length; x++)
  {
    cad = cad + "<option value=''"+data[x].alias+"'>"+data[x].alias+"</option>\n";
  }
  //cad = cad + "</select>\n";
  usuarios_select.innerHTML = cad;
});*/
