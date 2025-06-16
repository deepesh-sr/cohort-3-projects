const express = require('express')
const app = express()
const port = 3000

let todo = [
    {
        id: 1,
        title: "go to gym"
    },
    {
        id: 2,
        title: "go to class"
    },
    {
        id: 3,
        title: "go to home"
    },
    {
        id: 4,
        title: "go to college"
    },

]

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

function deleteTodo(id) {
    const result = todo.filter((item) => {
        return item.id != id
    })
    console.log(result)

}

function addTodo(id,title){
todo.push({id,title})
console.log(todo)
}

addTodo(1,"Hello")


app.get('/', (req, res) => {
    res.send(todo)
})

app.post('/add-todo', (req, res) => {

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
