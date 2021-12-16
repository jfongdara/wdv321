
/* Javascript external for functionality */

function hideOptions(){
    document.querySelector("#crockpotHide").style.display = "none";
    document.querySelector("#pastaHide").style.display = "none";
    document.querySelector("#spinachHide").style.display = "none";
  }

  function showCrockpot(){
    document.querySelector("#crockpotHide").style.display = "block";
    document.querySelector("#pastaHide").style.display = "none";
    document.querySelector("#spinachHide").style.display = "none";
  }
  
  function showPasta(){
    document.querySelector("#crockpotHide").style.display = "none";
    document.querySelector("#pastaHide").style.display = "block";
    document.querySelector("#spinachHide").style.display = "none";
  }

  function showSpinach(){
    document.querySelector("#crockpotHide").style.display = "none";
    document.querySelector("#pastaHide").style.display = "none";
    document.querySelector("#spinachHide").style.display = "block";
  }