
console.log(document.lastnameForm.lastname);

let printName = () => {
    let obj = {
        lastname : lastnameForm.lastname.value
    }
    lastnameForm.lastname.focus()
    console.log(lastnameForm.lastname.nextElementSibling);
}