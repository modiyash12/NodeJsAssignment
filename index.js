const express = require('express');
const bodyParser = require('body-parser');
const { databaseConnection } = require('./config');
const productRoutes = require('./router/productRoute')
const userAuthentication = require('./middleware/authenticationMiddleWare')
const logging = require('./middleware/loggingMiddleware')
const errors = require('./middleware/errorHandlingMiddleware')


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(logging);
app.use(errors);


app.use('/product',userAuthentication, productRoutes)
databaseConnection()


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
