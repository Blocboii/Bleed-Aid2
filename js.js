function myFunction() {
    var input, filter, ul, li, a, o;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    if (input.value.length == 0) {
        ul.style.display = "none";
        return;
    } else {
        ul.style.display = "block";
    }

    for (o = 0; o < li.length; o++) {
        a = li[o].getElementsByTagName("a") [0];
        
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[o].style.display = "block";
        } else {
            li[o].style.display = "none";
        }
    }
}