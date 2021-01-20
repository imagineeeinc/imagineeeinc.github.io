window.onload = function() {
  setInterval(function() {document.getElementById("load").style.display = "none"}, 500)
}

var menu = `<p><h2>Imagineee</h2></p>
<p><a href='index.html'>Home</a></p>
<p><a href='about.html'>About</a></p>
<p><a href='projects.html'>Projects</a></p>
<p><a href='about.html#about'>Bio</a></p>
<p><a href='about.html#contact'>Contacts</a></p>
<p><a href='about.html#skills'>Skills</a></p>
<p><a href='about.html#tools'>Tools</a></p>
<p><a href='about.html#facts'>Facts</a></p>
<p id='install-box' class='small-tilt'>
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
setTimeout(function() {
  window.addEventListener('DOMContentLoaded', () => {
    let displayMode = 'browser tab';
    if (navigator.standalone) {
      displayMode = 'standalone';
    }
    if (window.matchMedia('(display-mode: standalone)').matches) {
      displayMode = 'standalone';
    }
    // Log launch display mode to analytics
    console.log('DISPLAY_MODE_LAUNCH:', displayMode);
    if (displayMode == "standalone") {
      document.getElementById("install-box").style.display = "none"
    }
  });
}, 1000)
if (!'serviceWorker' in navigator) {
  document.getElementById("install-box").style.display = "none"
}

VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 10,
  speed: 500,
  perspective: 1000,
  reverse: true,
  scale: 1.05,
  glare: true,
  "max-glare": 0.5,
});
VanillaTilt.init(document.querySelectorAll(".tilt-nog"), {
  max: 10,
  speed: 500,
  perspective: 1000,
  reverse: true,
  scale: 1.05,
  glare: false,
});
VanillaTilt.init(document.querySelectorAll(".small-tilt"), {
  max: 3,
  speed: 500,
  perspective: 1000,
  reverse: true,
  glare: true,
  "max-glare": 0.1,
});
VanillaTilt.init(document.querySelectorAll(".small-tilt-nog"), {
  max: 3,
  speed: 500,
  perspective: 1000,
  reverse: true,
  glare: false,
});