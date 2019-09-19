

function loadEnter()
{
document.documentElement.requestFullscreen();
}


function checkmyBox()
{
	var box = document.getElementsByClassName("myCheckbox");
    if( box[0].checked == true)
    {	
    	activateButton(true);

    }
    else{
        activateButton(false);
    }
}

function activateButton(activated)
{
	if(activated)
	{
		document.getElementsByClassName("buttonDiv")[0].style.display = "flex";
		document.getElementsByClassName("buttonDiv")[0].style.opacity = 1;
		document.getElementsByClassName("button")[0].style.cursor= "pointer";
		document.getElementsByClassName("button")[0].style.pointerEvents= "auto";

		document.getElementById("checkArticle").style.transform = 'translateY(95px)';
		document.getElementById("checkArticle").style.opacity = 0.6;
		
		document.getElementById("text-logo").style.strokeDashoffset = 0;
		//document.getElementById("text-logo").style.opacity = 1;
	}
	else
	{
		document.getElementById("checkArticle").style.transform = 'translateY(-59px)';
		document.getElementById("checkArticle").style.opacity =1;

		document.getElementsByClassName("button")[0].style.pointerEvents= "none";
		document.getElementsByClassName("button")[0].style.cursor= "default";
		document.getElementsByClassName("buttonDiv")[0].style.opacity = 0;

		document.getElementById("text-logo").style.strokeDashoffset = "100%";
		//document.getElementById("text-logo").style.opacity = 0;
	}
}	

function GET(param) {
		var vars = {};
		window.location.href.replace( location.hash, '' ).replace( 
			/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
			function( m, key, value ) { // callback
				vars[key] = value !== undefined ? value : '';
			}
		);
		if ( param ) {return vars[param] ? vars[param] : null;}
		return vars;
	}

	function letterValue(str){
    var anum={
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    if(str.length== 1) return anum[str.toLowerCase()] || '';
    return str.split('').map(letterValue);
	}

	var ID = function () {
	  return GET('num');
	};
	
	function setId()
	{
	var myNumber = document.getElementById('number');
	setTimeout(ChangeNumber, 1000);

	function ChangeNumber() {
	myNumber.innerHTML ='N° '+ID();
	}

	var data = 'Jean@mailpro.com'

	var id = letterValue(data.slice(0,data.indexOf('@')+1));

	id = id.join("");

	document.getElementsByClassName("drawingID")[0].innerHTML = id;

	}

