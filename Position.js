export class Position {
	#length
	#side

	static GRID_SIZE = 10

	constructor(length, side) {
		this.#length = length
		this.#side = side
	}

	getLength() {
		return this.#length
	}

	getSide() {
		return this.#side
	}

	down() {
		this.#side = this.#wrapAroundGrid(this.#side - 1)
	}

	up() {
		this.#side = this.#wrapAroundGrid(this.#side + 1)
	}

	left() {
		this.#length = this.#wrapAroundGrid(this.#length - 1)
	}

	right() {
		this.#length = this.#wrapAroundGrid(this.#length + 1)
	}

	#wrapAroundGrid(value) {
		const size = Position.GRID_SIZE
		return ((value % size) + size) % size
	}
}
