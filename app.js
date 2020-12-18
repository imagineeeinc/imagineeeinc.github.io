var menu = `<p><h2>Imagineee</h2></p>
<p><a href='index.html'>Home</a></p>
<p><a href='wood.html'>Wood Applications</a></p>
<p><a href='game.html'>Games</a></p>
<p id='install-box'>
<b>Install as app</b>
<br><br><br>
<button id='install-btn'>Install</button>
</p>`
document.getElementById('menus').innerHTML = menu

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
});
window.addEventListener('appinstalled', (evt) => {
    // Log install to analytics
    console.log('INSTALL: Success');
    alert("thanks for installing the app")
    document.getElementById('install-box').style.display = "none" 
});
document.getElementById('install-btn').addEventListener('click', (e) => {
    // Hide the app provided install promotion
    document.getElementById('install-box').style.display = "none"
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
        document.getElementById('install-box').style.display = "block"
      }
    });
});

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