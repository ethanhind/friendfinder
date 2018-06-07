const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const path = require('path');

let PORT = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use(bodyParser.json({ type: 'application/*+json' }));

app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));

app.use(bodyParser.text({type: 'text/html'}));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, ()=>{
  console.log("Server started on PORT: ", PORT);
});
