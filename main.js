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
    }

    static generateField(rows, columns) {
        let newField = [];
        for (let i = 0; i < rows ; i++) {
            newField.push([]);
        }; 
        for (let j = 0; j < columns; j++) {   
            for (let k = 0; k < rows; k++) {
                newField[k].push(fieldCharacter);
        };
        };
    
        //starting point

        newField[0][0] = pathCharacter;

        // hat location
        let hatRowCordinate = Math.floor(Math.random()*rows);
        let hatColumnCordinate = Math.floor(Math.random()*columns)
        
        while (hatColumnCordinate === 0 && hatRowCordinate === 0) {
            generateRandomCord();
        }; 
        
        newField[hatRowCordinate][hatColumnCordinate] = hat;

        //holes (30% percentage)

        let holeCount = Math.floor(rows * columns * 0.3);
  
        function generateRandNum() {
            return Math.random();
           
        }
        for(let n=0; n < holeCount;n++){
            let prva = Math.floor(generateRandNum()*rows);
            let druha = Math.floor(generateRandNum()*columns);
            
            if(newField[prva][druha] !== hat && newField[prva][druha] !== pathCharacter ){
        
            newField[prva][druha] = hole;
        } }
        return newField;
    
    }

    generateRandomCord() {
        hatRowCordinate = Math.floor(Math.random()*rows);
        hatColumnCordinate = Math.floor(Math.random()*columns)
    }

    
};
//pomocny kod
const testovaciePole = new Field(Field.generateField(10, 5));
testovaciePole.playGame();
