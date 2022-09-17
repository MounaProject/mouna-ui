<template>
    <div class="grid grid-cols-3 items-center px-[5%]">
        <div class="logo">
            <img class="w-16 object-cover object-center" src="/mouna.jpg" alt="logo">
        </div>
        <nav>
            <ul class="flex items-center">
                <li class="py-8 px-4 cursor-pointer">Accueil</li>
                <li class="py-8 px-4 cursor-pointer">Shop</li>
                <li class="py-8 px-4 cursor-pointer">Blog</li>
                <DropDown :dropItem="dropItem">option</DropDown>
                <li class="py-8 px-4 cursor-pointer">Contact</li>
            </ul>
        </nav>
        <div class="Bookorder justify-self-end">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'NavBar',
    data(){
        return{
            dropItem:{
                item1:"page 1",
                item2:"page 2",
                item3:"page 3",
            }
        }
    },
}
</script>