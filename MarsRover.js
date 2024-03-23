const NORTH = 'N';
const EAST = 'E';
const SOUTH = 'S';
const WEST = 'W';

const TURN_LEFT = 'L';
const MOVE = 'M';

export class MarsRover {
    move(commands) {
        let direction = NORTH
        let height = 0
        for (const command of commands) {
            if (command === 'M') {
                height++
                //return '0,1' + direction
            }

            if (command === TURN_LEFT) {
                direction = this.turnLeft(direction)
                continue
            }

            direction = this.turnRight(direction);
        }

        return '0,' + height + ',' + direction;
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
