
function init()
{

	
function myHandler(evt) {
    alert(evt.target.id);
}

onmouseover = function(){

}//end init
/*
	
	for (var i = 0;i<x.length;i++)
	{
		var holdId = getID(x[i]);
		//alert(id);
		x[i].onmouseover = function(){
		
			for(var c = 0; c<y.length; c++){
				if(holdId == y[c].id){
					y[c].style.border = 4 + "px";
				}
			}
		}
		
		x[i].onmouseout = function(){
			
		}
		
	}
		
}

*/


function getID(oObject) 
{
    var id = oObject.id;
    return id;
}
}
