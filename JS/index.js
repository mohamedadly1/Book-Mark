var sitename=document.getElementById("sitename");
var siteurl=document.getElementById("siteurl");
var tBody=document.getElementById("tBody")
var closebtn=document.getElementById("closebtn")
var layer=document.getElementById("layer")
var all=[];


if(localStorage.getItem("all") != null){
    all=JSON.parse(localStorage.getItem("all"));
    displayAll();
}

function add() {
  
  if(validurl()&&validateProuctName()&&!validname()){
    
    var site={
      sitename:sitename.value,
      siteurl: `${siteurl.value}`,
      
    } 
    all.push(site);
 
    localStorage.setItem("all",JSON.stringify(all));
   displayAll();
   
   
  } 
else{
  layer.classList.remove("d-none")
}




   
if(siteurl.value.length==0){
  layer.classList.remove("d-none")
}


sitename.value="";
siteurl.value="";




}
    function  displayAll() {
        var box=``;
        
        for(var i = 0 ; i < all.length;i++){
        box+=`
        <tr>
     
       
          
        <td>
        
         
        ${i+1}
       
        <td>${all[i].sitename}</td>
        <td> <a href="${all[i].siteurl}" id="vis" class="btn  "> <i class="fa-regular fa-eye me-2"></i>Visit</a> 
        <td>  <button id="del" onclick="deleteItem(${i})" class="btn "><i class="fa-regular fa-trash-can me-2"></i> Delete</button>  </td>
        </td>


       
       
      
     
       
   
       </tr>
     
     
        `
     
        }
        tBody.innerHTML=box;
       
     }
     function deleteItem(index){
 
        all.splice(index,1);
        localStorage.setItem("all",JSON.stringify(all))
        displayAll();
    }

    function validateProuctName(){
  
      var regex =/[a-z]{3,15}$/
      return  regex.test(sitename.value);
    
    }

    closebtn.addEventListener("click",function(){
layer.classList.add("d-none")
    })

   function validurl(){
    var regex1=  /^https:\/\/www\..*/
    return regex1.test('https://'+siteurl.value);
   }

   sitename.addEventListener("input",function(){
    if(sitename.value.length==0){
      sitename.style.outline="3px solid orange "
    }else if (validateProuctName()) {
      sitename.style.outline="3px solid green "
    } else {
      sitename.style.outline="3px solid red "
    }

   })



   siteurl.addEventListener("input",function(){
    if(siteurl.value.length==0){
      siteurl.style.outline="3px solid orange "
    }else if (validurl()) {
      siteurl.style.outline="3px solid green "
    } else {
      siteurl.style.outline="3px solid red "
    }

   })
   


  function validname(){
    for(var i =0 ; i<all.length ;i++)
    {
if(all[i].sitename.toLowerCase()==sitename.value.toLowerCase())
{
  return true
}else{
  return false
}
    }
  }



