export class Location {
    length
    side

    constructor(length, side) {
        this.length = length
        this.side = side
    }

    translateOnSide(delta) {
        return new Location(this.length, this.side + delta)
    }

    translateOnLength(delta) {
        return new Location(this.length + delta, this.side)
    }
}
