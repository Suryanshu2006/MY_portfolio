const express = require('express');
const router = require('./routes/api');
const app = express();
app.use('/api', router);

console.log('Registered Routes:');
app._router.stack.forEach(middleware => {
    if (middleware.route) { // routes registered directly on the app
        console.log(middleware.route.path);
    } else if (middleware.name === 'router') { // router middleware
        middleware.handle.stack.forEach(handler => {
            if (handler.route) {
                console.log('/api' + handler.route.path);
            }
        });
    }
});
process.exit();
