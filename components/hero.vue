<template>
  <div class="heroSection bg-[#fcedec] max-h-[800px] h-[calc(100vh-150px)] px-[5%] py-12 grid grid-cols-2 justify-center content-center">
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
      <div class="image w-full flex justify-center">
        <img class="object-cover max-w-[460px] w-[60%]  h-auto" src="\books\photo_2022-09-17_18-09-43.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'hero',
}
</script>

<style>

</style>