import {Location} from './Location'

class Direction {
	current

	static NORTH = 'N'
	static EAST = 'E'
	static SOUTH = 'S'
	static WEST = 'W'

	constructor(initial) {
		this.current = initial
	}

	turnLeft() {
		if (this.current === Direction.NORTH) {
			this.current = Direction.WEST
			return
		}
		if (this.current === Direction.WEST) {
			this.current = Direction.SOUTH
			return
		}
		if (this.current === Direction.SOUTH) {
			this.current = Direction.EAST
			return
		}
		if (this.current === Direction.EAST) {
			this.current = Direction.NORTH
		}
	}

	turnRight() {
		if (this.current === Direction.NORTH) {
			this.current = Direction.EAST
			return
		}
		if (this.current === Direction.EAST) {
			this.current = Direction.SOUTH
			return
		}
		if (this.current === Direction.SOUTH) {
			this.current = Direction.WEST
			return
		}
		if (this.current === Direction.WEST) {
			this.current = Direction.NORTH
		}
	}
}

export class MarsRover {
	#TURN_RIGHT = 'R'
	#TURN_LEFT = 'L'
	#MOVE = 'M'

	receive(commands) {
		let direction = new Direction(Direction.NORTH)

		let location = new Location(0, 0)

		for (const command of commands) {
			if (command === this.#MOVE) {
				this.#move(location, direction)
			}

			if (command === this.#TURN_LEFT) {
				direction.turnLeft()
				continue
			}

			if (command === this.#TURN_RIGHT) {
				direction.turnRight()
			}
		}

		return location.length + ',' + location.side + ',' + direction.current
	}

	#move(location, direction) {
		if (direction.current === Direction.EAST) {
			location.right()
		}
		if (direction.current === Direction.SOUTH) {
			location.down()
		}
		if (direction.current === Direction.NORTH) {
			location.up()
		}
		if (direction.current === Direction.WEST) {
			location.left()
		}
	}
}
