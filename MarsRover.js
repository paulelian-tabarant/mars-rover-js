export class MarsRover {
    move(commands) {
        let direction = 'N'

        for (const command of commands) {
            direction = this.nextDirectionFrom(direction);
        }

        return '0,0,' + direction;
    }

    nextDirectionFrom(direction) {
        if (direction === 'N') {
            return 'E'
        }
        if (direction === 'E') {
            return 'S'
        }
        if (direction === 'S') {
            return 'W'
        }
        if (direction === 'W') {
            return 'N'
        }
    }
}
