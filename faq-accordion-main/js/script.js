const list = document.querySelector('dl');
const questions = document.querySelectorAll('dt');




list.addEventListener('click', (e)=>{
    
    const element= e.target;
   
    
    if(element.tagName ==='DT'){
        element.classList.toggle('minus');
        element.nextElementSibling.classList.toggle('show-hide');
    }
    
})

/*Otra forma de realizar el mismo ejercicio*/
// questions.forEach(element => {
//     element.addEventListener('click',()=>{
//         element.classList.toggle('minus');
//         element.nextElementSibling.classList.toggle('show-hide');
        
        
//     })
// });