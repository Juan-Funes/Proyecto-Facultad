const express = require('express');
const cors = require('cors');
const app = express();

//setting 
app.set('port',process.env.PORT || 5000);

//middlewares
app.use(cors());
app.use(express.json());
//routers

app.use('/usuarios',require('./routers/Usuario'))

app.use('/auth',require('./routers/auth'))



module.exports = app;
