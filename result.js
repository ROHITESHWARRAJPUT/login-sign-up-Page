const para= document.querySelector('#paragraph');
const params= new URLSearchParams(window.location.search);

params.forEach((value,key)=>{
    para.innerHTML+=`<h2>${key} = ${value}</h2>`;
    para.append(document.createElement('br'));
});
