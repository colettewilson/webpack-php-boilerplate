function domReady() {

	const inits = [
    	// A list of class names matched to components, e.g.:
    	// ['js-hello-world', HelloWorld],
    	["js-test", require("./test")],
  	]


  	for (const init of inits) {
	    const elements = document.querySelectorAll(`.${init[0]}`);

	    for (const element of elements) {
	      new init[1].default(element)
	    }
	}

}

window.onload = domReady;