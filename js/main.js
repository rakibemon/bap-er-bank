/* document.getElementById("submit-button").addEventListener('click',function(){
    document.getElementById("email").addEventListener("keyup",function(event){
        if(event.target.value == "abc@gmail.com"){
            document.getElementById("password").addEventListener("keyup",function(event){
                if(event.target.value == "pass"){
                    console.log("Right Email & Password")
                }
            })
        }
        else{
            console.log("Wrong Email or Password");
        }
    });
}) */
document.getElementById("submit-button").addEventListener("click", function(){
    // get user Email
    const email = document.getElementById("email");
    const userEmail = email.value;
    // get user Password
    const password = document.getElementById("password");
    const userPassword = password.value;
    // Check Email & Password
    if (userEmail == 'abc@gmail.com' && userPassword == 'secret') {
        // go to another page
        window.location.href = 'banking.html'
    }
    else {
        alert("Invalid User");
    }
});