export class Direction {
	current

	static NORTH = 'N'
	static EAST = 'E'
	static SOUTH = 'S'
	static WEST = 'W'

	constructor(initial) {
		this.current = initial
	}

	get() {
		return this.current
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
