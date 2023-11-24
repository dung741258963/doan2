function minus(x){
    a = parseInt (document.getElementById(x).value);
        if(a>1)
        a-=1;
        document.getElementById(x).value=a;
}
function plus(x){
    a = parseInt (document.getElementById(x).value);
    a+=1;
    document.getElementById(x).value=a;
}
function doimau()
{
	document.getElementById("doimau").style.backgroundColor = "#189EFF";
	document.getElementById("doimau").style.color = "white";
			
	document.getElementById("doimau1").style.backgroundColor = "white";
	document.getElementById("doimau1").style.color = "#189EFF";
			
	document.getElementById("doimau2").style.backgroundColor = "white";
	document.getElementById("doimau2").style.color = "#189EFF";
    
	document.getElementById("doimau3").style.backgroundColor = "white";
	document.getElementById("doimau3").style.color = "#189EFF";
}

function doimau1()
{
	document.getElementById("doimau").style.backgroundColor = "white";
	document.getElementById("doimau").style.color = "#189EFF";
			
	document.getElementById("doimau1").style.backgroundColor = "#189EFF";
	document.getElementById("doimau1").style.color = "white";
			
    document.getElementById("doimau2").style.backgroundColor = "white";
	document.getElementById("doimau2").style.color = "#189EFF";

    document.getElementById("doimau2").style.backgroundColor = "white";
	document.getElementById("doimau2").style.color = "#189EFF";

    document.getElementById("doimau3").style.backgroundColor = "white";
	document.getElementById("doimau3").style.color = "#189EFF";
}

function doimau2()
{
	document.getElementById("doimau").style.backgroundColor = "white";
	document.getElementById("doimau").style.color = "#189EFF";
			
	document.getElementById("doimau1").style.backgroundColor = "white";
	document.getElementById("doimau1").style.color = "#189EFF";
			
	document.getElementById("doimau2").style.backgroundColor = "#189EFF";
	document.getElementById("doimau2").style.color = "white";

    document.getElementById("doimau3").style.backgroundColor = "white";
	document.getElementById("doimau3").style.color = "#189EFF";

}

function doimau3()
{
	document.getElementById("doimau").style.backgroundColor = "white";
	document.getElementById("doimau").style.color = "#189EFF";
			
	document.getElementById("doimau1").style.backgroundColor = "white";
	document.getElementById("doimau1").style.color = "#189EFF";

	document.getElementById("doimau2").style.backgroundColor = "white";
	document.getElementById("doimau2").style.color = "#189EFF";

	document.getElementById("doimau3").style.backgroundColor = "#189EFF";
	document.getElementById("doimau3").style.color = "white";
}
    var i = 1;
    var N = 4;
function nextimg(x)
{
    document.getElementById("picture").setAttribute("src",x+".jpg");
    
}
function mau()
{ 
	nextimg("dt2");
	doimau();
}
function mau1()
{
		doimau1();
		nextimg("dt3");
}
function mau2()
{
		doimau2();
		nextimg("dt4");
}
function mau3()
{
		doimau3();
		nextimg("dt1");
}