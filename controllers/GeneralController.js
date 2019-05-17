/*FUNCION ENCARGADA DE RETORNAR LA VISTA DEL USUARIO*/
function usuariosView(req, res)
{
  res.status(200).render('usuarios', {'alias': req.body.alias});
}

function categoriasView(req, res)
{
  res.status(200).render('categorias', {'categoria':req.body.nombre});
}

module.exports =
{
  usuariosView,
  categoriasView
}
