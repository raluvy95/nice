var count = 0;
function random() {
    return Math.floor(Math.random() * 99999) + 10000;
}
function start() {
    var c= document.getElementById("count");
    var ng = document.getElementById("generated")
    document.getElementById("gone").remove();
    document.getElementById("he").innerHTML = "Generating...";
    var destroy = setInterval(function() {
        count++
        c.innerHTML = count;
        var found = random();
        ng.innerHTML = found;
        if(found == 69420 || found == 42069) {
            clearInterval(destroy);
            document.getElementById("he").innerHTML = "Found! Refresh this page to try again";
        }
    }, 1);
}
