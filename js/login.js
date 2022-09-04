document.getElementById('login-btn').addEventListener('click', function(){
    const emailFild =  document.getElementById('user-email');
    const email =  emailFild.value;

    const passwordFild =  document.getElementById('user-password');
    const password =  passwordFild.value;

    if(email === "abdurrazzak@gmail.com" && password === "admin"){
        window.location.href = 'bank.html';
    }
    else{
        alert('Your password or email is nor currect');
    }
});