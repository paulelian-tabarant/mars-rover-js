import {describe, expect, it} from "vitest";
import {MarsRover} from "./MarsRover";

describe('Mars Rover', () => {
    it('is at 0,0,N by default', () => {
        const NO_MOVE = '';

        const rover = new MarsRover();

        expect(rover.move(NO_MOVE)).toEqual('0,0,N')
    })

    describe.each([
        {command: 'R', expected: '0,0,E'},
        {command: 'RR', expected: '0,0,S'},
    ])('turn', ({command, expected}) => {
        it(`faces ${expected} when turning ${command}`, () => {
            const rover = new MarsRover();

            expect(rover.move(command)).toEqual(expected)
        })
    })
});
