import {describe, expect, it} from "vitest";
import {MarsRover} from "./MarsRover";

describe('Mars Rover', () => {
    it('is at 0,0,N by default', () => {
        const NO_MOVE = '';

        const rover = new MarsRover();

        expect(rover.move(NO_MOVE)).toEqual('0,0,N')
    })

    it('faces the right direction when turning', () => {
        const rover = new MarsRover();

        expect(rover.move('R')).toEqual('0,0,E')
    })
});
