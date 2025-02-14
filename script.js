function showAlert(){
    alert('hello! the button is clicked,this js class')

}

function changetext(){
    document.getElementById('text').innerHTML="text changed" 
}

function handleclick(){
    document.getElementById('clickmessage').innerHTML="button clicked" 
}
function validateform(){
    let name=document.getElementById('name').Value;
    if(name==''){
        alert('please enter your name.');
        return false;
    }
    return true;

}
function checknumber(){
    let num=parseInt(document.getElementById('numberinput').value);
    let result=num>10 ? 'greater than 10' : '10 or less';
    document.getElementById('numberresult').innerHTML=result;


}
function checkage(){
    let age=parseInt(document.getElementById('ageinput').value);
    if(age >= 18)
    document.getElementById('ageresult').innerHTML='you are an adult';
else{
    document.getElementById('ageresult').innerHTML='you are a minor';
}
}
function displayarrayitem(){
    let item=['appale','banana','charry','date','elderbarry'];
    let index=parseInt(document.getElementById('arrayindex').value);
    let result=items[index] || 'invalid index';
    document.getElementById('arrayresult').innerHTML=result;
}
