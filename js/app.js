//todo Splash Screen

const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 1000);
})

//todo Splash Screen



//* Sticky navbar
function sticky() {
    const navbar = document.querySelector('.navbar');
    if(document.documentElement.scrollTop<=500){
        navbar.style.borderBottom = '1px solid gray';
        navbar.style.backgroundColor = 'transparent';
        navbar.style.backdropFilter = 'blur(0px)'; 
        navbar.style.position = 'relative';
        
    }
    else {
        navbar.style.position = 'sticky';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.204)';
        navbar.style.backdropFilter = 'blur(15px)';
    }


}

//* Sticky navbar


//? go to top button 


function showTopBtn() {
    let topBtn = document.querySelector('.topBtn');
    if(document.documentElement.scrollTop > 500) {
        topBtn.style.display = 'flex';
    }
    else {
        topBtn.style.display = 'none';
        
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0 ;
}

//? go to top button 


//* Toggle Theme

function myFunction() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const brandLogo = document.querySelector('.brand-logo');
    brandLogo.classList.toggle('dark-mode2');
    const productName = document.querySelectorAll('.product-name');
    productName.classList.toggle('dark-mode2');
    
}

//* Toggle Theme

//? Toggle user account

function accountBtn() {
    const myAccount = document.querySelector('.fa-circle-user');
    myAccount.classList.toggle('my-account');

}

//? Toggle user account


//todo Show Password 

function passToggle() {
    if(pwd.type == 'password') {
        pwd.type = 'text';
        pwd.style.margin = '0';
        pwd.style.border = 'none';
        chk.classList.remove('fa-eye-slash');
        chk.classList.add('fa-eye');
        // chk.style.paddingRight = '1px';
        
    }
    else{
        pwd.type = 'password';
        chk.classList.add('fa-eye-slash');
        chk.classList.remove('fa-eye');
        // chk.style.padding = '0 3px';
    }
}


//todo Show Password 


//? to update the quantity

const minusBtn = document.querySelector('.minusBtn');
const price = document.querySelector('.price');
let dollar = 650;
let quantity1 = document.querySelector('#quantity1');
let number = 1;
let newPrice;
let lessPrice;

function increaseQuantity() {
    number++;
    quantity1.textContent = number;
    newPrice = dollar*number;
    price.textContent = '$'+newPrice;
    
    
};
function decreaseQuantity() {
    if(number==1) {
        minusBtn.removeEventListener("click",decreaseQuantity);
        return;
    }
    number--;
    quantity1.textContent = number;
    lessPrice = dollar*number;
    price.textContent = '$'+lessPrice;
};


const price2 = document.querySelector('.price2');
let dollar2 = 550;
let quantity2 = document.querySelector('#quantity2');
let number2 = 1;
let newPrice2;
let lessPrice2;

function increaseQuantity2() {
    number2++;
    quantity2.textContent = number2;
    newPrice2 = dollar2*number2;
    price2.textContent = "$"+newPrice2;
    
};
function decreaseQuantity2() {
    if(number2==1) {
        minusBtn.removeEventListener("click",decreaseQuantity);
        return;
    }
    number2--;
    quantity2.textContent = number2;
    lessPrice2 = dollar2*number2;
    price2.textContent = "$"+lessPrice2;

};




//? to update the quantity



// Product Slider
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        },
    }
  });

// Product Slider

// Category Slider

new Swiper('.category-wrapper', {
    loop: true,
    spaceBetween: 60,
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    //   dynamicBullets: true,
},
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 5
        },
    }
});

// Category Slider

// just-for-you Slider
        
new Swiper('.just-for-you-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        },
    }
  });

// just-for-you Slider

// Employee Slider 

new Swiper('.employee-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    //   dynamicBullets: true,
},
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
    }
});

// Employee Slider 


//todo Coundown 

$(document).ready(function(){
    // Countdown timer
    $('#countdown-timer').countdown({
        date: '12/31/2024 23:59:59'
    }, function () {
        alert('Happy New Year!');
    });
    // Countdown timer
    // down timer
    $('#down-timer').countdown({
        date: '12/23/2024 23:59:59'
    }, function () {
        alert('Merry Christmas!');
    });
    // down timer

    //? cookies
    
    const myCookies = document.querySelector('.cookies');
    $(myCookies).fadeIn('slow');
    myCookies.style.display = 'flex';
    
    //? cookies
        
    });

//todo Coundown 



