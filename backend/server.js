const app = require('./app/app');
const database = require('./app/config/database');
const CONFIG = require('./app/config/config');

database.connect();

app.listen(CONFIG.PORT, function(error) {
  if (error) return console.log(error);
  console.log(`Servidor corriendo en el puerto: ${CONFIG.PORT}`);
});