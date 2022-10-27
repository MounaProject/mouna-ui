<template>
  <div class="heroSection bg-[#fcedec] max-h-[600px] h-[calc(100vh-150px)] px-[5%] py-12 grid grid-cols-2 justify-center content-center">
    <div class="text-center self-center">
      <div>
        <p class="font-medium uppercase my-4 text-xs text-lighter tracking-normal">choix de l'editeur</p>
        <h1 class="text-5xl spacing leading-[50px] capitalize mb-2 tracking-tighter">Le livre de la semaine</h1>
        <p class="text-base font-semibold text-primary mb-7">Temps limité pour la promotion!</p>
        <div class=" flex justify-center">
          <div class="flex content-center cursor-pointer rounded-[50px]  py-4 px-8 bg-white w-fit text-sm font-semibold">
            <span class="mr-2">Achetez</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F65D4E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-[2px] feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="justify-self-center">
      <div class="swiper">
        <!-- <div class="swiper-wrapper w-full flex gap-x-4 justify-center">
          <img class="object-cover max-w-[460px] w-[60%]  h-auto" src="\books\photo_2022-09-17_18-09-43.jpg" alt="">
          <img class="swiper-slide object-cover w-[120px] rounded-lg hero-books-shadow h-auto" src="\books\photo_2022-09-17_18-09-43.jpg" alt="">
          <img class="swiper-slide object-cover w-[120px] rounded-lg hero-books-shadow h-auto" src="\books\photo_2022-09-17_18-09-43.jpg" alt="">
          <img class="swiper-slide object-cover w-[120px] rounded-lg hero-books-shadow h-auto" src="\books\photo_2022-09-17_18-09-43.jpg" alt="">
        </div> -->
        <client-only>
          <slider class="swiper-wrapper w-full flex gap-x-4 justify-center" :indicators="false" :stopOnHover="true" :control-btn="false" height="280px">
            <slider-item class="flex gap-x-4 justify-center">
              <img class="swiper-slide  object-contain w-full rounded-lg h-full" src="\books\photo_2022-09-17_18-09-43.jpg" alt="">
              <img class="swiper-slide  object-contain w-full rounded-lg h-full" src="\books\photo_2022-09-17_18-09-43.jpg" alt="">
            </slider-item>
            <slider-item class="flex gap-x-4 justify-center">
              <img class="swiper-slide  object-contain w-full rounded-lg h-full" src="books/photo_2022-09-17_18-10-12.jpg" alt="">
              <img class="swiper-slide  object-contain w-full rounded-lg h-full" src="books/photo_2022-09-17_18-10-12.jpg" alt="">
            </slider-item>
            <slider-item class="flex gap-x-4 justify-center">
              <img class="swiper-slide  object-contain w-full rounded-lg h-full" src="\books\photo_2022-09-17_18-09-43.jpg" alt="">
              <img class="swiper-slide  object-contain w-full rounded-lg h-full" src="\books\photo_2022-09-17_18-09-43.jpg" alt="">
            </slider-item>
            <slider-item class="flex gap-x-4 justify-center">
              <img class="swiper-slide  object-contain w-full rounded-lg h-full" src="books/photo_2022-09-17_18-11-34.jpg" alt="">
              <img class="swiper-slide  object-contain w-full rounded-lg h-full" src="books/photo_2022-09-17_18-11-34.jpg" alt="">
            </slider-item>
          </slider>
        </client-only>
        <!-- <client-only>
            <slider animation="fade">
              <slider-item
                v-for="(i, index) in list"
                :key="index"
                :style="i"
              >
                <p style="line-height: 280px; font-size: 5rem; text-align: center;">Page{{ index + 1 }}</p>
              </slider-item>
            </slider>
        </client-only> -->
        <img src="/stand.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import  { Swiper, Navigation, Pagination, EffectCards, Autoplay } from 'swiper';
// import 'swiper/swiper-bundle.min.css'
import Vue from 'vue'
import EasySlider from 'vue-easy-slider'

Vue.use(EasySlider)

export default {
  name:'hero',
  data() {
    return {
      list: [
        { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
        { backgroundColor: '#eee', width: '100%', height: '100%' },
        { backgroundColor: '#f44336', width: '100%', height: '100%' },
      ],
    }
  },
  // mounted() {
  //   // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
  //   // previously it was before export default. Moved here for performance issues. Move back in case of problems.
  //   // init Swiper:  eslint-disable used for deleting error of unsued const swiper
  //   /* eslint-disable no-unused-vars */
  //   const swiper = new Swiper('.swiper', {
  //     // Optional parameters
  //     // @see https://swiperjs.com/swiper-api#parameters
  //     loop: false,
  //     effect: "cards",
  //     grabCursor: true,
  //     // remove unused modules if needed
  //     modules: [Navigation, Pagination, EffectCards, Autoplay],
  //     // Pagination if needed
  //     pagination: {
  //       el: '.swiper-pagination',
  //       type: 'bullets',
  //       clickable: true,
  //     },
  //     // Autoplay if needed
  //     autoplay: {
  //       delay: 1500,
  //     },
  //     // Navigation arrows if needed
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   })
  //   // you can use different options later
  //   swiper.on('activeIndexChange', (swiper) => {
  //     // console.log(swiper)
  //   })
  // },
}
</script>

<style scoped>
  .hero-books-shadow{
    box-shadow: grey -3px 3px 10px 0px;
    margin-bottom: 2px;
    z-index: 1;
  }
  .swiper-slide {
    /* width: 120px !important; */
}
</style>