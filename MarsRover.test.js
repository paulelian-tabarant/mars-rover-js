import {describe, expect, it} from "vitest";
import {MarsRover} from "./MarsRover";

function orientationFrom(position) {
    return position.charAt(position.length - 1);
}

describe('Mars Rover', () => {
    it('is at 0,0,N by default', () => {
        const NO_MOVE = '';

        const rover = new MarsRover();

        expect(rover.move(NO_MOVE)).toEqual('0,0,N')
    })

    describe.each([
        {command: 'R', expectedOrientation: 'E'},
        {command: 'RR', expectedOrientation: 'S'},
    ])('turn', ({command, expectedOrientation}) => {

        it(`faces ${expectedOrientation} when turning ${command}`, () => {
            const rover = new MarsRover();

            const orientation = orientationFrom(rover.move(command))

            expect(orientation).toEqual(expectedOrientation)
        })
    })
});
