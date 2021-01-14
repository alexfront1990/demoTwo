(function(){

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById('site-header');

  var checkScroll = function() {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    
    prevScroll = curScroll;
  };

  var toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 52) { 
      
      //replace 52 with the height of your header in px

      header.classList.add('header-wrap--hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('header-wrap--hide');
      prevDirection = direction;
    }
  };
  
  window.addEventListener('scroll', checkScroll);

  AOS.init();


  AOS.init({
    // Global settings:
   
    mirror: false,
    anchorPlacement: 'top-bottom',
  
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    once: false, // whether animation should happen only once - while scrolling down
    
  
  });


  document.querySelector('#burger-btn').addEventListener('click', openMenu);
  document.querySelector('#close-btn').addEventListener('click', closeMenu);


  function openMenu() {
    document.querySelector('#header-xs').style.opacity = 1;
    document.querySelector('#header-xs').style.visibility = 'visible';
    document.querySelector('body').style.overflowY = 'hidden';
    document.querySelector('#wrapper').style.display = 'none';
  }

  function closeMenu() {
    document.querySelector('#header-xs').style.opacity = 0;
    document.querySelector('#header-xs').style.visibility = 'hidden';
    document.querySelector('body').style.overflowY = '';
    document.querySelector('#wrapper').style.display = '';
  }


  const tabs = new Tabs({
    elem: "ladder-tabs",
    open: 0
		});

})();

