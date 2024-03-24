export class Location {
	length
	side

	constructor(length, side) {
		this.length = length
		this.side = side
	}

	down() {
		this.side--
	}

	up() {
		this.side++
	}

	left() {
		this.length--
	}

	right() {
		this.length = this.length + 1
	}
}
