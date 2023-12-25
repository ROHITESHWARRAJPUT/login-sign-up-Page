const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.registerLink');
const loginLink = document.querySelector('.loginLink');

registerLink.onclick = ()=>{
    wrapper.classList.add('active');
}

loginLink.onclick = ()=>{
    wrapper.classList.remove('active');
}