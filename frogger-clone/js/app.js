//  GEM CREATION

/**
* Stores gem X, Y, and sprite info to be used for parameters in new Gem().
*/
var gemY = 0;
var gemX = 0;
var gemSprite = 0;

/**
* randomizes the X and Y coordinates for the new Gem
* randomY and randomSprite are 1-3 while randomX is 1-5.
*/
var randomY = Math.floor(Math.random() * 3) + 1;
var randomX = Math.floor(Math.random() * 5) + 1;
var randomSprite = Math.floor(Math.random() * 3) + 1;

/**
* sets gemY, gemX, and gemSprite to the updated values for final placement on the board
* values come from randomY, randomX, and randomSprite above
* @function
* @param {number} randomY - random number between 1-3. Updates gemY for the new Y position of the gem.
* @param {number} randomX - random number between 1-5. Updates gemX for new X position of the gem.
* @param {number} randomSprite - random number between 1-3. Updates gemSprite with which gem is to be used.
*/
var gemCreation = function() {
    switch(randomY) {
        case 1:
            gemY = 60;
            break;
        case 2:
            gemY = 145;
            break;
        case 3:
            gemY = 230;
            break;
    }
    switch (randomX) {
        case 1:
            gemX = 0;
            break;
        case 2:
            gemX = 100;
            break;
        case 3:
            gemX = 200;
            break;
        case 4:
            gemX = 300;
            break;
        case 5:
            gemX = 400;
            break;
    }
    switch (randomSprite) {
        case 1:
            gemSprite = 'images/Gem%20Blue.png'; //idea to put %20 as spaces came from https://discussions.udacity.com/t/encoding-when-file-name-has-a-space-like-gem-green-png/19371
            break;
        case 2:
            gemSprite = 'images/Gem%20Green.png';
            break;
        case 3:
            gemSprite = 'images/Gem%20Orange.png';
            break;
    }
};

/**
* calls gemCreation function to set X, Y, and sprite values for gem on game startup.
*/
gemCreation(); //not sure if I should include @function for this one or not.

/**
* Gem class used to construct gems
* @class
* @param {number} x - recives x value from new Gem() below to set the X location on the board.
* @param {number} y - recives y value from new Gem() below to set the Y location on the board.
* @param {string} sprite - recives sprite value from new Gem() below to sets which sprite image to use.
*/
var Gem = function(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
};

/**
* Ensures the engine continuously checks for collisions by funning the collision function
* which checks for collisions between the player and the gem.
* @function
* @param dt
*/
Gem.prototype.update = function(dt) {
    this.collision(); //came from https://discussions.udacity.com/t/project-3-gem-collision/6740
};

/**
* Engine.js initiates the function to grab the gem's x, y, and sprite values to render the gem.
* @function
*/
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/**
* Creates a new Gem object
*/
var gem = new Gem(gemX, gemY, gemSprite);

/**
* stores the score values which are then used to updated the DOM
*/
var highScore = 0;
var score = 0;

/**
* Used to make a new gem after collisions with gems and the player reaching the water
* randomY, randomX, randomSprite, gemCreation(); work the same as above to create a new gem.
* These also generate a new random number used in gemCreation() which then update gemY, gemX, and gemSprite.
* this.x, this.y, this.sprite operate the same as the Gem class. They obtain values from gemX, gemY, and gemSprite and then generates a new gem.
* The if loop sets the high school to the current score if the current score is higher than the high score and set's the HTML to display the new updated high score.
* @function
*/ 
Gem.prototype.newGem = function() {
    randomY = Math.floor(Math.random() * 3) + 1;
    randomX = Math.floor(Math.random() * 5) + 1;
    randomSprite = Math.floor(Math.random() * 3) + 1;
    gemCreation();
    this.x = gemX;
    this.y = gemY;
    this.sprite = gemSprite;
    //syncs the current scores and high score which is then used to update the high score in the DOM//
    if (highScore < score) {
        highScore = score;
        document.getElementById("high").innerHTML = highScore; //code came from http://www.w3schools.com/js/js_htmldom_html.asp
    }
};

/**
* Checks for collisions between the player and the gem.
* Adds points to the score variable based on which sprite is currently in use
* the code then updates the DOM with the updated score after each collision and creates a new gem
* Updates index.html to show the updated score
* @function
*/
Gem.prototype.collision = function() {

    if (player.x < this.x + 50 &&
    player.x + 50 > this.x &&
    player.y < this.y + 50 &&
    player.y + 50 > this.y) {
        if (this.sprite === 'images/Gem%20Blue.png') {
            score += 1;
        } else if (this.sprite === 'images/Gem%20Orange.png') {
            score += 2;
        } else if (this.sprite === 'images/Gem%20Green.png') {
            score += 5;
        }
        document.getElementById("current").innerHTML = score;
        this.newGem();
    }
};


//  ENEMY CREATION

/**
*Enemy class
* @class
*/
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

/**
* Continuously updates the enemy's location using a set time to keep it constant across different computers
* if the enemy's x value is 500, which is outside the board, it will reset.
* The second if loop checks for collisions between the enemy and the player which then creates a new gem, resets the score and resets the HTML
* @function
*/
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;  //code from https://discussions.udacity.com/t/enemy-position-not-resetting/35511/4
    if (this.x >= 500) {
        this.reset();
    }
    if (player.x < this.x + 30 &&
    player.x + 30 > this.x &&
    player.y < this.y + 30 &&
    player.y + 30 > this.y) {
        alert("Oh noes! You\'ve been hit!");
        player.playerReset();
        gem.newGem();
        score = 0;
        document.getElementById("current").innerHTML = 0;
    }
};

/**
* sends enemy location and sprite info to engine.js for rendering
* @function
*/
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/**
* function used to reset the enemy's location
* @function
*/
Enemy.prototype.reset = function() {
    this.x = -25;
    this.speed = 75 * (Math.random() * 5 + 1);
};


//  PLAYER CREATION

/**
* Stores the player's answer from playerPrompt
*/
var playerChoice = 0;

/**
* Asks the player to select the character they want to play with. if no number is selected a default is set
*/
var playerPrompt = function() {
    prompt("Please enter the number (1-5) for the character you want to play.");
}
window.onload = playerPrompt;

switch (playerPrompt) {
    case '1':
        playerChoice = 'images/char-boy.png';
        break;
    case '2':
        playerChoice = 'images/char-cat-girl.png';
        break;
    case '3':
        playerChoice = 'images/char-horn-girl.png';
        break;
    case '4':
        playerChoice = 'images/char-pink-girl.png';
        break;
    case '5':
        playerChoice = 'images/char-princess-girl.png';
        break;
    default:
        playerChoice = 'images/char-boy.png';
}

/**
* Player class
* @class
*/
var Player = function(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
};

/**
* not an operation
* @function
*/
Player.prototype.update = function(dt) {
    //noop
};

/**
* Sends player location and sprite info to engine.js for rendering
* @function
*/
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/**
* Resets the player's location after collision with a bug or reaching the water
* @function
* @constant {number}
*/
Player.prototype.playerReset = function() {
    this.x = 200;
    this.y = 400;
};

/**
* stores the values for how far the player will move in the x and y directions
* @constant {number}
* @constant {number}
*/
var tileHeight = 101;
var tileWidth = 83;

/**
* Receives inputs from the allowedKeys array and turns them into movement commands
* Arrow keys only
* Character moves in the x and y directions by the values of tileHeight and tileWidth
* @function
*/
Player.prototype.handleInput = function(keyCode) {
    switch (keyCode) {
        case "left":
            this.x -= tileHeight;
            break;
        case "up":
            this.y -= tileWidth;
            break;
        case "right":
            this.x += tileHeight;
            break;
        case "down":
            this.y += tileWidth;
            break;
    }
    /**
    * Sets the boundaries for the board to prevent the player moving off screen
    * if the player's position is <60, the game resets, a new gem is created, the score is reset and the HTML for the score is updated
    */
    if (this.x < 0) {
        this.x = 0;
    } else if (this.x > 400) {
        this.x = 400;
    } else if (this.y > 400) {
        this.y = 400;
    } else if (this.y < 60) {
        this.playerReset();
        alert("Congratulations! You've made it to the other side safely!");
        gem.newGem();
        score = 0;
        document.getElementById("current").innerHTML = 0;
    }
};

/**
* Stores the 3 bugs made with the next for loop
*/
var allEnemies = [];

/**
* Creates 3 instances of Enemy and sets the x and y location and a randomized speed
*/
for (var i = 0; i < 3; i++) {
    var enemySpeed = 75 * (Math.floor(Math.random() * 5) + 1); //code pieced together from numerous Udacity.com forum posts under project 3
    allEnemies.push(new Enemy(-50 + i * 50, 60 + 85 * i, enemySpeed));
}

/**
* Creates a new instance of Player
* @param {number} 200 - value of location on x-axis
* @param {number} 400 - value of location on y-axis
* @param {string} playerChoice takes value from the playerChoice variable which stores player character selection
*/
var player = new Player(200, 400, playerChoice);


//  MISCELLANEOUS

/**
* Listens for inputs from the keyboard and saves them in the allowedKeys array
* Only arrow keys can be used
*/
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});