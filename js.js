document.querySelector("#login").addEventListener("click",function(){

    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    let passValue = pass.value;
    let emailValue = email.value;

    let useremail = "mmr@gmail.com";
    let userpass = "mmr";

    console.log(emailValue,passValue);

    if(emailValue === useremail && passValue == userpass){

        window.location.href = "bankpage.html";
        
    }else{
        alert("Invalid user!")
    }

    email.value = "";
    pass.value = "";

});