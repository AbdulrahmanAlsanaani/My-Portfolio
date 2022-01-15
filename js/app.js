var d_l_maode = document.getElementById("d_l_maode");
d_l_maode.addEventListener('click', (e) => {
    e.preventDefault();
    var element = document.getElementsByClassName("about");
    var services = document.getElementsByClassName("services");
    var contact = document.getElementsByClassName("contact");
    element[0].classList.toggle("a-light");
    services[0].classList.toggle("s-light");
    contact[0].classList.toggle("c-light");
    var input = document.getElementsByTagName("input");
    var textarea = document.getElementsByTagName("textarea");
    var p = document.getElementsByTagName("p");
    var h1 = document.getElementsByTagName("h1");
    var h2 = document.getElementsByTagName("h2");
    var h3 = document.getElementsByTagName("h3");
    var h4 = document.getElementsByTagName("h4");
    var h5 = document.getElementsByTagName("h5");
    var ii = document.getElementsByTagName("i");
    var max_prog = document.getElementsByClassName("max-prog");
    var moon = document.getElementById("moon1");
    var sun = document.getElementById("sun1");
    for (i = 0; i < ii.length; i++) {
        ii[i].classList.toggle("i-light");
    }
    for (i = 0; i < input.length - 1; i++) {
        input[i].classList.toggle("input-light");

    }
    for (i = 0; i < textarea.length; i++) {
        textarea[i].classList.toggle("input-light");

    }
    for (i = 0; i < p.length; i++) {
        p[i].classList.toggle("p-light");

    }
    for (i = 0; i < max_prog.length; i++) {
        max_prog[i].classList.toggle("prog");

    }
    for (i = 0; i < h1.length; i++) {
        h1[i].classList.toggle("h1-light");

    }

    for (i = 0; i < h2.length; i++) {
        h2[i].classList.toggle("h2-light");

    }

    for (i = 0; i < h3.length; i++) {
        h3[i].classList.toggle("h3-light");

    }

    for (i = 0; i < h4.length; i++) {
        h4[i].classList.toggle("h4-light");

    }

    for (i = 0; i < h5.length; i++) {
        h5[i].classList.toggle("h5-light");

    }


    if (element[0].className == "about") {
        moon.classList.remove("show");
        moon.classList.toggle("haide");
        sun.classList.remove("haide");
        sun.classList.toggle("show");

    } else if (element[0].className != "light") {


        sun.classList.remove("show");
        sun.classList.toggle("haide");
        moon.classList.remove("haide");
        moon.classList.toggle("show");
    }
}, false);

var form = document.getElementById("form");
form.addEventListener('submit', (e) => {


    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var massage = document.getElementById("messag").value;




    if (!(/\S+@\S+\.\S+$/.test(email))) {
        document.getElementById("email_masseg").innerHTML = "Emai is not valid";
        e.preventDefault();
    } else {
        document.getElementById("email_masseg").innerHTML = "";
    }

    if (subject.length == 0) {
        document.getElementById("subject_masseg").innerHTML = "You can't make subject empety";
        e.preventDefault();
    } else {
        document.getElementById("subject_masseg").innerHTML = "";
    }


    if (!(/^777\d{6}$/.test(phone))) {
        document.getElementById("phone_masseg").innerHTML = "Phone number should be 9 digits long and start with 777";
        e.preventDefault();
    } else {
        document.getElementById("phone_masseg").innerHTML = "";
    }


    if (massage.length < 20) {
        document.getElementById("massage_masseg").innerHTML = "The massege most have more than 20 charecters";
        e.preventDefault();
    } else {
        document.getElementById("massage_masseg").innerHTML = "";
    }


}, false);


var modal = document.getElementById('myModal');

var img = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}


var span = document.getElementsByClassName("close1")[0];

span.onclick = function () {
    modal.style.display = "none";
}

var s_menu = document.getElementById("s-menu");
var s_menu_x = document.getElementById("s-menu-x");
var menu = document.getElementById("menu");

menu.addEventListener('click', () => {
    s_menu.style.right = "0%";
});

s_menu_x.addEventListener('click', () => {
    s_menu.style.right = "-100%";
});

s_menu.addEventListener('click', () => {
    s_menu.style.right = "-100%";
});