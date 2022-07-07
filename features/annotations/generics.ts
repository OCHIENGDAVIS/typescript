class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']);

// Example of generics with functions

const printString = (arr: string[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
const printNumbers = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

function printAnythin<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Generic Contraints

class Car {
  print() {
    console.log('I am acar');
  }
}

class House {
  print() {
    console.log('I am a hous');
  }
}

interface Printable {
  print(): void;
}

function printHpousesOrCars<T extends Printable>(arr: T[]) {
  for (let i = 0; i <= arr.length; i++) {
    arr[i].print();
  }
}
