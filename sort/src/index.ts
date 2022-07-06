import { NumbersCollection } from './NumbersCollection';

import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([12, 34, 1, 34, 15, 8, 1000]);
numbersCollection.sort();
console.log(numbersCollection.data);
const characterCollection = new CharactersCollection('XaayBbbc');
characterCollection.sort();
console.log(characterCollection.data);
console.log('s');
