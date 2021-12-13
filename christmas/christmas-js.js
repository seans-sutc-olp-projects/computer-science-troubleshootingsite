function ischristmas() {
    const d = new Date();
    const month = d.getMonth()
    return month == 11
}
function christmasstylesheet() {
    if (ischristmas()) {
        var head = document.getElementsByTagName('HEAD')[0]; 
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/christmas/christmas-css.css'; 
        head.appendChild(link); 
    }
}