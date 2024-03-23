export class Location {
    length
    side

    constructor(length, side) {
        this.length = length
        this.side = side
    }

    translateSide(delta) {
        return new Location(this.length, this.side + delta)
    }
}
