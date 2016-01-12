
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


	if(reg.crse[0].checked==false && reg.crse[1].checked==false && reg.crse[2].checked==false && reg.crse[3].checked==false && reg.crse[4].checked==false && reg.crse[5].checked==false  )
	{
		//alert("Select minimum one subject");
         document.getElementById("subject").style.backgroundColor="red";
		flag=false;
	}
	else{
        document.getElementById("subject").style.backgroundColor="white";
        flag=true;
	/*var cb=document.getElementsByName("crse");
	var checkboxesChecked = [];
  	for (var i=0; i<cb.length; i++) {
     if (cb[i].checked) {
        checkboxesChecked.push(cb[i]);
     }
 	}
     var chk_length=checkboxesChecked.length;
	result+="</br>"+"You selected "+chk_length+"subjects";*/
	}

    
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


 function Fnameval(){
            var alf = /^[a-zA-Z]+$/;
            console.log(fn.value);
            if(!fn.value.match(alf))
            { 
           document.getElementById("fn").style.backgroundColor="red";
           flag=false;
            }
            else
            {
           document.getElementById("fn").style.backgroundColor="white";
           flag=true;
            } 
            }

 function Lnameval(){
            // var txtname=document.getElementById("txtfname").value;
            var alf = /^[a-zA-Z]+$/;
            console.log(ln.value);
            if(!ln.value.match(alf))
            { 
            // document.getElementById("txtfname").value = txtfname.value;
                document.getElementById("ln").style.backgroundColor="red";
                flag=false;
            }
            else
            {
                document.getElementById("ln").style.backgroundColor="white";
                flag=true;
            } 
            }

