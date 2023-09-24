let slideindex = 1;
showslides(slideindex);

function currentslide(n){
    showslides(slideindex += n);
}

function showslides(n){
    let i;
    let y = document.getElementsByClassName("slides");
    let z = document.getElementsByClassName("dot");

    if(n > y.length){
        slideindex = 1;
    }

    if(n < 1){
        slideindex = slide.length;
    }

    for(i = 0 ; i < y.length ; i++){
        y[i].style.display = "none";
    }

    for(i = 0 ; i < z.length ; i++){
        z[i].className = z[i].className.replace(" active");
    }
    y[slideindex - 1].style.display = "block";
    z[slideindex-1].className += "active";
}