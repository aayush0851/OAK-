var x=["AWESOME THEME","MODERN COMBINATION","CREATIVE SOLUTION"];
var a=1;
var z=2;
setInterval(fxn1,5000);
setInterval(fxn2,7000);
function fxn1()
    {
        if(a==2)
            {
                document.getElementById("text-2").innerHTML=x[a];
                a=0;
            }
        else
            {
                document.getElementById("text-2").innerHTML=x[a];
                a++;
            }
    }
function fxn2()
{
    if(z==5)
        {
            document.getElementById("box2image").src="slider/image_"+z+".jpg";
            z=1;
        }
    else
        {
            document.getElementById("box2image").src="slider/image_"+z+".jpg";
            z++;
        }
}

document.getElementById("ham2").addEventListener("click",fxn3);
function fxn3{
    document.getElementById("linea").style.opacity=0;
    document.getElementById("lineb").style.transform(rotate(45));
    document.getElementById("linec").style.display=none;
    document.getElementById("lined").style.opacity=0;
}