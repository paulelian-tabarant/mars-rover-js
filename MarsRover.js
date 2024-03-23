import {Location} from "./Location";

export class MarsRover {
    #NORTH = 'N';
    #EAST = 'E';
    #SOUTH = 'S';
    #WEST = 'W';

    #TURN_RIGHT = 'R'
    #TURN_LEFT = 'L'
    #MOVE = 'M'

    interpret(commands) {
        let direction = this.#NORTH

        let location = new Location(0, 0)

        for (const command of commands) {
            if (command === this.#MOVE) {
                location = this.move(location, direction)
            }

            if (command === this.#TURN_LEFT) {
                direction = this.turnLeft(direction)
                continue
            }

            if (command === this.#TURN_RIGHT) {
                direction = this.turnRight(direction);
            }
        }

        return location.length + ',' + location.side + ',' + direction;
    }

    turnLeft(currentDirection) {
        if (currentDirection === this.#NORTH) {
            return this.#WEST
        }
        if (currentDirection === this.#WEST) {
            return this.#SOUTH
        }
        if (currentDirection === this.#SOUTH) {
            return this.#EAST
        }
        if (currentDirection === this.#EAST) {
            return this.#NORTH
        }
    }

    turnRight(currentDirection) {
        if (currentDirection === this.#NORTH) {
            return this.#EAST
        }
        if (currentDirection === this.#EAST) {
            return this.#SOUTH
        }
        if (currentDirection === this.#SOUTH) {
            return this.#WEST
        }
        if (currentDirection === this.#WEST) {
            return this.#NORTH
        }
    }

    move(location, direction) {
        if (direction === this.#EAST) {
            return location.right()
        }
        if (direction === this.#SOUTH) {
            return location.down()
        }
        if (direction === this.#NORTH) {
            return location.up()
        }
        if (direction === this.#WEST) {
            return location.left()
        }
    }
}
