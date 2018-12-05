var express = require('express');
var mustache = require('mustache-express');
var port = 3000;
var app = express();

var angrybirds = require('./modules/angry_birds');



app.engine('html', mustache());
app.set('view engine', 'html')

app.set('views', __dirname + '/views')

app.get('/angrybirds', function(request, response){
    var mastbird ={
        birdList: angrybirds
    }
    response.render('index', mastbird)

  })

  app.get('/angrybirds/:id', function(request, response){
    response.render('show');
  });
var angrybirdsC = require('./controllers/angry_birds_controller')
app.use('/angry_birds', angrybirdsC);


app.listen(port, function(){
    console.log(`this my port on ${port}`)
})