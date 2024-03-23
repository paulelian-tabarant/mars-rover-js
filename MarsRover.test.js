import {describe, expect, it} from "vitest";
import {MarsRover} from "./MarsRover";

function orientationFrom(position) {
    return position.charAt(position.length - 1);
}

function locationFrom(position) {
    return position.substring(0, 3);
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
        {commands: 'LL', expectedOrientation: 'S'},
        {commands: 'LLL', expectedOrientation: 'E'},
        {commands: 'LLLL', expectedOrientation: 'N'},
    ])('turns correctly left and right', ({commands, expectedOrientation}) => {

        it(`faces ${expectedOrientation} when turning ${commands}`, () => {
            const rover = new MarsRover();

            const orientation = orientationFrom(rover.move(commands))

            expect(orientation).toEqual(expectedOrientation)
        })
    })

    describe.each([
            {commands: 'M', expectedLocation: '0,1'},
            {commands: 'MM', expectedLocation: '0,2'}
        ],
    )('remembers last location when moving front', ({commands, expectedLocation}) => {
        it(`is at ${expectedLocation} when moving ${commands}`, () => {
            const rover = new MarsRover();

            const location = locationFrom(rover.move(commands))

            expect(location).toEqual(expectedLocation)
        });
    });
});
