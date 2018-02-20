/*
Coding Challenge for Kuali
Design set of objects to manage elevator simulation
Justin Masters Feb. 19, 2018
*/

class Elevator {
    constructor(elevatorNumber, maxFloor) {
        this.elevatorNumber = elevatorNumber;
        this.floor = 1;
        this.minFloor = 1;
        this.maxFloor = maxFloor;
        this.status = "idle";  //idle, goingUp, goingDown, underMaintenance
        this.floorsPassedCount = 0;
        this.tripsCount = 0;
        this.floorButtonsPressed = [];
    }

    runElevator() {

    }

    //assuming this receives request from passenger in elevator
    pressFloorButton(floorNumber) {
        if (validFloorNumber) {
            this.floorButtonsPressed.push(floorNumber);
            this.floorButtonsPressed.sort();
        }
    }

    goUp() {
        if (this.floor < this.maxFloor) {
            this.floor++;
            this.floorsPassedCount++
        }
    }

    goDown() {
        if (this.floor > this.minFloor) {
            this.floor--; 
            this.floorsPassedCount--;
        }
    }

    loadAndUnloadPassengers() {
        console.log(`Elevator ` + elevatorNumber + ` opening doors.\n
            Elevator ` + elevatorNumber + ` loading and unloading passengers.\n
            Elevator ` + elevatorNumber + ` closing doors.`);
    }

    reportFloorNumber() {
        console.log(`Elevator ` + elevatorNumber + ` on floor ` + floor + `.`);
    }
}

class ElevatorController {
    constructor (numElevators, numFloors) {
        this.numElevators = numElevators;
        this.numFloors = numFloors;
        this.elevatorList = [];
        for (let i = 0; i < numElevators; i++) {
            elevatorList[i] = new Elevator(i+1, numFloors);
        }
    }

    //assuming this receives request from person outside elevator
    callElevator(callElevatorRequest) {
        let availableElevatorNumber = this.findElevator();
        this.elevatorList[availableElevatorNumber].runElevator();
    }

    findElevator() {
        while (elevatorNeeded) {  //TODO:  logic for when to start/stop loop
            this.findIdleElevatorOnRequestFloor();
            this.findElevatorPassingInCorrectDirection();
            this.findClosestIdleElevator();
        }
    }
}

class callElevatorRequest {
    constructor (direction, floor) {
        this.direction = direction;
        this.floor = floor;
    }
}