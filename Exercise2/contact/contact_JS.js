/*incorporates content stored in an array*/
var array_houseOnSale = [
    "Property no. 729561",
    "Property no. 729562",
    "Property no. 729563",
    "Property no. 729567",
    "Property no. 729568",
    "Property no. 729569"];

document.getElementById("house1").innerHTML = array_houseOnSale[0];
document.getElementById("house2").innerHTML = array_houseOnSale[1];
document.getElementById("house3").innerHTML = array_houseOnSale[2];
document.getElementById("house4").innerHTML = array_houseOnSale[3];
document.getElementById("house5").innerHTML = array_houseOnSale[4];
document.getElementById("house6").innerHTML = array_houseOnSale[5];


/*if statement*/
function checkInput()
{
        if (document.getElementById("NAME").value === "")
        {        
           document.getElementById("errorText1").style.display="block";
        }
        else
        {
           document.getElementById("errorText1").style.display="none";
        }

          if (document.getElementById("PHONE").value === "")
        {
           document.getElementById("errorText2").style.display="block";
        }
        else
        {
           document.getElementById("errorText2").style.display="none";
        }
          if (document.getElementById("MAIL").value === "")
        {
           document.getElementById("errorText3").style.display="block";
        }
        else
        {
           document.getElementById("errorText3").style.display="none";
        }
}

/*create at least one event listener*/
document.getElementById("submitButton").addEventListener("click", checkInput);