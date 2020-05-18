let form = document.querySelector('form');
let nameInput = document.querySelector('#nameInput');
let addressInput = document.querySelector('#addressInput');
let emailInput = document.querySelector('#emailInput');
let phoneInput = document.querySelector('#phoneInput');
let passwordInput = document.querySelector('#passwordInput');
let password2Input = document.querySelector('#password2Input');
let checkbox = document.querySelector("#checkbox");
let errorMessge = document.querySelector('#errorMessage');
let clearButton = document.querySelector('.clearButton')


form.addEventListener('submit', submitEvent);

function submitEvent (event){
    let ischecked = checkbox.checked
    let isPasswordShort = passwordInput.value.length < 10
    let confirmationIsNotIdentical = passwordInput.value !== password2Input.value
    event.preventDefault()
    if(ischecked == false){
        window.alert('To continue, agree to terms of usage')
    }
    else if(isPasswordShort){
        passwordInput.setAttribute('style', 'border: 2px solid crimson')
        passwordInput.focus();
        errorMessge.innerText = `Your password is too short ! How about "${createRandomString()}" ?`
        errorMessage.setAttribute('style', 'display:flex;')
        clearErrors(password2Input)
    }else if(confirmationIsNotIdentical){
        password2Input.setAttribute('style', 'border: 2px solid crimson')
        password2Input.focus();
        errorMessge.innerText = "Your passwords don't match ! Please make sure your password and confirmation password are identical."
        errorMessage.setAttribute('style', 'display:flex;')
        clearErrors(passwordInput)
    } else {
        clearErrors(password2Input)
        clearErrors(passwordInput)
        errorMessage.setAttribute('style', 'display:"";')
        window.alert('You have succesfully signed up ! Thank you')
    }
}

function clearErrors (errorToClean){
    errorToClean.setAttribute('style', 'border: "";')
}

clearButton.addEventListener('click', reset)

function reset (event){
    form.reset();
}

function randomNum (){
    let random = Math.floor(Math.random()*300);
    return random;
}

function createRandomString (){
    let sentence = `${randomWordsArray[randomNum()]}-${randomWordsArray[randomNum()]}-${randomWordsArray[randomNum()]}-${randomWordsArray[randomNum()]}-${randomWordsArray[randomNum()]}`;
    return sentence;
}
