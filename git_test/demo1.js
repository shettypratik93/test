    function dropdownlist(listindex) {

        document.reg.subcategory.options.length = 0;
        switch (listindex) {

            case "Maharashtra":
                document.reg.subcategory.options[0] = new Option("Mumbai", "");
                document.reg.subcategory.options[1] = new Option("Pune", "");
                document.reg.subcategory.options[2] = new Option("Satara", "");

                break;

            case "Gujarat":
                document.reg.subcategory.options[0] = new Option("Ahmedabad", "");
                document.reg.subcategory.options[1] = new Option("Gandhinagar", "");
                document.reg.subcategory.options[2] = new Option("Baroda", "");

                break;

            case "Karnataka":
                document.reg.subcategory.options[0] = new Option("Udupi", "");
                document.reg.subcategory.options[1] = new Option("Banagalore", "");
                document.reg.subcategory.options[2] = new Option("Karkala", "");

                break;

        }
        return true;
    };

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