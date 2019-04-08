var messages = []
var id = 0

module.exports = {
    create: (req, res) => {
        var {text, time, name} = req.body
        messages.push({id, text, time, name})
        id++
        res.send(messages)
    },

    read: (req, res) => {
        res.send(messages)
    },

    update: (req, res) => {
        var {text} = req.body
        var {id} = req.params
        var index = messages.findIndex(message => message.id == id)
        var time = messages[index].time
        messages.splice(index, 1, {id: id, text: text, time: time})
        res.send(messages)
    },

    delete: (req, res) => {
        var {id} = req.params
        var index = messages.findIndex(message => message.id == id)
        messages.splice(index, 1)
        res.send(messages)
    }
}