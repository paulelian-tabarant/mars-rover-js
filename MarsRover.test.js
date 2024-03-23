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

        expect(rover.receive(NO_MOVE)).toEqual('0,0,N')
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
        ],
    )('turns correctly left and right', ({commands, expectedOrientation}) => {

        it(`faces ${expectedOrientation} when receiving ${commands}`, () => {
            const rover = new MarsRover();

            const orientation = orientationFrom(rover.receive(commands))

            expect(orientation).toEqual(expectedOrientation)
        })
    })

    describe.each([
            {commands: 'MMM', expectedLocation: '0,3'},
            {commands: 'RMMM', expectedLocation: '3,0'},
        ],
    )('remembers the last location when moving forward several times', ({commands, expectedLocation}) => {
        it(`is at ${expectedLocation} when receiving ${commands}`, () => {
            const rover = new MarsRover();

            const location = locationFrom(rover.receive(commands))

            expect(location).toEqual(expectedLocation)
        });
    });

    describe.each([
            {commands: 'M', expectedLocation: '0,1'},
            {commands: 'MRRM', expectedLocation: '0,0'},
            {commands: 'RM', expectedLocation: '1,0'},
            {commands: 'RMLLM', expectedLocation: '0,0'},
        ],
    )('considers current direction when moving forward', ({commands, expectedLocation}) => {
        it(`is at ${expectedLocation} when receiving ${commands}`, () => {
            const rover = new MarsRover();

            const location = locationFrom(rover.receive(commands))

            expect(location).toEqual(expectedLocation)
        });
    });
});
