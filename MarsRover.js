const NORTH = 'N';
const EAST = 'E';
const SOUTH = 'S';
const WEST = 'W';

export class MarsRover {
    move(commands) {
        let direction = NORTH

        for (const command of commands) {
            if (command === 'L') {
                direction = WEST
                continue
            }

            direction = this.turnRight(direction);
        }

        return '0,0,' + direction;
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
