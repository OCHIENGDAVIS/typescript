import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare = (left: number, right: number): boolean => {
    return this.data[left] > this.data[right];
  };

  swap = (left: number, right: number): void => {
    const leftHand = this.data[left];
    this.data[left] = this.data[right];
    this.data[right] = leftHand;
  };
}
