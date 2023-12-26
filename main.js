const joinNow = document.querySelector('.join-now');
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.registerLink');
const loginLink = document.querySelector('.loginLink');

joinNow.addEventListener("click",function(){
    this.style.display="none";
    wrapper.classList.add('active-wrapper');
})

registerLink.onclick = ()=>{
    wrapper.classList.add('active');
}

loginLink.onclick = ()=>{
    wrapper.classList.remove('active');
}