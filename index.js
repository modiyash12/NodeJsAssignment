const express = require('express');
const bodyParser = require('body-parser');
const { databaseConnection } = require('./config');
const productRoutes = require('./router/productRoute')
const loggingMiddleware = require('./middleware/loggingMiddleware')
const errorHandlerMiddleware = require('./middleware/errorHandlingMiddleware')
const userAuthentication = require('./middleware/authenticationMiddleWare')

const app = express();
const port = 3000;

// Logging Middleware
app.use(loggingMiddleware);

// Error Handling Middleware
app.use(errorHandlerMiddleware);

app.use(bodyParser.json());
app.use('/product', userAuthentication, productRoutes)
databaseConnection()


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
