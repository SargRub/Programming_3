var LivingCreature = require("./class.LivingCreature");

module.exports = class Grass extends LivingCreature{
    mul(matrix) {
        this.multiply++;
        var newCell = random_item(this.chooseCell(0, matrix));

        if (newCell && this.multiply >= 4) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new Grass(newX, newY, 1);
            this.multiply = 0;
        }
    }
}
function random_item(items) 
{
    return items[Math.floor(Math.random() * items.length)];
}