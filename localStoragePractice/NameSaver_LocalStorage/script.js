const username= localStorage.getItem('username');  //taking the username of the user from local storage

const welcomeMsg=document.getElementById('welcomeMessage');

if(username){
    welcomeMsg.textContent=`Welcome Back, ${username}`;

}else{
    const name=prompt('what is your name?');
    const msg= prompt('Did you code today?');
   if(name){
     localStorage.setItem('username',name);
     welcomeMsg.textContent=`welcome back, ${name}!!`;
   }
   else{
    welcomeMsg.textContent=`hello Stranger!!`;
   }
}



