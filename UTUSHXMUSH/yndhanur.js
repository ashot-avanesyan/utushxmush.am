function initializeDinner(name)
  {

switch(name)
     {
         case pig:
            if (document.getElementById("pig").checked == true)
             {
                 document.getElementById("kgPig").value = Math.round(0.25*(Number(document.getElementById("participantsInput2").value) + Number(document.get     ElementById("participantsInput3").value))*2)/2;
                 document.getElementById("drPig").value = 3800;
                 document.getElementById("drPig").disabled = false;
                 document.getElementById("kgPig").disabled = false;
 
             }
             else
             {
                 document.getElementById("kgPig").value = "0";
                 document.getElementById("drPig").value = "";
                 document.getElementById("drPig").disabled = true;
                 document.getElementById("kgPig").disabled = true;
 
             }
             break;
         case lamb:
             if (document.getElementById("lamb").checked == true)
             {
                 document.getElementById("kgLamb").value = Math.round(0.25 *(Number(document.getElementById("participantsInput2").value) + Number(document.g     etElementById("participantsInput3").value))*2)/2;
                 document.getElementById("drLamb").value = 3000;
                 document.getElementById("drLamb").disabled = false;
                 document.getElementById("kgLamb").disabled = false;
             }
             else
             {
                 document.getElementById("kgLamb").value = "";
                 document.getElementById("drLamb").value = "";
                 document.getElementById("drLamb").disabled = true;
                 document.getElementById("kgLamb").disabled = true;
             }
            break;

