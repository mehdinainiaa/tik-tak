if (localStorage.getItem("jr1") && localStorage.getItem("jr2") != null ){
    jr1.value = localStorage.getItem("jr1")
    jr2.value = localStorage.getItem("jr2")
    
    }
    
    button.onclick = ()=>{
        localStorage.setItem("jr1",jr1.value)
        localStorage.setItem("jr2",jr2.value)
        
    }
    // window.addEventListener("load", ()=>{
    //     localStorage.clear()
    // })

    // 
   var h=0;
   var win=false;
   let title = document.querySelector('.title')
    let turn = 'X';
    let squares = [];
function winner(){
    for(let i=1; i<10; i++){
        squares[i] = document.getElementById('item'+ i).innerHTML;
    }

    if(squares[1] == squares[2] && squares[2]== squares[3] && squares[1] != ''){
        win =true;
        title.innerHTML =`${squares[1]} winner`;
        document.getElementById('item'+ 1).style.background='#198754'
        document.getElementById('item'+ 2).style.background='#198754'
        document.getElementById('item'+ 3).style.background='#198754'

        setInterval(function(){
          title.innerHTML += '.'   
        },1000)
        
        setTimeout(function(){
           location.reload()  
          },4000)
        
    }
    else if(squares[4] == squares[5] && squares[5]== squares[6] && squares[4] != ''){
        win =true;
        title.innerHTML =`${squares[4]} winner`;
        document.getElementById('item'+ 4).style.background='#198754'
        document.getElementById('item'+ 5).style.background='#198754'
        document.getElementById('item'+ 6).style.background='#198754'
        setInterval(function(){
            title.innerHTML += '.'   
          },1000)
          
          setTimeout(function(){
             location.reload()  
            },4000)
          
    }
    else if(squares[7] == squares[8] && squares[9]== squares[9] && squares[7] != ''){
        win =true;
        title.innerHTML =`${squares[7]} winner`;
        document.getElementById('item'+ 7).style.background='#198754'
        document.getElementById('item'+ 8).style.background='#198754'
        document.getElementById('item'+ 9).style.background='#198754'
        setInterval(function(){
            title.innerHTML += '.'   
          },1000)
          
          setTimeout(function(){
             location.reload()  
            },4000)
          
    }
    else if(squares[1] == squares[4] && squares[4]== squares[7] && squares[1] != ''){
        win =true;
        title.innerHTML =`${squares[1]} winner`;
        document.getElementById('item'+ 1).style.background='#198754'
        document.getElementById('item'+ 4).style.background='#198754'
        document.getElementById('item'+ 7).style.background='#198754'
        setInterval(function(){
            title.innerHTML += '.'   
          },1000)
          
          setTimeout(function(){
             location.reload()  
            },4000)
          
        //   localStorage.clear()
    }
    else if(squares[2] == squares[5] && squares[5]== squares[8] && squares[2] != ''){
        win =true;
        title.innerHTML =`${squares[5]} winner`;
        document.getElementById('item'+ 5).style.background='#198754'
        document.getElementById('item'+ 2).style.background='#198754'
        document.getElementById('item'+ 8).style.background='#198754'
        setInterval(function(){
            title.innerHTML += '.'   
          },1000)
          
          setTimeout(function(){
             location.reload()  
            },4000)
          
    }
    else if(squares[3] == squares[6] && squares[6]== squares[9] && squares[6] != ''){
        win =true;
        title.innerHTML =`${squares[9]} winner`;
        document.getElementById('item'+ 3).style.background='#198754'
        document.getElementById('item'+ 6).style.background='#198754'
        document.getElementById('item'+ 9).style.background='#198754'
        setInterval(function(){
            title.innerHTML += '.'   
          },1000)
          
          setTimeout(function(){
             location.reload()  
            },4000)
          
    }
     else if(squares[1] == squares[5] && squares[5]== squares[9] && squares[5] != ''){
        win =true;
        title.innerHTML =`${squares[1]} winner`;
        document.getElementById('item'+ 1).style.background='#198754'
        document.getElementById('item'+ 5).style.background='#198754'
        document.getElementById('item'+ 9).style.background='#198754'
        setInterval(function(){
            title.innerHTML += '.'   
          },1000)
          
          setTimeout(function(){
             location.reload()  
            },4000)
          
    }
    else if(squares[3] == squares[5] && squares[5 ]== squares[7] && squares[7] != ''){
        win =true;
        title.innerHTML =`${squares[1]} winner`;
        document.getElementById('item'+ 3).style.background='#198754'
        document.getElementById('item'+ 5).style.background='#198754'
        document.getElementById('item'+ 7).style.background='#198754'
        setInterval(function(){
            title.innerHTML += '.'   
          },1000)
          
          setTimeout(function(){
             location.reload()  
            },4000)
          
          

     }      

}
    function game(id) {
        let element = document.getElementById(id);
    
        if (jr1.value != "" && jr2 !="") {
            if(turn === 'X' && element.innerHTML ==''){
                h++;
                console.log(h)
                element.innerHTML='X'
                turn = 'O';
                title.innerHTML= jr2.value+' '+'O';
               
              }
              else if(turn === 'O' && element.innerHTML ==''){
                h++;
                console.log(h)

                element.innerHTML='O'; 
                turn='X';
                title.innerHTML=jr1.value+' '+'X'
        
              } 

              if(h===9 && !win)
                {
                    alert("no one")
                    location.reload()  
                }
        }
     
      winner();
      }

      function cleare(){
        
        localStorage.clear()
        location.reload()  

      }




