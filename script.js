
const icon = document.querySelector('#logo');

icon.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains("dark-mode")){
        icon.src = "./img/sun.png";
    }else{
        icon.src = "./img/moon.png";
    }
})