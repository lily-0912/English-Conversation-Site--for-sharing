// ハンバーガー

function hamburger() {
  const hamburger = document.querySelector("#js-hamburger"),
        hamburgerParent = document.querySelector("#js-l-header");

  hamburger.addEventListener("click" , function(){
    hamburgerParent.classList.toggle("nav-open");    
  });
};

hamburger();

// メインビジュアルフェード

const images = document.querySelectorAll("#js-fade-img");
let number = 0;

function fadeImg(){
  images[number].classList.remove("fade-img");
  number = (number + 1) % images.length;
  images[number].classList.add("fade-img");
}

setInterval(fadeImg , 5000);


// 選ばれる理由スライドイン

const slideIns = document.querySelectorAll("#js__slide-in"),
      callback = function(){
        slideIns.forEach((slideIn) => {
          slideIn.classList.add("slide-in");
        });

      },
      io = new IntersectionObserver(callback);

slideIns.forEach((slideIn) => {
  io.observe(slideIn);
})
