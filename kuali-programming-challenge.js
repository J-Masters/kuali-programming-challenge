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
        while (this.floorButtonsPressed.length > 0) {

        }

    }

    //assuming this receives request from passenger in elevator
    pressFloorButton(floorNumber) {
        if (this.floorNumberIsValid(floorNumber)) {
            this.floorButtonsPressed.push(floorNumber);
            this.floorButtonsPressed.sort();
        } //else do nothing/turn off button light
    }

    floorNumberIsValid(floorNumber) {
        if (this.status === "idle") return true;
        else if (this.status === "goingUp") return floorNumber > this.floor ? true : false;
        else if (this.status === "goingDown") return floorNumber < this.floor ? true : false;
        else return false;
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
    callElevator(direction, floor) {
        let availableElevatorNumber = this.findElevator(direction, floor);
        this.elevatorList[availableElevatorNumber].runElevator(direction, floor);
    }

    findElevator(direction, floor) {
        while (elevatorNeeded) {  //TODO:  logic for when to start/stop loop
            this.findIdleElevatorOnRequestFloor(direction, floor);
            this.findElevatorPassingInCorrectDirection(direction, floor);
            this.findClosestIdleElevator(direction, floor);
        }
    }
}
