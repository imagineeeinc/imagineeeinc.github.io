const fs = require('fs');
var list = []

fs.readdirSync('./').forEach(file => {
    list.push(file)
});
fs.readdirSync('./css').forEach(file => {
    list.push("css/" + file)
});
fs.readdirSync('./Favicon').forEach(file => {
    list.push("Favicon/" + file)
});
fs.readdirSync('./icon').forEach(file => {
    list.push("icon/" + file)
});
fs.readdirSync('./img').forEach(file => {
    list.push("img/" + file)
});
fs.readdirSync('./img/logo').forEach(file => {
    list.push("img/logo/" + file)
});
fs.readdirSync('./js').forEach(file => {
    list.push("js/" + file)
});

console.log(list)