const NORTH = 'N';
const EAST = 'E';
const SOUTH = 'S';
const WEST = 'W';

export class MarsRover {
    move(commands) {
        let direction = NORTH

        for (const command of commands) {
            if (command === 'L') {
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

    turnRight(direction) {
        if (direction === NORTH) {
            return EAST
        }
        if (direction === EAST) {
            return SOUTH
        }
        if (direction === SOUTH) {
            return WEST
        }
        if (direction === WEST) {
            return NORTH
        }
    }
}
