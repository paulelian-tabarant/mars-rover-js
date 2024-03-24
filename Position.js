import {Direction} from './Direction'
import {Location} from './Location'

export class Position {
	location
	direction

	constructor(length, side, direction) {
		this.location = new Location(length, side)
		this.direction = new Direction(direction)
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

	turnLeft() {
		this.direction.turnLeft()
	}

	turnRight() {
		this.direction.turnRight()
	}
}
