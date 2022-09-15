class Vehicle {
    constructor(public color: string) { }

    protected stop(): void {
        console.log('stopping');
    }
}

const vehicle = new Vehicle('blue');
console.log(vehicle.color);

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log('driving a car');
    }

    startDrivingProcess(): void {
        this.drive();
        this.stop();
    }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
