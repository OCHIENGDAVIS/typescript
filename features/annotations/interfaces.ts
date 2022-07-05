const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary: () => string;
}

const printVehicle = (vehicle: Vehicle) => {
  console.log(`Name: ${vehicle.name}
    Year: ${vehicle.year}

    Broken : ${vehicle.broken}
    
    
    `);
};

printVehicle(oldCivic);

const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My Drink has ${this.sugar} grams of sugar`;
  },
};
