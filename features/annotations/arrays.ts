const makers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['corolla'], ['Camaro']];

// flexible types

const importantDates: (Date | string)[] = [new Date(), 'something'];
