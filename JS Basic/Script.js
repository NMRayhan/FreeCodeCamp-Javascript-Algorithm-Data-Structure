let count = 0;

function cc(card) {
    var rege = /[JQKA]/;
    if (card > 1 && card < 7) {
        count++;
    } else if (card === 10 || rege.test(card)) {
        count--;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

console.log(cc('Q'));