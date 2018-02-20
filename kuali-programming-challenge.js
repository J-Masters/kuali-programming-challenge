/*
Coding Challenge for Kuali
Design set of objects to manage elevator simulation
Justin Masters Feb. 18, 2018
*/

class callElevatorRequest {
    constructor (direction, floor) {
        this.direction = direction;
        this.floor = floor;
    }
}

class Elevator {
    constructor() {
        this.floor = 1;
        this.status = "idle";
        this.floorsPassedCount = 0;
        this.tripsCount = 0;
    }

    goUp() {
        //if floor < maxFloor, go up one floor
        //increment floorsPassedCount
    }

    goDown() {
        //if floor > 1, go down one floor 
        //decrement floorsPassedCount
    }

    //TODO: this needs to go into elevator controller so it knows elevator number
    loadAndUnloadPassengers() {
        //report opening doors, waiting for passengers to load/unload, closing doors
    }

    //TODO: this needs to go into elevator controller so it knows elevator number
    reportFloorNumber() {
        console.log(`Elevator ` + `` + ` on floor ` + floor + `.`);
    }
}

class ElevatorController {
    constructor (numElevators, numFloors) {
        this.numElevators = numElevators;
        this.numFloors = numFloors;
        this.elevatorList = []
        for (let i = 0; i < numElevators; i++) {
            elevatorList[i] = new Elevator();
        }
    }

}