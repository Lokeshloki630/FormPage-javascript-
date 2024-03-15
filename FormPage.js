const form =document.getElementById("form")
const uname =document.getElementById("uname")
const email =document.getElementById("email")
const password =document.getElementById("password")
const cpassword =document.getElementById("cpassword")
const tandc =document.getElementById("tc")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    validate()
})
function validate(){
    let nameValue=uname.value.trim()
    let emailValue=email.value.trim()
    let passwordValue=password.value.trim()
    let cpasswordValue=cpassword.value.trim()
    let tandcValue=tandc.Value

    //user name check
    if(nameValue===""){
        setError(uname,"user name cannot be empty")
    }
    else if(nameValue.length<3){
        setError(uname,"user name should be minimum 3 characters")
    }
    else{
        setSuccesss(uname)
    }
    //email check
    if(emailValue===""){
        setError(email,"Email cannot be empty")
    }
    else if(!emailCheck(emailValue)){
        setError(email,"enter valid email id")
    }
    else{
        setSuccesss(email)
    }
    
    //password check
    if(passwordValue===""){
        setError(password,"password cannot be empty")
    }
    else if(passwordValue.length<8){
        setError(password,"user name should be 8 characters")
    }
    else{
        setSuccesss(password)
    }
    
    //confirm password check
    if (cpasswordValue===""){
        setError(cpassword,"password can not be empty")
    }
    else if(cpasswordValue!==passwordValue){
        setError(cpassword,"password not matched")
    }
    else{
        setSuccesss(cpassword)
    }
    
    //Terms and conditions
    
    if(!tandc.checked){
        setError(tc,"click on agree terms checkbox")
    }
    else{
        setSuccesss(tc)
    }
    
    function setError(input,message){
        let parent=input.parentElement;
        let small=parent.querySelector("small")
        small.innerTest=message
        parent.classList.add("error")
        parent.classList.remove("success")
    }
    function setSuccesss(input){
        let parent=input.parentElement;
        parent.classList.add("success")
        parent.classList.remove('error')
    }
    function emailCheck(input){
        let emailReg=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let valid=emailReg.test(input)
        console.log(valid)
        return valid
    }
}









