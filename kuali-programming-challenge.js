/*
Coding Challenge for Kuali
Design set of objects to manage elevator simulation
Justin Masters Feb. 19, 2018
*/

class callElevatorRequest {
    constructor (direction, floor) {
        this.direction = direction;
        this.floor = floor;
    }
}

class Elevator {
    constructor(elevatorNumber) {
        this.elevatorNumber = elevatorNumber;
        this.floor = 1;
        this.status = "idle";  //idle, goingUp, goingDown, underMaintenance
        this.floorsPassedCount = 0;
        this.tripsCount = 0;
        this.floorButtonsPressed = [];
    }

    //assuming this receives request from passenger in elevator
    pressFloorButton(floorNumber) {
        //if valid floor button is pressed, add to array
    }

    goUp() {
        //if floor < maxFloor, go up one floor
        //increment floorsPassedCount
    }

    goDown() {
        //if floor > 1, go down one floor 
        //decrement floorsPassedCount
    }

    loadAndUnloadPassengers() {
        //report opening doors, waiting for passengers to load/unload, closing doors
    }

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
            elevatorList[i] = new Elevator(i+1);
        }
    }

    //assuming this receives request from person outside elevator
    callElevator(callElevatorRequest) {
        findIdleElevatorOnRequestFloor();
        findElevatorPassingInCorrectDirection();
        findClosestIdleElevator();
        runElevator();
    }
}