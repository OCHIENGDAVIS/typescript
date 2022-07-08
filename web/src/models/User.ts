import { Collection } from './Collection';
import { Eventing } from './Eventing';
import { Model } from './Model';
import { Attributes } from './Attributes';
import { APISync } from './APISync';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export type Callback = () => void;

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new APISync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }
}
