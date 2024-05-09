
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

const HomeRouter = require('./routes/home');
const Page1Router = require('./routes/page1');
const Page2Router = require('./routes/page2');


app.use('/home' , HomeRouter);
app.use('/AboutMe', Page1Router);
app.use('/Job', Page2Router);   

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
 