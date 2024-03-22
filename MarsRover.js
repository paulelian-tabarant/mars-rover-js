export class MarsRover {
    move(commands) {
        let direction = 'N'
        for (const command of commands) {
            if (direction === 'N') {
                direction = 'E'
            }
            else if (direction === 'E') {
                direction = 'S'
            }
        }

        return '0,0,' + direction;
    }
}
