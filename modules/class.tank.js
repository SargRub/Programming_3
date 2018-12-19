var LivingCreature = require("./class.LivingCreature");

module.exports = class Tank extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 6;
        this.directions = [];
        this.acted = false;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 3, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x - 2, this.y - 3],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x, this.y - 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y - 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y - 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y - 3],
            [this.x + 3, this.y + 3],
            [this.x + 3, this.y - 2],
            [this.x + 3, this.y - 1],
            [this.x + 3, this.y],
            [this.x + 3, this.y + 1],
            [this.x + 3, this.y + 2],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
        ]
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    move(matrix) {
        if (this.acted == false) {
            var newCell = random_item(this.chooseCell(0, matrix));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.acted = true;
            }
        }
        this.energy--;
    }
    die(matrix) {
        matrix[this.y][this.x] = 0;
    }
    kill(matrix) {
        if (this.acted == false) {
            var newCell = random_item(this.chooseCell(2, matrix));
            var newCell_2 = random_item(this.chooseCell(3, matrix));
            var newCell_3 = random_item(this.chooseCell(4, matrix));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 0;
                this.energy++;
                this.acted = true;
            }
            else if (newCell_2) {
                var newX = newCell_2[0];
                var newY = newCell_2[1];
                matrix[newY][newX] = 0;
                this.energy++;
                this.acted = true;
            }
            else if (newCell_3) {
                var newX = newCell_3[0];
                var newY = newCell_3[1];
                matrix[newY][newX] = 0;
                this.energy++;
                this.acted = true;
            }
            else {
                this.move(matrix);
            }
            if (this.energy <= 0) {
                this.die(matrix);
            }
        }
    }
}
function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}