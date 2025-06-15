const express = require('express')
const app = express()
const port = 3000

function getTodoByID(id) {

    todo.map((item) => {
        if (id == item.id) {
            console.log(todo.splice(id, 1))
        }
    })
}

function updateTodo(id, title) {
    const newTodo = {
        id,
        title
    }
    todo.push(newTodo)
    console.log(todo);
}

updateTodo(1, "go to garden")


app.get('/', (req, res) => {
    res.send(todo)
})

app.post('/add-todo', (req, res) => {

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
