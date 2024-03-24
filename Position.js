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
		if (this.#side === 0) {
			this.#side = Position.GRID_SIZE - 1
			return
		}
		this.#side--
	}

	up() {
		if (this.#side === Position.GRID_SIZE - 1) {
			this.#side = 0
			return
		}
		this.#side++
	}

	left() {
		if (this.#length === 0) {
			this.#length = Position.GRID_SIZE - 1
			return
		}
		this.#length--
	}

	right() {
		if (this.#length === Position.GRID_SIZE - 1) {
			this.#length = 0
			return
		}
		this.#length++
	}
}
