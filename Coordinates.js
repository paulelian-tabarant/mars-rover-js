import {Orientation} from './Orientation'
import {Position} from './Position'

export class Coordinates {
	position
	orientation

	constructor(length, side, direction) {
		this.position = new Position(length, side)
		this.orientation = new Orientation(direction)
	}

	get() {
		return {
			length: this.position.getLength(),
			side: this.position.getSide(),
			direction: this.orientation.get()
		}
	}

	move() {
		if (this.orientation.get() === Orientation.EAST) {
			this.position.right()
		}
		if (this.orientation.get() === Orientation.SOUTH) {
			this.position.down()
		}
		if (this.orientation.get() === Orientation.NORTH) {
			this.position.up()
		}
		if (this.orientation.get() === Orientation.WEST) {
			this.position.left()
		}
	}

	turnLeft() {
		this.orientation.turnLeft()
	}

	turnRight() {
		this.orientation.turnRight()
	}
}
