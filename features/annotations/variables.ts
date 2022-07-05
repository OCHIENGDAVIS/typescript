const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;
const nothing: null = null;
const notKnown: undefined = undefined;

// Built in Objects

const now: Date = new Date();

// Array

const colors: string[] = ['red', 'green', 'blue'];
const nums: number[] = [23, 45, 56, 78];

// classes

class Car {}

const subaru: Car = new Car();

// Object literal

interface Point {
  x: number;
  y: number;
}

const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const anotherPoint: Point = {
  x: 34,
  y: 60,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use anotations

// [*] Function that returns the ANy type
const json = '{"x": 10, "y": 20}';
const cord: { x: number; y: number } = JSON.parse(json);
// [*] Declaring a variable in one line and initializing it in a different line
// [*] Variable that cannot be infered corectly
