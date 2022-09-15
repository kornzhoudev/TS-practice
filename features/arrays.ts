const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']]

// Help with inference when extracting values
const cars = carMakers[0];
const myCars = carMakers.pop();

//Prevent incompatible values
carMakers.push("audi");

//Help with map
carMakers.map((car: string): string => {
    return car.toUpperCase();
})

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
