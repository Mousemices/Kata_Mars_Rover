const assert = require('chai').assert;
const expect = require('chai').expect;
const MarsRover = require('../app/MarsRover');

describe('Mars Rover', function()
{
    it('return position', function()
    {
        const rover = new MarsRover();
        const [x, y] = rover.getPosition();
        const defaultX = 0;
        const defaultY = 0;
        expect([defaultX, defaultY]).to.deep.equal([x, y]);
    });

    it('return direction', function()
    {
        const rover = new MarsRover();
        const direction = rover.getDirection();
        assert.equal(direction,'N');
    });

    it('rover rotate to left', function()
    {
        const rover = new MarsRover();
        const command = 'L';
        rover.execute(command);
        const direction = rover.getDirection();
        assert.equal(direction, 'O');
    });

    it('rover rotate to right', function()
    {
        const rover = new MarsRover();
        const command = 'R';
        rover.execute(command);
        const direction = rover.getDirection();
        assert.equal(direction, 'E');
    });

    it('rover rotate 180º', function()
    {
        const rover = new MarsRover();
        const commands = ['L','L','R','R','R','R','R'];
        rover.execute(commands);
        const direction = rover.getDirection();
        assert.equal(direction,'O');
    });

    it('rover move foward', function()
    {
        const rover = new MarsRover();
        const command = 'F';
        rover.execute(command);
        const [x, y] = rover.getPosition();
        expect([x, y]).to.deep.equal([0, -1]);
    });

    it('rover move backward', function()
    {
        const rover = new MarsRover();
        const command = 'B';
        rover.execute(command);
        const [x,y] = rover.getPosition();
        expect([x,y]).to.deep.equal([0, 1]);
    });

    it('rover move multiple moves', function()
    {
       const rover = new MarsRover();
       const commands = ['F','F','F','B'];
       rover.execute(commands);
       const [x, y] = rover.getPosition();
       expect([x, y]).to.deep.equal([0, -2]);
    });

    it('rover move fordward to west', function()
    {
        const rover = new MarsRover();
        const commands = ['L','F'];
        rover.execute(commands);
        const [x,y] = rover.getPosition();
        expect([x,y]).to.deep.equal([-1, 0]);
    });

    it('rover move fordward to south', function()
    {
        const rover = new MarsRover();
        const commands = ['R','R','F'];
        rover.execute(commands);
        const [x, y] = rover.getPosition();
        expect([x, y]).to.deep.equal([0, 1]);
    });
    it('rover move fordward to east', function()
    {
        const rover = new MarsRover();
        const commands = ['R','F'];
        rover.execute(commands);
        const [x,y] = rover.getPosition();
        expect([x,y]).to.deep.equal([1, 0]);
    });
    it('rover move backward from west', function()
    {
        const rover = new MarsRover();
        const commands = ['L','B'];
        rover.execute(commands);
        const [x,y] = rover.getPosition();
        expect([x,y]).to.deep.equal([1, 0]);
    });
    it('rover move backward from east', function()
    {
        const rover = new MarsRover();
        const commands = ['R','B'];
        rover.execute(commands);
        const [x,y] = rover.getPosition();
        expect([x,y]).to.deep.equal([-1, 0]);
    });
    it('rover move backward from south', function()
    {
        const rover = new MarsRover();
        const commands = ['R','R','B'];
        rover.execute(commands);
        const [x,y] = rover.getPosition();
        expect([x,y]).to.deep.equal([0, -1]);
    });
    it('rover move where ever we want to', function()
    {
        const rover = new MarsRover();
        const commands = ['R','R','L','B','F','F','B','R','L','B','B'];
        rover.execute(commands);
        const [x,y] = rover.getPosition();
        expect([x,y]).to.deep.equal([-2, 0]);
    });
});
