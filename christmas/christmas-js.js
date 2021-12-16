function ischristmas() {
    const d = new Date();
    const month = d.getMonth()
    return month == 11
}
if (ischristmas()) {
  var head = document.getElementsByTagName('HEAD')[0]; 
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/christmas/christmas-css.css'; 
  head.appendChild(link); 
  console.log('ammended the file');
}