{
 let count = 10;
 const timeID =setInterval(()=>{
    
     count--;
     const tw = document.getElementById('timewrite');
     tw.textContent = count;
     if(count < 0){
         clearInterval(timeID);
         document.write("time up")
         
     }
 } , 1000);







}