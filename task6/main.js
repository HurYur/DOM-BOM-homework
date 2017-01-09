  document.getElementById('player').style.top = '50px';
  document.getElementById('player').style.left = '50px';
  var sreenSizeX = window.innerWidth,
      sreenSizeY = window.innerHeight,
      fires = document.getElementsByClassName('fire'),
      el = document.getElementById('player'),
      enemyHealth = 100,
      $enemy = document.getElementById('enemy');


document.body.onkeydown = function (e) {
  var KEYCODE_LEFT = 37,
      KEYCODE_RIGHT = 39,
      KEYCODE_UP = 38,
      KEYCODE_DOWN = 40,
      KEYCODE_FIRE = 32;



  if (e.keyCode == KEYCODE_LEFT) {
  	el.style.left = (parseInt(el.style.left) - 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_RIGHT) {
  	el.style.left = (parseInt(el.style.left) + 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_UP) {
    el.style.top = (parseInt(el.style.top) - 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_DOWN) {
    el.style.top = (parseInt(el.style.top) + 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_FIRE) {
    makefire();
  }
// creating shoot
  function makefire(){
    var  $fire = document.createElement('div');
    $fire.className = "fire";
    $fire.style.top = (parseInt(el.style.top) + 20 ) + 'px';
    $fire.style.left = (parseInt(el.style.left) + 80) + 'px';
    document.body.appendChild($fire);
  }
};
// shoot goes to right side
function fireMove() {
    for (var key = 0; key < fires.length; key++){
        if (typeof fires[key] !== "undefined"){
            fires[key].style.left = parseInt(fires[key].style.left) + 10 + 'px';
            if (sreenSizeX - 20 <= parseInt(fires[key].style.left)){
                //check the enemy position
                if(parseInt(fires[key].style.top) > parseInt($enemy.style.top) &&
                    parseInt(fires[key].style.top) < 45 + parseInt($enemy.style.top)){
                    enemyHealth--;
                    console.log(enemyHealth);
                    document.getElementById('enemyHealth').innerText = enemyHealth;
                }

                fires[key].remove();

            }
        }
    }
    if (enemyHealth > 0){
        setTimeout(fireMove, 20);
    }
}
// enemy move
function enemyMove() {
    $enemy.style.top = Math.floor(Math.random()*sreenSizeY) + 'px';
    if (enemyHealth > 0){
        setTimeout(enemyMove, 4000);
    }
    else{
        confirm('Confratulation you win');
    }

}