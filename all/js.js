const buton = document.querySelector ('.buton');

function openPage(pageName, elmnt, color, text) {
    var i, isi, tab;
    isi = document.getElementsByClassName("isi");
    for (i = 0; i < isi.length; i++) {
      isi[i].style.display = "none";
    }
  
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].style.backgroundColor = "";
      tab[i].style.color = "";
    }
    

    let scrollPosition;

    // Simpan posisi scroll saat pengguna meninggalkan tab
    function saveScrollPosition() {
      scrollPosition = window.scrollY;
    }

    // Pulihkan posisi scroll saat pengguna kembali ke tab
    function restoreScrollPosition() {
      window.scrollTo(0, scrollPosition);
    }


    document.getElementById(pageName).style.display = "block";

    window.scrollTo(0, scrollPosition);
    
    restoreScrollPosition();
    elmnt.style.backgroundColor = color;
    elmnt.style.color = text;

    document.getElementById("ms").style.width = "0";
    document.getElementById("nav").style.marginLeft= "0";
    document.getElementById("garisid").style.marginRight = "0";
    document.body.style.backgroundColor = "white";
    let bg = document.querySelector ('.bgcount').style.display = "none";
    document.getElementById("butonid").style.marginLeft= "0";
    document.getElementById("open").style.display = "flex";


  }
  
  document.getElementById("defaultOpen").click();



                  // seting
const closebtn = document.querySelector('.colsebtn');

closebtn.addEventListener('click', function () {
  document.getElementById("ms").style.width = "0";
  document.getElementById("nav").style.marginLeft= "0";
  document.getElementById("butonid").style.marginLeft= "0";
  document.getElementById("garisid").style.marginRight = "0";
  // document.getElementById("navkiriid").style.opacity = "1";
  let bg = document.querySelector ('.bgcount').style.display = "none";
  document.getElementById("open").style.display = "flex";
  document.body.style.backgroundColor = "white";

  
})
function opensetting() {
  document.getElementById("ms").style.width = "250px";
  document.getElementById("nav").style.marginLeft = "250px";
  document.getElementById("butonid").style.marginLeft = "250px";
  document.getElementById("garisid").style.marginRight = "-250px";
  // document.getElementById("navkiriid").style.opacity = "0";
  document.getElementById("open").style.display = "none";
  let bg = document.querySelector ('.bgcount').style.display = "block";
  
}

// function garis(x) {
//   x.classList.toggle("change");
// }
// const garis = document.querySelector ('garis').addEventListener('click', function (){
//   document.querySelectorAll('tab').classList.toggle('slide')
// })
const garis = document.querySelector ('.garis');
garis.addEventListener('click', function () {
  garis.classList.toggle("change");
  buton.classList.toggle("slide");
})


let contact = document.getElementById ("cont1").addEventListener('click', function () {
  document.getElementById ("conid").style.height = "100%";
  document.getElementById("defaultOpen").click();

})
let closeiden = document.getElementById ("closeiden").addEventListener('click', function () {
  document.getElementById ("conid").style.height = "0";
})

// tempat slider img home

const list = document.querySelector ('.slider .listimg');
const img = document.querySelectorAll ('.slider .listimg .img');
const tO = document.querySelectorAll ('.slider .tO li');
const selanjut = document.getElementById ('selanjut');
const sebelum = document.getElementById ('sebelum');

let active = 0;
let length = img.length - 1;

selanjut.onclick = function(){
    if(active + 1 > length){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}
sebelum.onclick = function(){
    if(active - 1 < 0){
        active = length;
    }else{
        active = active - 1;
    }
    reloadSlider();
}
let refresh = setInterval(()=> {selanjut.click()}, 3000);
function reloadSlider(){
    let checkLeft = img[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActivetO = document.querySelector('.slider .tO li.active');
    lastActivetO.classList.remove('active');
    tO[active].classList.add('active');
}

tO.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

                  //saat window di scroll lore
$(window).scroll(function() {
    var mScroll = $(this).scrollTop();
    // console.log(mScroll);
    if (mScroll > 284){
      $('.sec2home .sec2').addClass('muncul')
    }
}) 

                  //view img card
// const view1 = document.getElementsByClassName('viewimg')[0];
// const view2 = document.getElementsByClassName('viewimg')[1];
// const tmbl1 = document.getElementById('tombol1');
// const tmbl2 = document.getElementById('tombol2');
// const modalimg = document.getElementById('img0');
// const closeimg = document.getElementsByClassName('closeimg')[0];
// const closeimg1 = document.getElementsByClassName('closeimg')[1];
// tmbl1.onclick = function () {
//   view1.style.display = "flex";
// }
// tmbl2.onclick = function () {
//   view2.style.display = "flex";
// }

// closeimg.onclick = function () {
//   view2.style.display = "none";
//   view1.style.display = "none";
// }

// const card = document.getElementsByClassName('imgcontent');
// for (i = 0; i < card.length; i++) {
//   card[i].style.display = "none";
// }







//slideshow style interval
var autoSwap = setInterval( swap,1500);

//pause slideshow and reinstantiate on mouseout
$('ul, span.buttoncard').hover(
  function () {
    clearInterval(autoSwap);
}, 
  function () {
   autoSwap = setInterval( swap,1500);
});

//global variables
var items = [];
var startItem = 1;
var position = 0;
var itemCount = $('.carousel li.items').length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$('li.items').each(function(index) {
    items[index] = $(this).text();
});

//swap images function
function swap(action) {
  var direction = action;
  
  //moving carousel backwards
  if(direction == 'counter-clockwise') {
    var leftitem = $('.left-pos').attr('id') - 1;
    if(leftitem == 0) {
      leftitem = itemCount;
    }
    
    $('.right-pos').removeClass('right-pos').addClass('back-pos');
    $('.main-pos').removeClass('main-pos').addClass('right-pos');
    $('.left-pos').removeClass('left-pos').addClass('main-pos');
    $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');
    
    startItem--;
    if(startItem < 1) {
      startItem = itemCount;
    }
  }
  
  //moving carousel forward
  if(direction == 'clockwise' || direction == '' || direction == null ) {
    function pos(positionvalue) {
      if(positionvalue != 'leftposition') {
        //increment image list id
        position++;
        
        //if final result is greater than image count, reset position.
        if((startItem+position) > resetCount) {
          position = 1-startItem;
        }
      }
    
      //setting the left positioned item
      if(positionvalue == 'leftposition') {
        //left positioned image should always be one left than main positioned image.
        position = startItem - 1;
      
        //reset last image in list to left position if first image is in main position
        if(position < 1) {
          position = itemCount;
        }
      }
   
      return position;
    }  
  
   $('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
   $('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
   $('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
   $('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');

    startItem++;
    position=0;
    if(startItem > itemCount) {
      startItem = 1;
    }
  }
}

//next button click function
$('#next').click(function() {
  swap('clockwise');
});

//prev button click function
$('#prev').click(function() {
  swap('counter-clockwise');
});

//if any visible items are clicked
$('li').click(function() {
  if($(this).attr('class') == 'items left-pos') {
     swap('counter-clockwise'); 
  }
  else {
    swap('clockwise'); 
  }
});

// view card
var activeDivId = null;


document.getElementById("button1").addEventListener("click", function() {
  toggleDiv("myDIV1");
});

document.getElementById("button2").addEventListener("click", function() {
  toggleDiv("myDIV2");
});

document.getElementById("button3").addEventListener("click", function() {
  toggleDiv("myDIV3");
});

document.getElementById("button4").addEventListener("click", function() {
  toggleDiv("myDIV4");
});

var closeButtons = document.getElementsByClassName("closeButton");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function() {
    closeDiv(this.parentNode.id);
  });
}

function toggleDiv(divId) {
  if (activeDivId && activeDivId !== divId) {
    closeDiv(activeDivId);
  }

  var x = document.getElementById(divId);
    x.style.display = "flex";
    activeDivId = divId;
}

function closeDiv(divId) {
  var x = document.getElementById(divId);
  x.style.display = "none";
  activeDivId = null;
}

// saat love di click
const love_red = document.querySelector('.loveactive1');
document.querySelector('.borderlove').addEventListener('click', function () {
  love_red.classList.toggle('lovered');
})
const love_red1 = document.querySelector('.loveactive');
document.querySelector('.borderlove1').addEventListener('click', function () {
  love_red1.classList.toggle('lovered');
})
const love_red3 = document.querySelector('.loveactive3');
document.querySelector('.borderlove3').addEventListener('click', function () {
  love_red3.classList.toggle('lovered');
})

// icon->kiri6 di click
const small = document.querySelector('.small1');
const smal2 = document.querySelector('.small2');
const smal3 = document.querySelector('.small3');
const smal4 = document.querySelector('.small4');
document.querySelector('.icon1').addEventListener('click', function () {
  small.classList.toggle('small1on');
  document.querySelector('.svgicon1').classList.toggle('off');
})
document.querySelector('.icon2').addEventListener('click', function () {
  smal2.classList.toggle('small1on');
  document.querySelector('.svgicon2').classList.toggle('off');
})
document.querySelector('.icon3').addEventListener('click', function () {
  smal3.classList.toggle('small1on');
  document.querySelector('.svgicon3').classList.toggle('off');
})
document.querySelector('.icon4').addEventListener('click', function () {
  smal4.classList.toggle('small1on');
  document.querySelector('.svgicon4').classList.toggle('off');
})

// slide untuk gallery

const listgambargallery = document.querySelector ('.slidergallery .iisigallery');
const itemimggallery = document.querySelectorAll ('.slidergallery .iisigallery .gallery');
const titikslidergallery = document.querySelectorAll ('.slidergallery .titikslider li');
const tombolnextgallery = document.getElementById ('next');
const tombolprevgallery = document.getElementById ('prev');
let slider_active = 0;
let semuaitemgallery = itemimggallery.length - 4;

tombolnextgallery.onclick = function(){
    if(slider_active + 1 > semuaitemgallery){
        slider_active = 0;
    }else{
        slider_active = slider_active + 1;
    }
    ngulagslider();
}
tombolprevgallery.onclick = function(){
    if(slider_active - 1 < 0){
        slider_active = semuaitemgallery;
    }else{
        slider_active = slider_active - 1;
    }
    ngulagslider();
}
// let perbarui = setInterval(()=> {tombolnextgallery.click()}, 3000);
function ngulagslider(){
    let cekLeft = itemimggallery[slider_active].offsetLeft;
    listgambargallery.style.left = -cekLeft + 'px';

    // let akhir = document.querySelector('.slidergallery .titikslider li.activeslider');
    // akhir.classList.remove('activeslider');
    // titikslidergallery[slider_active].classList.add('activeslider');
}

titikslidergallery.forEach((li, key) => {
    li.addEventListener('click', function(){
      slider_active = key;
      ngulagslider();
    })
});

// slide poster di gallery

document.addEventListener("DOMContentLoaded", function () {
  const slide_poster = document.querySelector(".dekorasi");
  let nilaiAwalSlide = 0;

  function JalankanSlide(index) {
    if (index < 0) {
      index = 2;
    } else if (index > 2) {
      index = 0;
    }
    nilaiAwalSlide = index;
    const translateXValue = -nilaiAwalSlide * 33.33;
    slide_poster.style.transform = `translateX(${translateXValue}%)`;
  }

  function nextSlide() {
    JalankanSlide(nilaiAwalSlide + 1);
  }

  setInterval(nextSlide, 7000); 
});


// filter galllery

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


var btnContainer = document.getElementById("myBTN_filter");
var btns = btnContainer.getElementsByClassName("btn_filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active-1");
    current[0].className = current[0].className.replace(" active-1", "");
    this.className += " active-1";
  });
}

// pop up shop

const buyButtons = document.querySelectorAll('.buy-btn');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn-popup');
const productTitle = document.querySelector('.product-title');
const productImage = document.querySelector('.product-image');
const productDescription = document.querySelector('.product-description');
const productPrice = document.querySelector('.product-price');

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Dapatkan informasi produk dari atribut data-* atau dari objek produk
    const productName = button.getAttribute('data-product-name');
    const productImageURL = button.getAttribute('data-product-image');
    const productDesc = button.getAttribute('data-product-description');
    const productPriceValue = button.getAttribute('data-product-price');

    // Update konten pop-up dengan informasi produk yang sesuai
    productTitle.textContent = productName;
    productImage.src = productImageURL;
    productDescription.textContent = productDesc;
    productPrice.textContent = `Harga: ${productPriceValue}`;

    // Tampilkan pop-up
    overlay.style.display = 'grid';
  });
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});


// parallax
$(document).ready(function() {
  $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      $('.text_parallax_about').css('transform', 'translate3d(0,' + -(scrollTop * -0.6) + 'px, 0)');
      $('.startregisgallery').css('transform', 'translate3d(0,' + -(scrollTop * -0.7) + 'px, 0)');
      $('.listimg').css('transform', 'translate3d(0,' + -(scrollTop * -0.5) + 'px, 0)');
  });
}); 

// slider about dibagian aplikasi

// const slideApkAbout = document.querySelector ('.bagian-92');
// const ApkAbout = document.querySelectorAll ('.bagian-9-1');
// const nextSliderAbout = document.querySelector ('.next_slider_about');
// const prevSliderAbout = document.querySelector ('.prev_slider_about');
// let slider_Apk_active = 0;
// let semuaApkAbout = ApkAbout.length - 4;

// nextSliderAbout.onclick = function(){
//     if(slider_Apk_active + 1 > semuaApkAbout){
//         slider_Apk_active = 0;
//     }else{
//         slider_Apk_active = slider_Apk_active + 1;
//     }
//     reloadSliderApkAbout();
// }
// prevSliderAbout.onclick = function(){
//     if(slider_Apk_active - 1 < 0){
//         slider_Apk_active = semuaApkAbout;
//     }else{
//         slider_Apk_active = slider_Apk_active - 1;
//     }
//     reloadSliderApkAbout();
// }
// function reloadSliderApkAbout(){
//     let Ngecek_Slide_Berikutnya = ApkAbout[slider_Apk_active].offsetLeft;
//     slideApkAbout.style.left = -Ngecek_Slide_Berikutnya + 'px';
// }
