


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


