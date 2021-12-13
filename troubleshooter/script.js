function troubleshooter(Visibility, Element, LastElement) {
    const newelement = document.getElementById(Element)
    const oldelement = document.getElementById(LastElement)
    newelement.style.visibility = Visibility
    oldelement.style.visibility = 'hidden'
}