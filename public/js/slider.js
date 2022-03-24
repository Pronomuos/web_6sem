window.onload = function () {
  let carousel_elem = document.querySelector('.carousel');
  let flickity = new Flickity(carousel_elem, {
    autoPlay: 1500,
    // advances to the next cell
    // if true, default is 3 seconds
    // or set time between advances in milliseconds
    // i.e. `autoPlay: 1000` will advance every 1 second
    initialIndex: 2,
    // zero-based index of the initial selected cell
    lazyLoad: 2,
    // enable lazy-loading images
    // set img data-flickity-lazyload="src.jpg"
    // set to number to load images adjacent cells
    wrapAround: true,
    // at end of cells, wraps-around to first for infinite scrolling
  });
};
