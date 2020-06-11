let player1 = {
    currentPts: 0
}
let player2 = {
    currentPts: 0
}

document.getElementById('p1-roll').addEventListener('click', p1Roll);
document.getElementById('p2-roll').addEventListener('click', p2Roll);

function p1Roll() {
    let rollNum = Math.floor(Math.random() * 6) + 1;
    document.getElementById('p1-roll-img').src = 'assets/dice' + rollNum + '.png'
    if (player1.currentPts > 30) {
        alert(`Player 1 Wins!`)
    }
    if (player1.currentPts !== 0) {
        document.getElementById('box-' + player1.currentPts).classList.remove('active-1');
    }
    player1.currentPts += rollNum;
    if (player1.currentPts === 10 || player1.currentPts === 28) {
        player1.currentPts = player1.currentPts - 5
    }
    else if (player1.currentPts === 9) {
        player1.currentPts = player1.currentPts + 7
    }
    else if (player1.currentPts === 23) {
        player1.currentPts = player1.currentPts + 3
    }
    document.getElementById('box-' + player1.currentPts).classList.add('active-1');

    document.getElementById('p1-roll').disabled = true;
    document.getElementById('p2-roll').disabled = false;
}

function p2Roll() {
    let rollNum = Math.floor(Math.random() * 6) + 1;
    document.getElementById('p2-roll-img').src = 'assets/dice' + rollNum + '.png'
    if (player2.currentPts > 30) {
        alert(`Player 1 Wins!`)
    }
    if (player2.currentPts !== 0) {
        document.getElementById('box-' + player2.currentPts).classList.remove('active-2');
    }
    player2.currentPts += rollNum;
    if (player2.currentPts === 10 || player2.currentPts === 28) {
        player2.currentPts = player2.currentPts - 5
    }
    else if (player2.currentPts === 9) {
        player2.currentPts = player2.currentPts + 7
    }
    else if (player2.currentPts === 23) {
        player2.currentPts = player2.currentPts + 3
    }
    document.getElementById('box-' + player2.currentPts).classList.add('active-2');

    document.getElementById('p1-roll').disabled = false;
    document.getElementById('p2-roll').disabled = true;
}




