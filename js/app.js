//Configuraciones de swiper para el slider

// Le pasamos un objeto de configuracion
/**
 * el : elemento padre que contiene los slides
 * slideClass: la clase de c/u de los slides
 */
window.swiper = new Swiper({
  el: ".slider__contenedor",
  slideClass: "slider__slide",
  createElements: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: true,
  navigation: true,
});
