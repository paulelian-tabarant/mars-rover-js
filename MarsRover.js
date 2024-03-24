import {Location} from './Location'

class Direction {
	current

	constructor(initial) {
		this.current = initial
	}

}

export class MarsRover {
	#NORTH = 'N'
	#EAST = 'E'
	#SOUTH = 'S'
	#WEST = 'W'

	#TURN_RIGHT = 'R'
	#TURN_LEFT = 'L'
	#MOVE = 'M'

	receive(commands) {
		let direction = new Direction(this.#NORTH)

		let location = new Location(0, 0)

		for (const command of commands) {
			if (command === this.#MOVE) {
				this.#move(location, direction)
			}

			if (command === this.#TURN_LEFT) {
				direction.current = this.#turnLeft(direction)
				continue
			}

			if (command === this.#TURN_RIGHT) {
				direction.current = this.#turnRight(direction)
			}
		}

		return location.length + ',' + location.side + ',' + direction.current
	}

	#turnLeft(direction) {
		if (direction.current === this.#NORTH) {
			return this.#WEST
		}
		if (direction.current === this.#WEST) {
			return this.#SOUTH
		}
		if (direction.current === this.#SOUTH) {
			return this.#EAST
		}
		if (direction.current === this.#EAST) {
			return this.#NORTH
		}
	}

	#turnRight(direction) {
		if (direction.current === this.#NORTH) {
			return this.#EAST
		}
		if (direction.current === this.#EAST) {
			return this.#SOUTH
		}
		if (direction.current === this.#SOUTH) {
			return this.#WEST
		}
		if (direction.current === this.#WEST) {
			return this.#NORTH
		}
	}

	#move(location, direction) {
		if (direction.current === this.#EAST) {
			location.right()
		}
		if (direction.current === this.#SOUTH) {
			location.down()
		}
		if (direction.current === this.#NORTH) {
			location.up()
		}
		if (direction.current === this.#WEST) {
			location.left()
		}
	}
}
