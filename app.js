const express = require('express')
const app = express()

const hostname = '0.0.0.0'   // set constants
const port = 3002

app.get('/', function (req, res) {
  res.send('<h1>Welcome  to Nandinis home!</h1>'.fontcolor("green").italics().link("http://www.fawadshaikh.com/images/panda.jpg"))
  
  console.log('default page successfully opened')
})

 app.get('/hi', (req, res) => {
  res.send('Nandu cooks tasty food for her roommates'.fontsize(1000).fontcolor("darkblue"))
  console.log('hi page successfully opened')
}) 

app.get('/how',  (req, res) =>{
  res.send('<h1>Her roommates are </h1><p1>Bhavani,Nikitha,Kavya,Mayuri</p1>'.italics().fontcolor("violet").fontsize(1000))
  console.log('how page successfully opened')      
  })
  app.get('/bye', (req, res) => {
    res.send('Bye All'.fontsize(1000).fontcolor("red"))
    console.log('hi page successfully opened')
  }) 
app.get('/greeting/:id',  (req, res) =>{
  res.send('Hello! The id was '.fontsize(700) + req.params.id.fontsize(700))
  console.log('greeting page successfully opened')
})

app.get('/yo/:buddy',  (req, res) =>{
  res.send('<h1>Yo, '.fontsize() + req.params.buddy + '!</h1>')
  console.log('buddy page successfully opened')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C  to stop\n')
})

