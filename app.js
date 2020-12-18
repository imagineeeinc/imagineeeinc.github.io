var menu = `<p><h2>Imagineee</h2></p><p><a href='index.html'>Home</a></p>
<p><a href='wood.html'>Wood Applications</a></p>
<p><a href='game.html'>Games</a></p>`

document.getElementById('menus').innerHTML = menu



document.getElementById('menu-btn-box').onclick = function() {
    var m = document.getElementById('menus')
    if (m.className != 'smenu') {
        m.className = 'smenu';
        document.getElementById('menu-btn-burger').className = 'close'
    } else {
        m.className = 'hmenu';
        document.getElementById('menu-btn-burger').className = 'menu-btn-burger'
    }
}