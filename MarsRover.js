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
            direction = 'E'
        } else if (direction === 'E') {
            direction = 'S'
        } else if (direction === 'S') {
            direction = 'W'
        } else if (direction === 'W') {
            direction = 'N'
        }
        return direction;
    }
}
