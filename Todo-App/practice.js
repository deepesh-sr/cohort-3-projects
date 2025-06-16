const express = require('express')
const app = express()
const port = 3001

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
            return todo.splice(id, 1)
        }
    })
}

function getsum( n){
    let ans = 0
    return ans +n 
}

app.get('/',(req,res)=>{
    const n = req.query.n;
    const result = getsum(n);
    res.send(
      "Hi your result is " +  result
    )
})

app.listen(3001);
