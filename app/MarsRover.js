class MarsRover{
    constructor()
    {
        this.x = 0;
        this.y = 0;
        this.direction = 'N';
        this.compass = 'NESO';
        this.compassIndex = 0;
    }

    getPosition()
    {
        return [this.x, this.y];
    }

    getDirection()
    {
        return this.direction;
    }

    execute(commands)
    {
        for (let i = 0; i < commands.length; i++){
            if(commands[i] === 'L' || commands[i] === 'R'){
                this.rotate(commands[i]);
            }
            if(commands[i] === 'F' || commands[i] === 'B'){
                this.move(commands[i]);
            }
        }
    }

    rotate(command)
    {
        this.updateCompassIndex();

        if(command === 'L') {
            this.rotateToLeft();
            return;
        }
        this.rotateToRight();


    }

    updateCompassIndex() {
        this.compassIndex = this.compass.indexOf(this.getDirection());
    }

    rotateToLeft()
    {
        this.minusCompassIndex();
        if(this.compassIndex < 0)
        {
            //To do, 'this.compass.length - 1' put in function.
            this.compassIndex = this.compassLength();
        }
        this.updateDirection();
    }

    updateDirection() {
        this.direction = this.compass.charAt(this.compassIndex);
    }

    rotateToRight()
    {
        this.addCompassIndex();
        if(this.compassIndex > this.compassLength()){
            this.compassIndex = 0;
        }
        this.updateDirection();
    }

    move(command)
    {
        if(command === 'F'){
            this.moveForward(command);
            return;
        }
        this.moveBackward(command);

    }

    moveForward()
    {
        if(this.direction === 'N'){
            this.y--;
        }
        if(this.direction === 'E'){
            this.x++;
        }
        if(this.direction === 'S'){
            this.y++;
        }
        if(this.direction === 'O'){
            this.x--;
        }
    }

    moveBackward()
    {
        if(this.direction === 'N'){
            this.y++;
        }
        if(this.direction === 'E'){
            this.x--;
        }
        if(this.direction === 'S'){
            this.y--;
        }
        if(this.direction === 'O'){
            this.x++;
        }
    }

    minusCompassIndex()
    {
        this.compassIndex--;
    }

    addCompassIndex()
    {
        this.compassIndex++;
    }

    compassLength()
    {
        return this.compass.length - 1;
    }
}

module.exports=MarsRover;
