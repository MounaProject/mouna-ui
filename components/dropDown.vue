<template>
    <div v-on:mouseleave="show()" v-on:mouseenter="show()" class="relative z-20 py-8 px-4">
        <div class="inline-block text-left">
            <div class="flex justify-end">
                <button type="button" class="flex justify-end w-auto text-sm font-medium text-gray-700" aria-expanded="true" aria-haspopup="true">
                    <slot></slot>
                    <!-- Heroicon name: mini/chevron-down -->
                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div :class="{'dropDownAnimation transition ease-out duration-100 transform opacity-100 scale-100':showDropDown}" class="hidden right-0 z-10 mt-8 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="arrow transform rotate-45 absolute right-12 -top-[0.53rem] w-4 h-4 bg-white border border-solid"></div>
                <div class="py-1" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                    <a v-for="(item,index) in dropItem" :key="index" href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">{{item}}</a>
                </div>
            </div>
        </div>
        <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        -->
    </div>
</template>

<script>
    export default{
        name:'dropDown',
        props:{
            dropItem:{
                type:Object,
                required:true,
            },
        },
        data(){
            return{
                showDropDown:false,
            }
        },
        methods:{
            show(){
                this.showDropDown=! this.showDropDown;
                console.log(this.showDropDown)
            }
        }
    }
</script>

<style scoped>
    .dropDownAnimation{
        display: block !important;
        position: absolute;
    }
    .arrow{
        border-color: rgba(0,0,0,0.1);
        border-right: none;
        border-bottom: none;
    }
</style>