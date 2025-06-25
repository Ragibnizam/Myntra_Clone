
// header start//
// men secction
let men_section_men=document.querySelector(".men-section-men")
let men_section=document.querySelector(".men-section")


  men_section_men.addEventListener("mouseenter",function(){
    men_section.style.display="block";
  })

  men_section_men.addEventListener("mouseleave",()=>{
    setTimeout(() => {
      if(!men_section.matches(":hover")){
        
      men_section.style.display="none";

      }
    },200)

  })
  men_section.addEventListener("mouseleave",()=>{
    men_section.style.display="none";

  })
  
  // women section
  let women_section_women=document.querySelector(".women_section_women")
  let women_section=document.querySelector(".women-section")

  women_section_women.addEventListener("mouseenter",()=>{
    women_section.style.display="block";

  })

  women_section_women.addEventListener("mouseleave",()=>{
    setTimeout(()=>{
      if(!women_section.matches(":hover"))women_section.style.display="none";

    },200)
  })
  women_section.addEventListener("mouseleave",()=>{
    women_section.style.display="none";
    
  })

  //search bar

    const products = [
      {
        id: 1,
        name: "Nike Revolution 5 Running Shoes",
        brand: "Nike",
        category: "Footwear",
        price: 3499,
        image: "nike-revolution.jpg"
      },
      {
        id: 2,
        name: "Adidas Men Solid Round Neck T-Shirt",
        brand: "Adidas",
        category: "Topwear",
        price: 1299,
        image: "adidas-tshirt.jpg"
      },
      {
        id: 3,
        name: "Levi's Men Slim Fit Jeans",
        brand: "Levi's",
        category: "Bottomwear",
        price: 2399,
        image: "levis-jeans.jpg"
      },
      {
        id: 4,
        name: "Puma Sports Shoes for Men",
        brand: "Puma",
        category: "Footwear",
        price: 3199,
        image: "puma-shoes.jpg"
      },
      {
        id: 5,
        name: "HRX by Hrithik Roshan Training T-shirt",
        brand: "HRX",
        category: "Topwear",
        price: 899,
        image: "hrx-tshirt.jpg"
      },
      {
        id: 6,
        name: "Roadster Men Solid Casual Shirt",
        brand: "Roadster",
        category: "Shirts",
        price: 1599,
        image: "roadster-shirt.jpg"
      },
      {
        id: 7,
        name: "H&M Women A-Line Dress",
        brand: "H&M",
        category: "Dresses",
        price: 1899,
        image: "hm-dress.jpg"
      },
      {
        id: 8,
        name: "Zara High Waist Trousers",
        brand: "Zara",
        category: "Bottomwear",
        price: 2299,
        image: "zara-trousers.jpg"
      },
      {
        id: 9,
        name: "Allen Solly Women Solid Blazer",
        brand: "Allen Solly",
        category: "Blazers",
        price: 3499,
        image: "allen-blazer.jpg"
      },
      {
        id: 10,
        name: "W for Woman Printed Kurta",
        brand: "W",
        category: "Ethnic Wear",
        price: 1499,
        image: "w-kurta.jpg"
      },
      {
        id: 11,
        name: "Biba Women Anarkali Suit Set",
        brand: "Biba",
        category: "Ethnic Wear",
        price: 2899,
        image: "biba-suit.jpg"
      },
      {
        id: 12,
        name: "Tokyo Talkies Women's Tops",
        brand: "Tokyo Talkies",
        category: "Topwear",
        price: 699,
        image: "tokyo-top.jpg"
      },
      {
        id: 13,
        name: "Libas Women Printed Palazzo",
        brand: "Libas",
        category: "Bottomwear",
        price: 999,
        image: "libas-palazzo.jpg"
      },
      {
        id: 14,
        name: "Campus Women's Running Shoes",
        brand: "Campus",
        category: "Footwear",
        price: 1299,
        image: "campus-shoes.jpg"
      },
      {
        id: 15,
        name: "Van Heusen Formal Shirt",
        brand: "Van Heusen",
        category: "Shirts",
        price: 2199,
        image: "vanheusen-shirt.jpg"
      },
      {
        id: 16,
        name: "Raymond Classic Trousers",
        brand: "Raymond",
        category: "Bottomwear",
        price: 2499,
        image: "raymond-trousers.jpg"
      },
      {
        id: 17,
        name: "Peter England Men Checked Shirt",
        brand: "Peter England",
        category: "Shirts",
        price: 1499,
        image: "peter-shirt.jpg"
      },
      {
        id: 18,
        name: "U.S. Polo Assn. Printed Polo T-shirt",
        brand: "U.S. Polo Assn.",
        category: "Topwear",
        price: 1099,
        image: "uspolo-tshirt.jpg"
      },
      {
        id: 19,
        name: "Pepe Jeans Slim Fit Denim",
        brand: "Pepe Jeans",
        category: "Bottomwear",
        price: 1999,
        image: "pepe-denim.jpg"
      },
      {
        id: 20,
        name: "Max Women Floral Kurti",
        brand: "Max",
        category: "Ethnic Wear",
        price: 799,
        image: "max-kurti.jpg"
      }
    ];

    
  

  let searchInput=document.querySelector("#searchInput")
  let search_box=document.querySelector(".search_box")

  searchInput.addEventListener("input",()=>{


    let userValue= searchInput.value.toLowerCase();

    let productsData=products.filter((product)=>{
     return(
      product.name.toLowerCase().includes(userValue) ||
      product.brand.toLowerCase().includes(userValue) 
      
    )

    })
      
   callMEproducts(productsData)
    
  })


  function callMEproducts(productList){
    
    // search_box.innerHTML = "";
    if(productList.length==0){
      search_box.style.display="block"
      search_box.innerHTML="<p>We couldn't find any matches!</p>"
    }

    productList.forEach((product)=>{
      // search_box.style.display="block"
      search_box.appendChild=`<li> ${product.name}</li>`
      // const div = document.createElement("div");
      // div.className = "product-card";
      // div.textContent = product.name;
      // box.appendChild(div);
    })

  }
  callMEproducts(products);
// header end//

//section one start
let her= document.querySelector(".her")
let him= document.querySelector(".him")
her.style.cursor = "pointer";
him.style.cursor = "pointer";

her.addEventListener("click",function(){
  window.location.href="women.html"
})
him.addEventListener("click",function(){
  window.location.href="men.html"
})

//
let slider=document.getElementById("slider")
let totalImage=slider.children.length//32 images
let currentIndex=0;//reset karne ke liye
let imagesPerSilde=8;//in one time show 8 image
const imageWidth = 12.5; // image width 

function slideImages(){

  currentIndex +=imagesPerSilde//current me imagespersilde(8 ) ka number aayega

  if(currentIndex >=totalImage ){//agar currentIndex ka value totalImage(32 index) sebara hai 
    currentIndex=0;
  }
  
  const offset=currentIndex *imageWidth;//ye image ka width ko currentIndex se miltiply karega har bar currentIndex ka value 8 ka duble hota hai
  slider.style.transform = `translateX(-${offset}%)`;

}

setInterval(slideImages,3000)//har 3 seconds me ye function chalega

//section one end

//section two start

let section_two_silder= document.getElementById("section-two-silder")
let total_slider=section_two_silder.children.length
let currentSectin_2Value=0;

function sectionTwocall(){
  currentSectin_2Value+=5
  if(currentSectin_2Value >=total_slider ){
    currentSectin_2Value=0;
  }
  
  const calTotalNum=currentSectin_2Value*20
  section_two_silder.style.transform=`translateX(-${calTotalNum}%)`

}

setInterval(sectionTwocall,3000)


//

//section two end

 /*vertical  coupon start*/
let siteCoupon=document.querySelector(".siteCoupon")
let coupon_hidden_De=document.querySelector(".coupon_hidden_De")
let  couponIcon=document.querySelector(".bi-caret-left-fill")


siteCoupon.addEventListener("click",function(){
  siteCoupon.classList.toggle("siteCouponWidth");
  couponIcon.classList.toggle("bi-caret-right-fill");

  if( coupon_hidden_De.style.display == "block"){

    coupon_hidden_De.style.display="none";

  }
  else{
    coupon_hidden_De.style.display="block";
  }
  
;
})

 /*vertical  coupon end*/
