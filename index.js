const express = require('express');
const port = 8000;
const app = express();

// use express router
app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log(`Error in running a server ${err}`);
        return err;
    }
    console.log(`Yup! My server is running on port ${port}`);
})