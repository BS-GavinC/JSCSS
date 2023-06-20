
let params = new URLSearchParams(window.location.search)

document.getElementById("lastname").innerHTML = params.get('lastname')
document.getElementById("firstname").innerHTML = params.get('firstname')
document.getElementById("birthdate").innerHTML = params.get('birthdate')