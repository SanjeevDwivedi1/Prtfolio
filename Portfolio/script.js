console.log('import working;')
let theme = localStorage.getItem('theme');
if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}
// let themeDots = document.getElementsByClassName('theme-dot');
// for (var i = 0; themeDots.length > i; i++) {
//     themeDots[i].addEventListener('click', function() {
//         let mode = this.dataset.mode;

//         console.log('Option clicked:', mode);
//         setTheme(mode);
//     })
// }

function setTheme(mode) {
    var stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";



    if (mode == 'light') {
        stylesheet.href = 'style.css';
    }
    if (mode == 'blue') {
        stylesheet.href = 'blue.css';
    }
    if (mode == 'green') {
        stylesheet.href = 'green.css';
    }
    if (mode == 'purple') {
        stylesheet.href = 'purple.css';
    }

    document.head.appendChild(stylesheet);

    localStorage.setItem('theme', mode);

}

var el = document.querySelectorAll(".theme-dot"); // this element contains more than 1 DOMs.
for (var i = 0; i < el.length; i++) {
    el[i].onclick = function() {
        let mode = this.dataset.mode;

        console.log("mode: ", this.dataset.mode);
        setTheme(mode);

    };
}