const appImport = require('./app')

const PORT = process.env.PORT || 3000

// Arrancamos el servidor

appImport.listen(PORT, () => {

  console.log(`El servidor se ha iniciado en el puerto ${PORT}`);
  console.log(`Puedes acceder desde la siguiente dirección: http://localhost:${PORT}`);

})
