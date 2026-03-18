const email = document.querySelector(".email")
const password = document.querySelector(".password")
const emailErr = document.querySelector(".emailErr")
const passwordErr = document.querySelector(".passwordErr")
const form = document.querySelector("#submit")


form.addEventListener("submit",(e) => {
    e.preventDefault()
        let isValid = true;

        const emailPattern = /^[a-zA-Z0-9.+%_-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                           

        // Email validation
        if (!emailPattern.test(email.value)) {
            emailErr.textContent = "Enter a valid email";
            isValid = false;
        }

        if(!emailPattern.test(password.value)){
            passwordErr.textContent =" Enter Valid Password"
            isValid=false
            console.log("password")
        }
})