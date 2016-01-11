var flag=true;

function validate()
{	
	var result="";

	if(flag==true)
	{

		var cb=document.getElementsByName("crse");
		var checkboxesChecked = [];
 		for (var i=0; i<cb.length; i++) {
         if (cb[i].checked) {
        checkboxesChecked.push(cb[i]);
    	 }
 		}
   	 	var chk_length=checkboxesChecked.length;	
		

		result+="Name: "+reg.txtname.value+" "+reg.txtlname.value+"</br>"+"Address: "+reg.txtaddr.value+"</br> No. of subjects: "+chk_length;

		var radios = document.getElementsByName("gender");
		for (var i = 0;i < radios.length; i++) 
		{
   				if (radios[i].checked) 
   				{
       					 result+="</br>"+"Gender: "+radios[i].value;
      					 break;
    			}
		}

    	var r=document.getElementById("result-div");
    	 r.innerHTML=result;
	}
	

	else
		alert("Enter details");


}