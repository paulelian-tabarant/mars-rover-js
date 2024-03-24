export class Orientation {
	#current

	static NORTH = 'N'
	static EAST = 'E'
	static SOUTH = 'S'
	static WEST = 'W'

	constructor(initial) {
		this.#current = initial
	}

	get() {
		return this.#current
	}

	turnLeft() {
		if (this.#current === Orientation.NORTH) {
			this.#current = Orientation.WEST
			return
		}
		if (this.#current === Orientation.WEST) {
			this.#current = Orientation.SOUTH
			return
		}
		if (this.#current === Orientation.SOUTH) {
			this.#current = Orientation.EAST
			return
		}
		if (this.#current === Orientation.EAST) {
			this.#current = Orientation.NORTH
		}
	}

	turnRight() {
		if (this.#current === Orientation.NORTH) {
			this.#current = Orientation.EAST
			return
		}
		if (this.#current === Orientation.EAST) {
			this.#current = Orientation.SOUTH
			return
		}
		if (this.#current === Orientation.SOUTH) {
			this.#current = Orientation.WEST
			return
		}
		if (this.#current === Orientation.WEST) {
			this.#current = Orientation.NORTH
		}
	}
}
