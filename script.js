// JavaScript source code
function openPopup(){
    document.getElementById("popup").style.display="flex";
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}

function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
    toggle=document.getElementById("menu");
   
    if (toggle.innerText==="☰ Menu"){
        toggle.innerText="✕ Hide";
    }
    else {
        toggle.innerText="☰ Menu";
    }
}
