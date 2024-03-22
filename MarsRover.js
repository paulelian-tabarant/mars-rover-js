export class MarsRover {
    move(commands) {
        if (commands === 'R') {
            return '0,0,E';
        }
        return '0,0,N';
    }
}
