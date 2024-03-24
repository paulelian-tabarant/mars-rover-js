import {Location} from './Location'
import {Direction} from './Direction'

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

		return location.length + ',' + location.side + ',' + direction.get()
	}

	#move(location, direction) {
		if (direction.get() === Direction.EAST) {
			location.right()
		}
		if (direction.get() === Direction.SOUTH) {
			location.down()
		}
		if (direction.get() === Direction.NORTH) {
			location.up()
		}
		if (direction.get() === Direction.WEST) {
			location.left()
		}
	}
}
