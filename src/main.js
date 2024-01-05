const arrow_symbol = () => {
  const a = document.getElementsByClassName("arrow_symbol");
  for (let i = 0; i < a.length; i++) {
    let b = a[i].innerText;
    a[i].addEventListener("mouseenter", () => {
      a[i].innerText = "➙" + b;
      console.log(a[i]);
    });
    a[i].addEventListener("mouseleave", () => {
      a[i].innerText = b;
    });
  }
};
arrow_symbol();
window.onscroll = function () {
  scrollFunction();
};

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
const url = "https://dogbreeddb.p.rapidapi.com/paginated/";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "02e21a2917mshb9f7023387f37a0p16f9b8jsnf44ab3717559",
    "X-RapidAPI-Host": "dogbreeddb.p.rapidapi.com",
  },
};
//test api 1
fetch(url, options)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Lỗi: " + response.status);
    }
  })
  .then((data) => {
    console.log(data);
  });
//test api 2
const url2 = 'https://dog-breed-classification-api.p.rapidapi.com/dog_breed_classification?url=https%3A%2F%2Fwww.petplan.co.uk%2Fimages%2Fbreed-info%2Ffrench-bulldog%2FVital-Stats_French-Bulldog-Petplan.png';
const options2 = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '02e21a2917mshb9f7023387f37a0p16f9b8jsnf44ab3717559',
		'X-RapidAPI-Host': 'dog-breed-classification-api.p.rapidapi.com'
	}
};
fetch(url2, options2)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Lỗi: " + response.status);
    }
  })
  .then((data) => {
    const img = data[0];
    console.log(typeof(img))
  });



