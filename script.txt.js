var xmlhttp;
function retreive()
{
	try{
		xmlhttp=new XMLHttpRequest();
		}
		catch(e){
			document.write("cannot access");
			return false;
			}
			if(xmlhttp.readyState == 0 || xmlhttp.readyState == 4) {
     	 		xmlhttp.open("GET","https://api.fixer.io/latest?base=INR",false);
      			xmlhttp.onreadystatechange = loadcurr;
     			xmlhttp.send(null);
      }
}

function loadcurr()
{
  if(xmlhttp.readyState==4 && xmlhttp.status==200)
  {
    doc = xmlhttp.responseText;
    var jobject = JSON.parse(doc);
    var rates = jobject.rates;
    var keys = Object.keys(rates);
    var values = Object.values(rates);


    	var sel = document.getElementById("loadcurr");
	var i;
	for(i=0;i<keys.length;i++)
		{
		var optt=document.createElement("option");
		var txt=document.createTextNode(keys[i]);
		optt.setAttribute("value",values[i]);
		optt.appendChild(txt);
		sel.appendChild(optt);

		}

}
}
function converter()
{
	var res=document.getElementById("result");
	var sel = document.getElementById("loadcurr").value;
	var amount=document.getElementById("amt").value;
	res.innerText=amount * sel;
}