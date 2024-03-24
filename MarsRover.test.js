import {beforeEach, describe, expect, it} from 'vitest'
import {MarsRover} from './MarsRover'

describe('Mars Rover', () => {
	let rover

	beforeEach(() => {
		rover = new MarsRover()
	})

	it('is at 0,0,N by default', () => {
		const NO_MOVE = ''

		expect(rover.receive(NO_MOVE)).toEqual('0,0,N')
	})

	describe.each([
		{commands: 'R', 	expectedOrientation: 'E'},
		{commands: 'RR', 	expectedOrientation: 'S'},
		{commands: 'RRR', 	expectedOrientation: 'W'},
		{commands: 'RRRR', 	expectedOrientation: 'N'},
		{commands: 'L', 	expectedOrientation: 'W'},
		{commands: 'LL', 	expectedOrientation: 'S'},
		{commands: 'LLL', 	expectedOrientation: 'E'},
		{commands: 'LLLL', 	expectedOrientation: 'N'},
	],
	)('turns correctly left and right', ({commands, expectedOrientation}) => {

		it(`faces ${expectedOrientation} when receiving ${commands}`, () => {
			const coordinates = rover.receive(commands)

			expect(orientationFrom(coordinates)).toEqual(expectedOrientation)
		})
	})

	describe.each([
		{commands: 'MMM', 	expectedPosition: '0,3'},
		{commands: 'RMMM', 	expectedPosition: '3,0'},
	],
	)('remembers the last position when moving forward several times', ({commands, expectedPosition}) => {
		it(`is at ${expectedPosition} when receiving ${commands}`, () => {
			const coordinates = rover.receive(commands)

			expect(positionFrom(coordinates)).toEqual(expectedPosition)
		})
	})

	describe.each([
		{commands: 'M', 	expectedPosition: '0,1'},
		{commands: 'MRRM', 	expectedPosition: '0,0'},
		{commands: 'RM', 	expectedPosition: '1,0'},
		{commands: 'RMLLM', expectedPosition: '0,0'},
	],
	)('considers current orientation when moving forward', ({commands, expectedPosition: expectedPosition}) => {
		it(`is at ${expectedPosition} when receiving ${commands}`, () => {
			const coordinates = rover.receive(commands)

			expect(positionFrom(coordinates)).toEqual(expectedPosition)
		})
	})

	describe.each([
		{commands: 'LLM', 						expectedPosition: '0,9'},
		{commands: 'LM', 						expectedPosition: '9,0'},
		{commands: 'M'.repeat(10), 		expectedPosition: '0,0'},
		{commands: 'R' + 'M'.repeat(10), 	expectedPosition: '0,0'},
	],
	)('wraps around when reaches one end of the (10, 10) grid', ({commands, expectedPosition}) => {
		it(`is at ${expectedPosition} when receiving ${commands}`, () => {
			const coordinates = rover.receive(commands)

			expect(positionFrom(coordinates)).toEqual(expectedPosition)
		})
	})
})

function orientationFrom(coordinates) {
	return coordinates.charAt(coordinates.length - 1)
}

function positionFrom(coordinates) {
	let splitCoordinates = coordinates.slice().split(',')

	// remove orientation
	splitCoordinates.pop()

	return splitCoordinates.join(',')
}
