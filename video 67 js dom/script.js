console.log("Hello world")
document.body.firstElementChild

document.body.firstElementChild.firstChild

document.body.firstElementChild.childNodes
// NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
document.body.firstElementChild.element
// undefined
document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]0: div.box1: div.box2: div.box3: div.box4: div.boxlength: 5[[Prototype]]: HTMLCollection
document.body.firstElementChild.children[4]
{/* <div class=​"box">​Box5​</div>​ */}
document.body.firstElementChild.children[4].nextElementSibling
// null