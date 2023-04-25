const mongooseAtlasConnect = require('./db.atlas.connect');
const { app } = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  mongooseAtlasConnect(port);
});
