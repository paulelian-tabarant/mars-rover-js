import {Location} from './Location'
import {Direction} from './Direction'

class Position {
	direction
	location

	constructor(location, direction) {
		this.direction = direction
		this.location = location
	}

	get() {
		return {
			length: this.location.getLength(),
			side: this.location.getSide(),
			direction: this.direction.get()
		}
	}

	move() {
		if (this.direction.get() === Direction.EAST) {
			this.location.right()
		}
		if (this.direction.get() === Direction.SOUTH) {
			this.location.down()
		}
		if (this.direction.get() === Direction.NORTH) {
			this.location.up()
		}
		if (this.direction.get() === Direction.WEST) {
			this.location.left()
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

		const targetPosition = new Position(location, direction)

		for (const command of commands) {
			if (command === this.#MOVE) {
				targetPosition.move()
				//this.#move(location, direction)
			}

			if (command === this.#TURN_LEFT) {
				direction.turnLeft()
				continue
			}

			if (command === this.#TURN_RIGHT) {
				direction.turnRight()
			}
		}

		const position = new Position(location, direction)
		const positionDTO = position.get()
		const targetPositionDTO = targetPosition.get()

		return targetPositionDTO.length + ',' + targetPositionDTO.side + ',' + positionDTO.direction
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
