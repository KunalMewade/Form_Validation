
const name= document.getElementById('name');
const email= document.getElementById('email');
const phone= document.getElementById('phone');

let validUser = false;
let validPhone = false;
let validEmail = false;


$('#failure').hide();
$('#success').hide();

name.addEventListener('blur',()=>{

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log("Input UserName is : "+`"str"`);

    if(regex.test(str)){
        console.log("valid username");
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log("Invalid username"); 
        name.classList.add('is-invalid');
        validUser = false;
    }
})

email.addEventListener('blur',()=>{
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log("Input Email is : "+str);

    if(regex.test(str)){
        console.log("valid E-mail");
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log("Invalid E-mail"); 
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur',()=>{
    let regex = /([0-9]){10}$/;
    let str = phone.value;
    console.log("Input Phone Number is : "+str);

    if(regex.test(str)){
        console.log("valid Phone Number");
        phone.classList.remove('is-invalid');
        validPhone = true;

    }
    else{
        console.log("valid Phone Number"); 
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    
    if(validUser && validPhone && validEmail){
        console.log('submitting form');
        let success = document.getElementById('success');
         success.classList.add('show');
        //  failure.classList.remove('show');
        
        $('#failure').hide();
        $('#success').show();
        
        
    }
    else{
        console.log('invalit entities Resubmit form')
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');

        $('#failure').show();
        $('#success').hide();
    }
})