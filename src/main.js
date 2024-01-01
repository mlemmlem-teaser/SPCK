const arrow_symbol = () => {
    const a = document.getElementsByClassName("arrow_symbol");
    for (let i = 0; i < a.length; i++) {
        let b = a[i].innerText;
        a[i].addEventListener("mouseenter", ()=> {
            a[i].innerText="➙"+b;
            console.log(a[i])
        })
        a[i].addEventListener("mouseleave", ()=> {
            a[i].innerText=b;
        })
    }
}
arrow_symbol();
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

function topFunction() {
  var position = document.body.scrollTop || document.documentElement.scrollTop;
  if (position > 0) {
    window.scrollBy(0, -100);
    setTimeout(topFunction, 10);
  }
}