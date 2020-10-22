var menu = "<p><h2>Welcome To The Menu</h2></p><p><a href='index.html'>Home</a></p><p><a href='wood.html'>Wood Applications</a></p><p><a href='https://imagineeeinc.github.io/Table-Chat/'>Table Chat</a></p><p><a href='game.html'>Games</a></p><p><a href='https://imagineeeinc.github.io/EtchTerm/'>EtchTerm</a></p>"

document.getElementById('menus').innerHTML = menu



document.getElementById('menu').onclick = function() {
    var m = document.getElementById('menus')
    if (m.className != 'smenu') {
        m.className = 'smenu';
    } else {
        m.className = 'hmenu';
    }
}