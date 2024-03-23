export class MarsRover {
    NORTH = 'N';
    EAST = 'E';
    SOUTH = 'S';
    WEST = 'W';

    TURN_RIGHT = 'R'
    TURN_LEFT = 'L'
    MOVE = 'M'

    interpret(commands) {
        let direction = this.NORTH

        let location = {
            length: 0,
            side: 0
        }

        for (const command of commands) {
            if (command === this.MOVE) {
                if (direction === this.EAST) {
                    location.length++
                    continue
                }

                if (direction === this.SOUTH) {
                    location.side--
                } else {
                    location.side++
                }
            }

            if (command === this.TURN_LEFT) {
                direction = this.turnLeft(direction)
                continue
            }

            if (command === this.TURN_RIGHT) {
                direction = this.turnRight(direction);
            }
        }

        return location.length + ',' + location.side + ',' + direction;
    }

    turnLeft(currentDirection) {
        if (currentDirection === this.NORTH) {
            return this.WEST
        }
        if (currentDirection === this.WEST) {
            return this.SOUTH
        }
        if (currentDirection === this.SOUTH) {
            return this.EAST
        }
        if (currentDirection === this.EAST) {
            return this.NORTH
        }
    }

    turnRight(currentDirection) {
        if (currentDirection === this.NORTH) {
            return this.EAST
        }
        if (currentDirection === this.EAST) {
            return this.SOUTH
        }
        if (currentDirection === this.SOUTH) {
            return this.WEST
        }
        if (currentDirection === this.WEST) {
            return this.NORTH
        }
    }
}
