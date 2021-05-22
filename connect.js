function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("para");
    for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
    tablinks = document.getElementsByClassName("tablink");
    document.getElementById(menuName).style.display = "block";
}
document.getElementById("myLink").click();



function f1() {
    var mail = document.getElementById("email").value;
    var msg = document.getElementById("err_msg");
    var area = document.getElementById("img");

    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mail.match(regex)){
        msg.innerHTML = "success.";
        msg.style.color="red";   
    }
    else {
        msg.innerHTML = "Whoops make sure it's an email";
        msg.style.paddingRight="100px";
        msg.style.color="red";
        area.style.display="";
    }
}

function f2(){
    var x = document.getElementById("clps");
    
    x.style.color="red";
}