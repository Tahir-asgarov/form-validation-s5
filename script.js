document.addEventListener("DOMContentLoaded", function () {
    const username = document.querySelector("#username")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const password2 = document.getElementById("password2")


    const formElementi = document.querySelector(".form")

    console.log(formElementi)


    function showSuccess(input) {
        const valideynElement = input.parentElement
        valideynElement.classList.add("success")

    }
    

    function showError(qutu, mesaj) {
        const valideynElement = qutu.parentElement
        valideynElement.classList.add("error")
        const smallTeqi = valideynElement.querySelector("small")
        smallTeqi.innerText = mesaj

    }



    function checkEmail(mail){
        const qayda = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (mail.value.trim() === "") {
            showError(mail, "E-mail daxil edilmeyib!");
        } else if(qayda.test(mail.value)){
            showSuccess(mail);
        } else {
            showError(mail, "E-mail formati duzgun deyil!");
        }
    }

// template literal, string literal
    function checkRequired(inputlar){
        inputlar.forEach(birInput => {
            if(birInput.value.trim() === ""){
                showError(birInput, `${getFieldName(birInput)} sahesi bos buraxila bilmez`)
            }
            else{
                showSuccess(birInput)
            }
        })
    }


    function getFieldName(testBox){
        return testBox.id.charAt(0).toUpperCase() + testBox.id.slice(1)
    }

    // Callback fn
    // HOF-High order function
    function checkLength(input, min, max){
        
            if(input.value.length < min || input.value.length > max ){
                showError(input, `${getFieldName(input)}sahesi minimum ${min}ve maksimum ${max} simvoldan ibaret olmalidir!`)
            }
            else{
                showSuccess(input)
            }
        
    }

    function comparePassword(password, confirmPassword){
        if(password.value !== confirmPassword.value){
            showError(confirmPassword, "sifreler uygun deyil")
        }
        
    }


        formElementi.addEventListener("submit", function(e) {
            e.preventDefault() //yenilenmenin qarsisini alir
            checkRequired([username, email, password, password2])
            checkLength(username, 3, 10)
            checkLength(password, 8, 13)
            comparePassword(password, password2)
            
        })




})



function showpassword() {
    const passwordSahesi = document.getElementById("password");
    if (passwordSahesi.type === "password") {
      passwordSahesi.type = "text";
    } else {
      passwordSahesi.type = "password";
    }
  }


 

  document.querySelector(".fa-eye").addEventListener("click", showpassword)
  