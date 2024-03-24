import {Direction} from "./Direction";

export class Position {
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

	turnLeft() {
		this.direction.turnLeft()
	}

	turnRight() {
		this.direction.turnRight()
	}
}
