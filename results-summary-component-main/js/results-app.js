 
 


 const fetchCategory = async() =>{
   try{
      
      const res = await fetch('data.json');
      const resDataJson = await res.json();
  

      return resDataJson;
   }
    catch (error){
      throw new console.error('Error fetching the data:', error);
    }
 }
 
 const renderResultsApp = async () =>{
   const objectJson = await fetchCategory();
   const categories = document.querySelectorAll('.list__name');
   const listNumbers = document.querySelectorAll('.list__number-bold');
   const listIconsCategories = document.querySelectorAll('.list__icon');
   const renderAverage= document.querySelector(".header_number");
   let sum=0;

   for (let i=0; i<categories.length; i++){
      categories[i].innerHTML = objectJson[i].category;
      listNumbers[i].innerHTML = objectJson[i].score;
      listIconsCategories[i].src = objectJson[i].icon;
      sum += objectJson[i].score;
      
   }
   const average= Math.round(sum/categories.length);
   
   renderAverage.innerHTML= average;
   
  
}



renderResultsApp();
