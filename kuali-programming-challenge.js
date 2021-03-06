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

    runElevator(direction, floor) {
        if (this.floor === floor) this.loadAndUnloadPassengers();
        this.status = direction;
        
        while (this.floorButtonsPressed.length > 0) {
            if (direction === "goingUp") {
                this.floor++;
            } else if (direction === "goingDown") {
                this.floor--;
            }
            this.floorsPassedCount++;
            this.reportFloorNumber();

            let lowestSelectedFloor = this.floorButtonsPressed[0];
            let highestSelectedFloor = this.floorButtonsPressed[this.floorButtonsPressed.length-1];
            if (direction === "goingUp" && this.floor === lowestSelectedFloor) {
                this.floorButtonsPressed.shift();
                this.loadAndUnloadPassengers();
            } else if (direction === "goingDown" && this.floor === highestSelectedFloor) {
                this.floorButtonsPressed.pop();
                this.loadAndUnloadPassengers();
            }
        }
        this.status = "idle";
        this.tripsCount++;
        if (tripsCount > 99) {
            this.status = "underMaintenance";
        }
    }

    //assuming this receives request from passenger in elevator
    //can occur while elevator is running
    pressFloorButton(floorNumber) {
        if (this.floorNumberIsValid(floorNumber)) {
            this.floorButtonsPressed.push(floorNumber);
            this.floorButtonsPressed.sort();
        } //else do nothing/turn off button light
    }

    floorNumberIsValid(floorNumber) {
        if (floorNumber >= this.minFloor && floorNumber <= this.maxFloor) {
            if (this.status === "idle") return true;
            else if (this.status === "goingUp") return floorNumber > this.floor ? true : false;
            else if (this.status === "goingDown") return floorNumber < this.floor ? true : false;
            else return false;
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
    callElevator(direction, floor) {
        let availableElevatorNumber = this.findElevator(direction, floor);
        this.elevatorList[availableElevatorNumber].runElevator(direction, floor);
    }

    findElevator(direction, floor) {
        let elevatorFound = 0;
        while (elevatorFound == 0) {
            elevatorFound = this.findIdleElevatorOnRequestFloor(floor);
            if (elevatorFound > 0) break;
            elevatorFound = this.findElevatorPassingInCorrectDirection(direction, floor);
            if (elevatorFound > 0) break;
            elevatorFound = this.findClosestIdleElevator(floor);
        }
        return elevatorFound;
    }

    findIdleElevatorOnRequestFloor(floor) {
        for (let elevator of this.elevatorList) {
            if (elevator.status === "idle") {
                return elevator.floor === floor ? elevator.elevatorNumber : 0;
            }
        }
        return 0;
    }

    findElevatorPassingInCorrectDirection(direction, floor) {
        let availableElevators = [];
        for (let elevator of this.elevatorList) {
            if (elevatorIsAvailable(elevator, direction, floor)) {
                availableElevators.push(elevator);
            }
        }
        if (availableElevators.length > 0) {
            availableElevators.sort(compareElevators);
            return availableElevators[0].elevatorNumber;
        } else {
            return 0;
        }
    }

    findClosestIdleElevator(floor) {
        let availableElevators = [];
        for (let elevator of this.elevatorList) {
            if (elevator.status === "idle") {
                availableElevators.push(elevator);
            }
        }
        if (availableElevators.length > 0) {
            availableElevators.sort(compareElevators);
            return availableElevators[0].elevatorNumber;
        } else {
            return 0;
        }
    }

    elevatorIsAvailable(elevator, direction, floor) {
        if (elevator.status === direction) {
            if (elevator.status === "goingUp" && elevator.floor < floor) {
                return true;
            } else if (elevator.status === "goingDown" && elevator.floor > floor) {
                return true;
            } 
        }
        return false;
    }

    compareElevators(a, b) {
        let aDistanceToRequest = Math.abs(a.floor - floor);
        let bDistanceToRequest = Math.abs(b.floor - floor);
        return bDistanceToRequest - aDistanceToRequest;
    }
}
