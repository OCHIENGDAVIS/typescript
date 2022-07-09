@classDecorator
class Boat {
  color: string = 'red';

  get formatedCOlor(): string {
    return `
    this boats color is ${this.color}
    `;
  }
  @logError('oops !!')
  pilot(@paramDecorator speed: string) {
    if (speed) {
      console.log('Swiss');
    }
    console.log('nothing');
  }
}

function logError(message: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(message);
      }
    };
  };
}

function testDecorator(
  target: any,
  key: string,
  dec: PropertyDescriptor
): void {
  console.log(target);
  console.log(key);
}

function paramDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}
