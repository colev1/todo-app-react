const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('views', path.resolve('src', 'server', 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let todos = [
  { id: 1, text: 'Hello, world!' },
  { id: 2, text: 'Pick up groceries', status: 'complete' }
];

app.get('/', (req, res) => {
  const bundle = `//${req.hostname}:8080/public/bundle.js`;

  res.render('index', { bundle });
});

app.get('/todos', (req, res) => {
  res.json(JSON.stringify(todos));
});

app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((todo) => {
    return todo.id === id;
  });
  res.json(JSON.stringify(todos[index]));
});

app.post('/todos', (req, res) => {
  const { text } = req.body.data;

  if (!text) {
    res.status(400).json({ message: 'text is required' });

    return;
  }

  const id = todos.length + 1;
  const newTodo = { id, text, status: 'active' };

  todos.push(newTodo);

  res.status(201).json(todos);
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let index;
  let deletedTodo = todos.find((todo, i) => {
    if (todo.id === id) {
      index = i;
      return todo;
    }
  })

  todos.splice(index, 1);
  if (deletedTodo) {
    return res.status(200).json(deletedTodo)
  } else {
    return res.status(400).send({
      message: `Todo with id ${id} not found.`
    })
  }
});

app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let updatedTodo;
  todos = todos.map(todo => {
    if (todo.id === id) {
      updatedTodo = req.body.data;
      return updatedTodo;
    } else {
      return todo
    }
  })
  if(updatedTodo) {
    return res.status(200).json(updatedTodo)
  } else {
    
  }
});

// Node server.
const port = 3000;
const server = app.listen(port, () => {
  console.log(`---> Application started on port: ${port}`);
});

// Dev server.
const devServer = require('../../tools/development-server');
const devPort = 8080;

devServer.listen(devPort, '0.0.0.0', () => { });
