class Automobile {
  constructor(public color: string) {}

  drive(): void {
    console.log('vrummmmm!');
  }
  public honk(): void {
    console.log('honking!!!!!');
  }
}

class Vehic extends Automobile {
  constructor(public weels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('peeep');
  }
}

const a = new Automobile('orange');
// console.log(a.color);

const v = new Vehic(4, 'blue');
console.log(v.color);
