var socket = io.connect('http://35.185.119.34:8000/users');
var user = document.getElementById('alias');
var n = document.getElementById('uno');
var cant = document.getElementById('dos');
var tws = document.getElementById('tws');
// EMITE EL ALIAS DEL USUARIO
setInterval(function(){
  socket.emit('alias', user.value);
},5000);

socket.on('info_usuario', function(data){
    if(data.length == 1)
    {
      n.innerHTML ="<h6>"+data[0].nombre+"</h6>";
      var cad = "";
      for(x = 0; x < data[0].tweets.length; x++)
      {
        cad = cad + "<div class='row'>\n";
        cad = cad + "<div class='col'>\n";
        cad = cad + "<div class='card'>"
        cad = cad + "<div class='card-header text-white bg-info'>\n";
        cad = cad + "<i class='fas fa-user'></i> @"+user.value+"\n";
        cad = cad + "</div>\n";
        cad = cad + "<div class='card-body'>\n";
        cad = cad + data[0].tweets[x].text + "\n";
        cad = cad + "</div>\n";
        cad = cad + "<div class='card-footer text-muted'>\n";
        cad = cad + "<strong>"+data[0].nombre+"</strong>\n";
        cad = cad + "</div>\n";
        cad = cad + "</div>\n";
        cad = cad + "</div>\n";
        cad = cad + "</div>\n";
        cad = cad + "</div>\n";
        cad = cad + "<br>\n";
      }
      tws.innerHTML = cad;
    }
});

socket.on('cantidad_tweets', function(data){
  if(data!=null)
  {
    cant.innerHTML = "<h6>"+data+"</h6>";
  }
});
