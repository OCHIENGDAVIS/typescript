import { View } from './View';
import { UserProps, User } from '../models/User';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.setAge,
      'click:.set-name': this.setName,
      'click:.save-model': this.saveClick,
    };
  }
  saveClick = (): void => {
    this.model.save();
  };

  setName = (): void => {
    const name = this.parent.querySelector('input')?.value;
    this.model.set({ name });
  };

  setAge = () => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
            <div>
                <input  placeholder="${this.model.get('name')}"/>
                <button class="set-name">Change Name </button>
    
                <button class="set-age">Set Random Age </button>
                <button class="save-model">Save Model</button>
            </div>
        `;
  }
}
