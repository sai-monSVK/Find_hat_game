const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(field) {
        this.field = field;
    }

    print() {
        for (let row of this.field) {
        console.log(row.join(' '));
        }
    }

    // playgame
    playGame() {
        let x=0;
        let y=0;
        this.print(this.field);

        while(this.field[x][y] === fieldCharacter || this.field[x][y] === pathCharacter){
            const direction = prompt('Which direction would you like to move? Please ennter N for North, S for South, E for East, or W for West.')

            if(direction.toUpperCase() === 'N') {
                if(x===0){
                    console.log('You cannot go further North. Type another directon.')
                } else {
                    x -= 1;
                }
            }

            else if(direction.toUpperCase() === 'S') {
                if(x >= this.field.length) {
                    console.log('You cannot go further South. Type another directon.')
                } else {
                    x += 1;
                }
            }

            else if(direction.toUpperCase() === 'W') {
                if(y === 0){
                    console.log('You cannot go further West. Type another directon.')
                } else {
                    y -= 1;
                }
            }

            else if(direction.toUpperCase() === 'E') {
                if(y >= this.field[y].length){
                    console.log('You cannot go further East. Type another directon.')
                } else {
                    y += 1;
                }
            } else {
                console.log('Wrong input, type S, W, E, N .');
            }
            
            if (this.field[x][y] === hat) {
               console.log('You found the hat - You win!')
             } else if (this.field[x][y] === hole) {
                console.log('You ended up in a hole - Game Over')
             } else {
                this.field[x][y] = pathCharacter;
                this.print(this.field);
            }

        } 
    };

};
//pomocny kod
const novePole = new Field([
    ['*', '^', '░'],
    ['░', '░', '░'],
    ['░', '░', '░']
]);

novePole.playGame();
