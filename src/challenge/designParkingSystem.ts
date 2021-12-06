import { deepStrictEqual } from 'assert';

class ParkingSystem {
  private carSize: { [key: string]: number };

  private mapSeriToSize: { [key: number]: string } = {
    1: 'big',
    2: 'medium',
    3: 'small',
  };
  constructor(big: number, medium: number, small: number) {
    this.carSize = { big, medium, small };
  }

  addCar(carType: number): boolean {
    let size = this.mapSeriToSize[carType];
    if (this.carSize[size]) {
      this.carSize[size]--;
      return true;
    }
    return false;
  }
}

function testParkingSystem(): void {
  try {
    const parkingSystem = new ParkingSystem(1, 1, 0);
    deepStrictEqual(parkingSystem.addCar(1), true);
    deepStrictEqual(parkingSystem.addCar(2), true);
    deepStrictEqual(parkingSystem.addCar(3), false);
    deepStrictEqual(parkingSystem.addCar(1), false);

    console.log('All tests Passed!');
  } catch (error) {
    console.error(
      'Error :::',
      `${(error as any).actual} !== ${(error as any).expected} \n `,
    );
  }
}
export { testParkingSystem };
