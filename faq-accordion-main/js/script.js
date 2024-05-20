const list = document.querySelector('dl');
const questions = document.querySelectorAll('dt');

const showHide = (e)=>{
    const element= e.target;
    const eventKey=e.key;
    
    if(element.tagName ==='DT' || (eventKey==='Enter' && element.tagName === 'DT')){
        
        element.classList.toggle('minus');
        element.nextElementSibling.classList.toggle('show-hide');
    }
    
}




list.addEventListener('click', showHide);
list.addEventListener('keypress', showHide);

/*Otra forma de realizar el mismo ejercicio*/
// questions.forEach(element => {
//     element.addEventListener('click',()=>{
//         element.classList.toggle('minus');
//         element.nextElementSibling.classList.toggle('show-hide');
        
        
//     })
//     element.addEventListener('keydown', (e)=>{
//         if(e.key==='Enter'){
//             e.target.classList.toggle('minus');
//             e.target.nextElementSibling.classList.toggle('show-hide');
//         }
//     })
// });