let $ = require("jquery")
let TweenMax = require("gsap").TweenMax
let ScrollToPlugin = require("gsap/ScrollToPlugin")
let enable = true
export default {
  enable: true,
  init: function(){
    var $window = $(window);
    var scrollTime = 1;
    var scrollDistance = 50;
    $(function(){
      $window.on("mousewheel DOMMouseScroll", function (event) {
        if (enable) {
          event.preventDefault();
          var delta = event.originalEvent.wheelDelta / 40 || -event.originalEvent.detail / 0.5;
          var scrollTop = $window.scrollTop();
          var finalScroll = scrollTop - parseInt(delta * scrollDistance);

          TweenMax.to($window, scrollTime, {
            scrollTo: { y: finalScroll, autoKill: true },
            ease: Power2.easeOut,
            overwrite: 10
          });
          // console.log(finalScroll);
        }
      });
    })
    
  },
  set(status){
    enable=status
  }
}

