function random() {
    return Math.floor(Math.random() * 99999);
}
var count = 0;
do {
    count++;
    var finder = random();
    if (finder == 42069 || finder == 69420) {
        console.log(finder + " Found! " + count + " numbers to find");
        break;
    }
    else {
        console.log(finder);
    }
} while (true);
