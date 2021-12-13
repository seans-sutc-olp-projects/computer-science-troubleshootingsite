function amendfile(OldElement) {
    const section = document.getElementById(OldElement);
    section.parentNode.removeChild(section)
}
function troubleshooter(Visibility, Element, OldElement) {
    const newelement = document.getElementById(Element)
    newelement.style.visibility = Visibility
    amendfile(OldElement);
}