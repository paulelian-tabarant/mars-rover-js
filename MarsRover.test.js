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
        {commands: 'R', expectedOrientation: 'E'},
        {commands: 'RR', expectedOrientation: 'S'},
        {commands: 'RRR', expectedOrientation: 'W'},
        {commands: 'RRRR', expectedOrientation: 'N'},
        {commands: 'L', expectedOrientation: 'W'},
    ])('turn', ({commands, expectedOrientation}) => {

        it(`faces ${expectedOrientation} when turning ${commands}`, () => {
            const rover = new MarsRover();

            const orientation = orientationFrom(rover.move(commands))

            expect(orientation).toEqual(expectedOrientation)
        })
    })
});
