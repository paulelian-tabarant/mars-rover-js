import {Orientation} from './Orientation'
import {Coordinates} from './Coordinates'

export class MarsRover {
	#TURN_RIGHT = 'R'
	#TURN_LEFT = 'L'
	#MOVE = 'M'

	receive(commands) {
		const coordinates = new Coordinates(0, 0, Orientation.NORTH)

		for (const command of commands) {
			if (command === this.#MOVE) {
				coordinates.move()
			}

			if (command === this.#TURN_LEFT) {
				coordinates.turnLeft()
			}

			if (command === this.#TURN_RIGHT) {
				coordinates.turnRight()
			}
		}

		const finalCoordinates = coordinates.get()

		return finalCoordinates.length + ',' + finalCoordinates.side + ',' + finalCoordinates.direction
	}
}
