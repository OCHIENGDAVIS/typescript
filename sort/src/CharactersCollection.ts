export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(i: number, j: number): boolean {
    return this.data[i].toLowerCase() > this.data[j].toLowerCase();
  }

  swap(i: number, j: number): void {
    const characterArray = this.data.split('');
    const leftHand = characterArray[i];
    characterArray[i] = characterArray[j];
    characterArray[j] = leftHand;
    this.data = characterArray.join('');
  }
}
