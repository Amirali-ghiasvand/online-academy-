let header = document.querySelector(".navigation");
let logo = document.querySelector(".continer-logo-header");
let navBarHeader = document.querySelector(".continer-navbar-header");
let searchIcon = document.querySelector(".search-icon")
let SearchBoxMobile = document.querySelector(".search-box-mobile");
let SearchBox = document.querySelector(".continer-search-header");
let searchButton = document.querySelector(".search-button");
let counter = document.querySelectorAll(".counter");
let darkmode = document.querySelector(".icon-theme");
let darkmodemobile = document.querySelector(".icon-theme-mobile");
const loader = document.querySelector(".loader");
const continerDarkMode = document.querySelector(".continer-dark-mode-mobile");
const SignUpLogin = document.querySelector(".sign-up-login");

// scroll
window.onscroll = function () {
	// pageYOffset or scrollY
	if (window.pageYOffset > 0) {
		header.classList.add("scrolled");
		logo.style.display = "none";
		continerDarkMode.style.display='none'
		SignUpLogin.style.display='none'

	} else {
		header.classList.remove("scrolled");
		logo.style.display = "inline";
		continerDarkMode.style.display='block'
		SignUpLogin.style.display='block'
	


	}
};

searchIcon.addEventListener("click", function () {
	SearchBoxMobile.classList.toggle("search-box-active");
	logo.classList.toggle("nav-bar-off");
	navBarHeader.classList.toggle("nav-bar-off");
	
});
searchButton.addEventListener("click", function () {
	SearchBoxMobile.classList.toggle("search-box-active");
});


// window.addEventListener("scroll",(event) =>{
// console.log(window.scrollY)
// console.log(continerCounter.pageYOffset)
// })

// window.addEventListener("load",function(){
// loader.classList += '  hidden'
// })

darkmode.addEventListener('click',function(){
	document.body.classList.toggle("dark-theme")
	if(document.body.classList=="dark-theme"){

		darkmode.src='./image/moon-svgrepo-com (1).svg'

	}
	else{
		darkmode.src='./image/sun-svgrepo-com.svg'

	}
})
darkmodemobile.addEventListener('click',function(){
	document.body.classList.toggle("dark-theme")
	if(document.body.classList=="dark-theme"){

		darkmodemobile.src='./image/moon-svgrepo-com (1).svg'

	}
	else{
		darkmodemobile.src='./image/sun-svgrepo-com.svg'

	}
})





