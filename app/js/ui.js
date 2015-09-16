/*
    Our basic launcher.

    Shows our internal loading page until the destination page loads.
*/
var gui = require('nw.gui');
var win = gui.Window.get();
win.maximize();
win.on ('loaded', function(){
    window.location.href = "http://www.coderdojomullingar.com";
});
