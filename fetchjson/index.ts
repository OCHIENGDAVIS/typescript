import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
  const { id, userId, title, completed } = res.data as Todo;
  logTodo(id, userId, title, completed);
});

const logTodo = (
  id: number,
  userId: number,
  title: string,
  completed: boolean
) => {
  console.log(`
  ID: ${id}
  USER ID : ${userId}
  TITLE: ${title}
  COMPLETED : ${completed}
  `);
};

// using interfaces to write reusable code, you could understand by reading the docs  
