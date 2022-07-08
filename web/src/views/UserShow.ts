import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
        <h1>
        User Detail
        <div> User Name: ${this.model.get('name')}</div>
        <div> User Name: ${this.model.get('age')}</div>
        </h1>
        `;
  }
}
