let password = document.getElementById("password")
let password1 = document.getElementById('password2')
let showPass = document.getElementById('showPass')
let errorDisplay = document.getElementById('error')
let submit = document.getElementById('submit')
let sPass = document.getElementById('sPass')
let heading = document.getElementById('heading')
let signUps = document.getElementById('signUp')
let formGroup = document.querySelectorAll(".login-container")
function check() {
    if (showPass.checked) {
        let passwords = document.querySelectorAll('.password')
        passwords.forEach(password => {

            console.log("hd")
            password.type = "text"
            sPass.textContent = "Hide Password"
        });

    }
    else {
        let passwords = document.querySelectorAll('.password')
        passwords.forEach(password => {

            password.type = "password"
            sPass.textContent = "Show Password"
        });

    }
}
function passwordLengthCheck() {
let password1 = document.getElementById('password2')

    if (password.value.length > 8) {
        password.style.border = "1.5px solid green"
        password.style.borderColor = "green"
        password.style.outline = "none"
        errorDisplay.textContent = ""
        // password.style.backgroundColor = "green"
    }
    else if (password.value.length == 0) {
        password.style.outline = "default"
        password.style.borderColor = "default"

    }
    else if (password.value.length < 8) {
        password.style.border = "1.5px solid red"
        password.style.borderColor = "red"
        password.style.outline = "none"
        // password.style.outlineColor = "red"
    }
    if (submit.textContent == "Sign Up") {
        console.log(password.value)
         if(password1.value.length == 0) {
            password1.style.outline = "default"
            password1.style.borderColor = "default"
        }
        else if (password.value == password1.value && password1.value.length > 8) {
            password1.style.border = "1.5px solid green"
            password1.style.borderColor = "green"
            password1.style.outline = "none"
            errorDisplay.textContent = ""
        }
        else{
            password1.style.border = "1.5px solid red"
        password1.style.borderColor = "red"
        password1.style.outline = "none" 
        }
    }


}
function submited() {
let password1 = document.getElementById('password2')

    if (submit.textContent == "Login") {

        if (password.value.length < 8) {

            errorDisplay.textContent = "Password must have at least 8 charcters"
            errorDisplay.style.color = "red"
            submit.type = "button"
            newbr = document.createElement("br")
            errorDisplay.after(newbr)
        }
        else {
            submit.type = "submit"
            errorDisplay.textContent = ""

        }

    }

    else {
        if(password.value.length<8){
            errorDisplay.textContent = "Password must have at least 8 charcters"
            errorDisplay.style.color = "red"
            submit.type = "button"
            newbr = document.createElement("br")
            // errorDisplay.after(newbr)
            if(document.getElementById("newsmall")){
            document.getElementById("newsmall").remove()}
        }
        else if(password.value != password1.value){
            // errorDisplay.after(newbr)
          newsmall = document.createElement("small")
          newsmall.setAttribute("id", "newsmall")
          newsmall.textContent = "Password and Confirm Password must be same"
          newsmall.style.color = "red"
          errorDisplay.after(newsmall)
            submit.type = "button"
            newbr = document.createElement("br")

        }
        else{
            submit.type = "submit"
            errorDisplay.textContent = ""
            document.getElementById("newsmall").textContent =""

        }
        
    }
}
setInterval(passwordLengthCheck, 10)

function signUp() {
    if (signUps.lastElementChild.textContent == 'SignUp') {
        signUps.lastElementChild.textContent = 'Login'
        heading.textContent = "SignUp"
        signUps.firstElementChild.textContent = "Already have an account?"
        newdiv = createInputDiv("email", "Email", "email", "newlyAdded")
        var a = document.querySelectorAll(".form-group")
        newdiv1 = createInputDiv("password", "Confirm Password", "password2", "password newlyAdded")
        a[0].after(newdiv)
        var b = document.getElementById("password")
        a[1].after(newdiv1)
        submit.textContent = "Sign Up"
    }
    else if (signUps.lastElementChild.textContent == 'Login') {
        signUps.lastElementChild.textContent = 'SignUp'
        heading.textContent = "Login"
        submit.textContent = "Login"

        newlyAdded = document.querySelectorAll(".newlyAddeds")
        newlyAdded.forEach(newlyAdd => {
            console.log(newlyAdd)
            newlyAdd.remove();
        }
        )
    };

}
function createInputDiv(type, labelcontent, id, classs) {
    
    let newdiv = document.createElement("div")
    newdiv.setAttribute("class", "form-group newlyAddeds")
    let newlabel = document.createElement("label")
    newlabel.setAttribute("for", id)
    newlabel.textContent = labelcontent
    let newinput = document.createElement("input")
    newinput.setAttribute("type", type)
    newinput.setAttribute("id", id)
    newinput.setAttribute("class", classs)

    newdiv.appendChild(newlabel)
    newdiv.appendChild(newinput)
    return newdiv
}