const url = 'https://dogbreeddb.p.rapidapi.com/paginated/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '02e21a2917mshb9f7023387f37a0p16f9b8jsnf44ab3717559',
		'X-RapidAPI-Host': 'dogbreeddb.p.rapidapi.com'
	}
};
const product = document.getElementById("product");
const api=async ()=> {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    console.log(data.results);
    const dogbreeddb = data.results;
    dogbreeddb.forEach((e) => {
        // 1 đống infor
      const breedName = e.breedName;
      const breedType = e.breedType;
      const breedDescription = e.breedDescription;
      const furColor = e.furColor;
      const imgThumb = e.imgThumb;
      const maxHeightInches = e.maxHeightInches;
      const maxLifeSpan = e.maxLifeSpan;
      const maxWeightPounds =e.maxWeightPounds;
      const minHeightInches = e.minHeightInches;
      const minLifeSpan =e.minLifeSpan;
      const minWeightPounds=e.minWeightPounds;
      const origin=e.origin;
        //cái icon
        // 1 đống cái để làm item
      const items = document.createElement("div"); items.classList.add("items");
            //1111111111
          const items1 = document.createElement("div"); items1.classList.add("items-1");
            const img=document.createElement("img");
            const items_infor = document.createElement("div");items_infor.classList.add("teams-info");
                const items_info_h1 = document.createElement("h1");
                const items_info_p1 = document.createElement("p");
                const items_info_p2 = document.createElement("p");

            //2222222222
          const items2 = document.createElement("div"); items2.classList.add("items-2");
                const items_2_p = document.createElement("p");      

            //3333333333
          const items3 = document.createElement("div"); items3.classList.add("items-3");
                const buy_btn = document.createElement("button"); buy_btn.classList.add("buy-btn");
                const cart_btn = document.createElement("button");cart_btn.classList.add("cart-btn");
                    const cart_icon = document.createElement("i"); cart_icon.classList.add("fa"); cart_icon.classList.add("fa-shopping-cart");
        //  /\ /\ /\ /\ /\ /\ /\ /\ /\ /\
        // gắn giá trị cho đống item
        //"../../../Assets/images/ảnh cheems/cheems.jpg"
        img.src=imgThumb;
        items_info_h1.innerText=breedName;
        items_info_h1.style="font-size: 20px;margin-bottom: 5%;";
        items_info_p1.innerText="BreedType: "+breedType;
        items_info_p2.innerText="FurColor: "+furColor;
        items_info_p1.style.fontSize="12px";
        items_info_p2.style.fontSize="12px";
        items_2_p.innerText=breedDescription;
        buy_btn.innerText="Buy";
        cart_btn.title="Thêm vào giỏ hàng";
        // appendChild 1 đống
        items_infor.appendChild(items_info_h1);
        items_infor.appendChild(items_info_p1);
        items_infor.appendChild(items_info_p2);
        items1.appendChild(img);
        items1.appendChild(items_infor);
        items2.appendChild(items_2_p);
        items3.appendChild(buy_btn);
        cart_btn.appendChild(cart_icon);
        items3.appendChild(cart_btn);
        items.appendChild(items1);
        items.appendChild(items2);
        items.appendChild(items3);
        product.appendChild(items);
    });
  } catch (error) {
    console.error(error);
  }
}
api()