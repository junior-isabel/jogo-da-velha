

const button = (value,index,play) =>{

   const btn = document.createElement('button');
   btn.type ="button";
   btn.textContent = value;
   btn.className = value;
   btn.setAttribute("data-index", index)

   btn.addEventListener('click', (event) => {

    play(index,value)
   })
   //console.log(btn);
   return btn;
}

window.onload = (event)=>{

    const table = document.getElementsByClassName('table')[0];

    for(let i = 0; i < 9; i++){

       // table.appendChild(button(i+1, i));
    }
}