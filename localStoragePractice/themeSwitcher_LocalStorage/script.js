const body= document.body;
const darkModeBtn=document.getElementById('darkMode');

//saving the theme to dark mode as soon as the screen loads 
const savedTheme=localStorage.getItem('theme');

if(savedTheme==="dark"){
    body.classList.add('darkmode');
}
else{
    body.classList.add('lightmode');
}

darkModeBtn.addEventListener('click',()=>{
    if(body.classList.contains('darkmode')
    ){
body.classList.remove('darkmode');
body.classList.add('lightmode');
localStorage.setItem('theme','light');
    }else{
        body.classList.remove('lightmode');
        body.classList.add('darkmode');
        localStorage.setItem('theme','dark');
    };
});


