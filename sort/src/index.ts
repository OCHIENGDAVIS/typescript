import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([12, 34, 1, 34, 15, 8, 1000]);
// sorter.sort();
// console.log(numbersCollection.data);
const characterCollection = new CharactersCollection('XaayBbbc');
const sorter = new Sorter(characterCollection);
sorter.sort();
console.log(characterCollection.data);
