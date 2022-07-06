import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable{
  companyName: string;
  catchPhrase: string;
  location: { lat: number; lng: number };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhraseDescriptor();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  showContent = (): string => {
    return `Name: ${this.companyName}
      Catch Phrase: ${this.catchPhrase}`
}}
}`;