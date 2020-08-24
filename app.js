document.getElementById("menu").onclick = function() {
    var m = document.getElementById("menus")
    if (m.className != 'smenu') {
        m.className = 'smenu';
    } else {
        m.className = 'hmenu';
    }
}
document.getElementById("menu").onmouseover = function() {
    var m = document.getElementById("menus")
    if (m.className != 'smenu') {
        m.className = 'smenu';
    } else {
        m.className = 'hmenu';
    }
}