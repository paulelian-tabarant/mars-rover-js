export class Location {
	length
	side

	constructor(length, side) {
		this.length = length
		this.side = side
	}

	down() {
		return new Location(this.length, this.side - 1)
	}

	up() {
		return new Location(this.length, this.side + 1)
	}

	left() {
		return new Location(this.length - 1, this.side)
	}

	right() {
		return new Location(this.length + 1, this.side)
	}
}
