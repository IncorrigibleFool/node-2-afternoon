const express = require('express')
const app = express()
const port = 3001

const MessageCtrl = require('./controllers/messages_controller')

app.use(express.json())
app.use(express.static('/c/Users/DevMountain/node-2/node-2-afternoon/public/build'))
//app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', MessageCtrl.read)
app.post('/api/messages/', MessageCtrl.create)
app.put('/api/messages/:id', MessageCtrl.update)
app.delete('/api/messages/:id', MessageCtrl.delete)

app.listen(port, () => console.log(`Listening on port ${port}`))