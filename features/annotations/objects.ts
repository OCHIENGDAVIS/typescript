const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 10,
    lng: 20,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
