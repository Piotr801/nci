
function random(){
	
		let r = Math.floor(Math.random()*10);
		//.floor() to round down to whole Number
		//range is 0 up to but not including 10
		
		//create a var with thr first part
		let page = document.getElementById("demo");
		page.innerHTML = r;
		
		//document.getElementById("demo").innerHTML = r;
		page.style.backgroundColor = "grey";
		//document.getElementById("demo").style.backgroundColor = "grey";
		page.style.color = "white";
		
}