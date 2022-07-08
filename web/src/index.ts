import { UserForm } from './views/UserForm';
import { User } from './models/User';

const userForm = new UserForm(
  document.getElementById('root') as Element,
  User.buildUser({ name: 'Name', age: 30 })
);
userForm.render();
