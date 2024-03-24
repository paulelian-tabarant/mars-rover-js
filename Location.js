export class Location {
	#length
	#side

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
			this.#side = 9
			return
		}
		this.#side--
	}

	up() {
		if (this.#side === 9) {
			this.#side = 0
			return
		}
		this.#side++
	}

	left() {
		if (this.#length === 0) {
			this.#length = 9
			return
		}
		this.#length--
	}

	right() {
		if (this.#length === 9) {
			this.#length = 0
			return
		}
		this.#length++
	}
}
