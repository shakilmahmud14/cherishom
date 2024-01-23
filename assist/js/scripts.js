jQuery(document).ready(function(){

  // humbar icon js start hare
  var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
  // humbar icon js end hare
  // navbar js start

	jQuery(".hamburger").click(function(){
		jQuery(".nav-area").slideToggle();
	})
	// nav js end hare

 	// carousel js 
    $(".clint-carousel").owlCarousel({
      autoplay:true,
      loop:true,
      items: 1,
      nav:true,
      dots:false,
    });
















})