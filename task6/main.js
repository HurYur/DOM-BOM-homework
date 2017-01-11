var sreenSizeX = window.innerWidth,
    sreenSizeY = window.innerHeight,
    fires = document.getElementsByClassName('fire'),
    el = document.getElementById('player'),
    $enemy = document.getElementById('enemy');

function startValue() {
    enemyHealth = 100;
    shootsMade = 0;
    document.getElementById('player').style.top = '50px';
    document.getElementById('player').style.left = '50px';
    document.getElementById('enemyHealth').innerText = enemyHealth;
    document.getElementById('shootsMade').innerText = shootsMade;
}

document.body.onkeydown = function(e) {
    var KEYCODE_LEFT = 37,
        KEYCODE_RIGHT = 39,
        KEYCODE_UP = 38,
        KEYCODE_DOWN = 40,
        KEYCODE_FIRE = 32;

    if (e.keyCode == KEYCODE_LEFT && parseInt(el.style.left) > 0) {
        el.style.left = (parseInt(el.style.left) - 10) + 'px';
    } else if (e.keyCode == KEYCODE_RIGHT && parseInt(el.style.left) < sreenSizeX - 200) {
        el.style.left = (parseInt(el.style.left) + 10) + 'px';
    } else if (e.keyCode == KEYCODE_UP && parseInt(el.style.top) > 0) {
        el.style.top = (parseInt(el.style.top) - 10) + 'px';
    } else if (e.keyCode == KEYCODE_DOWN && parseInt(el.style.top) < sreenSizeY - 50) {
        el.style.top = (parseInt(el.style.top) + 10) + 'px';
    } else if (e.keyCode == KEYCODE_FIRE) {
        makefire();
    }

    // creating shoot
    function makefire() {
        var $fire = document.createElement('div');
        $fire.className = "fire";
        $fire.style.top = (parseInt(el.style.top) + 20) + 'px';
        $fire.style.left = (parseInt(el.style.left) + 80) + 'px';
        document.body.appendChild($fire);
        document.getElementById('shootsMade').innerText = ++shootsMade;
    }
};

// shoot goes to right side
function fireMove() {
    for (var key = 0; key < fires.length; key++) {
        if (typeof fires[key] !== "undefined") {
            fires[key].style.left = parseInt(fires[key].style.left) + 10 + 'px';
            if (sreenSizeX - 25 <= parseInt(fires[key].style.left)) {
                //check the enemy position
                if (parseInt(fires[key].style.top) > parseInt($enemy.style.top) &&
                    parseInt(fires[key].style.top) < 45 + parseInt($enemy.style.top)) {
                    enemyHealth--;
                    console.log(enemyHealth);
                    document.getElementById('enemyHealth').innerText = enemyHealth;
                }
                //delete the fire it come to end of the screen
                fires[key].remove();
            }
        }
    }
    if (enemyHealth > 0) {
        setTimeout(fireMove, 20);
    }
}

// enemy move
function enemyMove() {
    $enemy.style.top = Math.floor(Math.random() * sreenSizeY) + 'px';
    if (enemyHealth > 0) {
        //set how quick change enemy position
        setTimeout(enemyMove, 4500);
    } else {
        alert('Confratulation you win \n You made: ' + shootsMade + ' shoots to kill the enemy');
        if (confirm('Do you want to play again?')) {
            startValue();
            fireMove();
            enemyMove();
        }
    }
}