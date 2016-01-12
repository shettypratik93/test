function validate()
{ var result="";
	var e=true; 
	if(reg.crse[0].checked==false && reg.crse[1].checked==false && reg.crse[2].checked==false && reg.crse[3].checked==false && reg.crse[4].checked==false && reg.crse[5].checked==false  )
	{
		//alert("Select minimum one subject");
         document.getElementById("subject").style.backgroundColor="red";
		e=0;
	}else{
        document.getElementById("subject").style.backgroundColor="white";
	var cb=document.getElementsByName("crse");
	var checkboxesChecked = [];
  	for (var i=0; i<cb.length; i++) {
     if (cb[i].checked) {
        checkboxesChecked.push(cb[i]);
     }
 	}
     var chk_length=checkboxesChecked.length;
	result+="</br>"+"You selected "+chk_length+"subjects";
	}
}
 function Fnameval(){
            var alf = /^[a-zA-Z]+$/;
            console.log(fn.value);
            if(!fn.value.match(alf))
            { 
           document.getElementById("fn").style.backgroundColor="red";
            }
            else
            {
           document.getElementById("fn").style.backgroundColor="white";
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
            }
            else
            {
                document.getElementById("ln").style.backgroundColor="white";
            } 
            }

           /* function addval(){
            var alf = /^[a-zA-Z0-9, ,&,-]+$/;
           // console.log(addr.value);
            if(!addr.value.match(alf))
            { 
            // document.getElementById("txtfname").value = txtfname.value;

             document.getElementById("addr").style.backgroundColor="red";
            }
            else
            {
            document.getElementById("addr").style.backgroundColor="white";
            } 
            }*/
           
