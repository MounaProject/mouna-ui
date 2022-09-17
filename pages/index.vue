<template>
  <div class="home font-sans">
    <TopBar/>
    <NavBar/>
    <Hero/>
    <BookCard/>
  </div>
</template>

<script>
import TopBar from '../components/topBar.vue';
import NavBar from '../components/navBar.vue';
import DropDown from '../components/dropDown.vue';
import Hero from '../components/hero.vue';
export default {
    name: "IndexPage",
    components: { TopBar, NavBar, DropDown, Hero }
}
</script>

<style>

</style>
