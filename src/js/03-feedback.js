import throttle from 'lodash.throttle'


const formEl = document.querySelector(".feedback-form")
const STORAGE_KEY = "feedback-form-state"

formEl.addEventListener("submit",onFormSubmit)
formEl.addEventListener("input", throttle(onInputChange,500))

populateTextarea()
 const formData = {}
function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
}

function onInputChange(evt){
formData[evt.target.name] = evt.target.value
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}


function populateTextarea(){
    const storageRow = localStorage.getItem(STORAGE_KEY)
        const savedMessage = JSON.parse(storageRow);

    if(savedMessage){
        formEl.elements.email.value = savedMessage.email
        formEl.elements.message.value = savedMessage.message
    }
}  