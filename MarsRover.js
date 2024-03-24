import {Location} from './Location'
import {Direction} from './Direction'
import {Position} from "./Position";

export class MarsRover {
	#TURN_RIGHT = 'R'
	#TURN_LEFT = 'L'
	#MOVE = 'M'

	receive(commands) {
		let direction = new Direction(Direction.NORTH)
		let location = new Location(0, 0)

		const position = new Position(location, direction)

		for (const command of commands) {
			if (command === this.#MOVE) {
				position.move()
			}

			if (command === this.#TURN_LEFT) {
				position.turnLeft()
			}

			if (command === this.#TURN_RIGHT) {
				position.turnRight()
			}
		}

		const finalPosition = position.get()

		return finalPosition.length + ',' + finalPosition.side + ',' + finalPosition.direction
	}
}
