const NORTH = 'N';
const EAST = 'E';
const SOUTH = 'S';
const WEST = 'W';

const TURN_LEFT = 'L';

export class MarsRover {
    move(commands) {
        let direction = NORTH

        for (const command of commands) {
            if (command === TURN_LEFT) {
                direction = this.turnLeft(direction)
                continue
            }

            direction = this.turnRight(direction);
        }

        return '0,0,' + direction;
    }

    turnLeft(currentDirection) {
        if (currentDirection === NORTH) {
            return WEST
        }
        if (currentDirection === WEST) {
            return SOUTH
        }
        if (currentDirection === SOUTH) {
            return EAST
        }
        if (currentDirection === EAST) {
            return NORTH
        }
    }

    turnRight(currentDirection) {
        if (currentDirection === NORTH) {
            return EAST
        }
        if (currentDirection === EAST) {
            return SOUTH
        }
        if (currentDirection === SOUTH) {
            return WEST
        }
        if (currentDirection === WEST) {
            return NORTH
        }
    }
}
