import {describe, it, expect} from "vitest";

class MarsRover {
    move(s) {
        return undefined;
    }
}

describe('Mars Rover', () => {
    it('is at 0,0,N by default', () => {
        let rover = new MarsRover();

        expect(rover.move('')).toEqual('0,0,N')
    })
});
