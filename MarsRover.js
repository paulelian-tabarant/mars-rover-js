import {Location} from './Location'

class Direction {
	current

	constructor(initial) {
		this.current = initial
	}

}

export class MarsRover {
	static NORTH = 'N'
	static EAST = 'E'
	static SOUTH = 'S'
	static WEST = 'W'

	#TURN_RIGHT = 'R'
	#TURN_LEFT = 'L'
	#MOVE = 'M'

	receive(commands) {
		let direction = new Direction(MarsRover.NORTH)

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
		if (direction.current === MarsRover.NORTH) {
			return MarsRover.WEST
		}
		if (direction.current === MarsRover.WEST) {
			return MarsRover.SOUTH
		}
		if (direction.current === MarsRover.SOUTH) {
			return MarsRover.EAST
		}
		if (direction.current === MarsRover.EAST) {
			return MarsRover.NORTH
		}
	}

	#turnRight(direction) {
		if (direction.current === MarsRover.NORTH) {
			return MarsRover.EAST
		}
		if (direction.current === MarsRover.EAST) {
			return MarsRover.SOUTH
		}
		if (direction.current === MarsRover.SOUTH) {
			return MarsRover.WEST
		}
		if (direction.current === MarsRover.WEST) {
			return MarsRover.NORTH
		}
	}

	#move(location, direction) {
		if (direction.current === MarsRover.EAST) {
			location.right()
		}
		if (direction.current === MarsRover.SOUTH) {
			location.down()
		}
		if (direction.current === MarsRover.NORTH) {
			location.up()
		}
		if (direction.current === MarsRover.WEST) {
			location.left()
		}
	}
}
