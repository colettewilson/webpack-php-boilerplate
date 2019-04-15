function domReady() {
  const inits = [
    // A list of class names matched to components, e.g.:
    // ['js-hello-world', HelloWorld],
    ["js-test", require("./test")],
  ]

  for (let i = 0; i < inits.length; i++) {
    let init = inits[i]
    let elements = document.querySelectorAll(`.${init[0]}`)

    for (let j = 0; j< elements.length; j++) {
      new init[1].default(elements[j])
    }
  }
}

window.onload = domReady;
