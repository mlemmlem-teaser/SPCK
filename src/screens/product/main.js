for (let i = 1; i <= 40; i++) {
  let url = `https://dogbreeddb.p.rapidapi.com/paginated/?page=${i}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '02e21a2917mshb9f7023387f37a0p16f9b8jsnf44ab3717559',
		'X-RapidAPI-Host': 'dogbreeddb.p.rapidapi.com'
	}
};
const page = document.getElementsByClassName("page");
const page_bar = document.getElementsByClassName("page_bar");
const api=async ()=> {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    console.log(data.results);
    const dogbreeddb = data.results;
            // cái thanh page
            const page_a = document.createElement("a");
            page_a.classList.add("page_a");
            page_a.innerText=i;
            page_a.href=`#lc${i}`;
            page_bar[0].appendChild(page_a);
            const lc= document.createElement("div"); lc.id=`lc${i}`;
            lc.classList.add("lc");
            lc.innerText=`Page ${i}`;
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
            const items_infor = document.createElement("div");items_infor.classList.add("items-info");
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
            // More infor
        const more_infor = document.createElement("div"); more_infor.classList.add("more-infor");
        const grid_container = document.createElement("div"); grid_container.classList.add("grid-container");
        const grid_item1 = document.createElement("div"); grid_item1.classList.add("grid-item");
        const grid_item2 = document.createElement("div"); grid_item2.classList.add("grid-item");
        const grid_item3 = document.createElement("div"); grid_item3.classList.add("grid-item");
        const grid_item4 = document.createElement("div"); grid_item4.classList.add("grid-item");
          const MaxHI= document.createElement("p"); MaxHI.innerText="Max height(inches): "+ maxHeightInches; 
          const MinHI= document.createElement("p"); MinHI.innerText="Min height(inches): "+ minHeightInches;
          const MaxLS= document.createElement("p"); MaxLS.innerText="Max life span: " + maxLifeSpan;
          const MinLS= document.createElement("p"); MinLS.innerText="Min life span: " + minLifeSpan;
          const MaxW= document.createElement("p");  MaxW.innerText="Max weight(pounds): " + maxWeightPounds;
          const MinW= document.createElement("p"); MinW.innerText="Min weight(pounds): " + minWeightPounds;
          const Org= document.createElement("p"); Org.innerText="Origin: "+ origin;
            grid_item1.appendChild(MaxHI);
            grid_item1.appendChild(MinHI);
            grid_item2.appendChild(MaxLS);
            grid_item2.appendChild(MinLS);
            grid_item3.appendChild(MaxW);
            grid_item3.appendChild(MinW);
            grid_item4.appendChild(Org);
            grid_container.appendChild(grid_item1);
            grid_container.appendChild(grid_item2);
            grid_container.appendChild(grid_item3);
            grid_container.appendChild(grid_item4);
            more_infor.appendChild(grid_container);

        // gắn giá trị cho đống item
        //"../../../Assets/images/ảnh cheems/cheems.jpg"
        img.src=imgThumb;
        items_info_h1.innerText=breedName;
        items_info_h1.style="font-size: 20px;margin-bottom: 5%;";
        items_info_p1.innerText="BreedType: "+breedType;
        items_info_p2.innerText="FurColor: "+furColor;
        items_info_p1.style.fontSize="20px";
        items_info_p2.style.fontSize="20px";
        items_2_p.innerText=breedDescription;
        buy_btn.innerText="More information";
        // sự kiện cho đống items
        buy_btn.addEventListener("click",()=>{
        const all_items= document.getElementsByClassName("items");
        const all_more_infor = document.getElementsByClassName("more-infor");
          for (let i = 0; i < all_items.length; i++) {
            all_items[i].style="  width: 35vw;height: 70vh;box-shadow: 3px 3px 30px 5px rgb(0, 0, 0,0.35);padding: 1%;margin-bottom: 5vh;word-break: break-word;border-radius: 10px;position:inherit;";
            all_more_infor[i].style.display="none";
            items_info_h1.style.fontSize="20px";
          }
          items.style="  z-index: 9999;background-color: white;width: 100vw;height: 90vh;box-shadow: 3px 3px 30px 5px rgb(0, 0, 0,0.35);padding: 1%;margin-bottom: 5vh;word-break: break-word;border-radius: 10px;margin: 1%;display: flex;flex-direction: column;";
          items1.style="height: 55%;width:100%;padding-left;display:flex;justify-content: space-around;";
          more_infor.style.display="inherit";
          items_info_h1.style="font-size: 30px;margin-bottom: 5%;text-align:center;";
        });
        cart_btn.title="Thêm vào giỏ hàng";
        // appendChild 1 đống
        items_infor.appendChild(items_info_h1);
        items_infor.appendChild(items_info_p1);
        items_infor.appendChild(items_info_p2);
        items_infor.appendChild(more_infor);
        items1.appendChild(img);
        items1.appendChild(items_infor);
        items2.appendChild(items_2_p);
        items3.appendChild(buy_btn);
        cart_btn.appendChild(cart_icon);
        items3.appendChild(cart_btn);
        items.appendChild(items1);
        items.appendChild(items2);
        items.appendChild(items3);
        page[0].appendChild(items);
        //cho nút more info

    });
    page[0].appendChild(lc);
  } catch (error) {
    console.error(error);
  }
}
api()
}
