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
		this.#side--
	}

	up() {
		this.#side++
	}

	left() {
		this.#length--
	}

	right() {
		this.#length++
	}
}
