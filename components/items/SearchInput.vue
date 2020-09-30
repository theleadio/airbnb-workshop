<template>
    <div :class="{
            'rounded-full':true,
            'h-full':true,
            'py-3':true,
            'px-4':true,
            'relative':true,
            'bg-white':true,
            'w-96': searchFocus,
            'w-40': !searchFocus,
            'transition-all':true,
            'duration-500':true,
            'ease-in-out':true,
            'border':true,
            'border-gray-300': true
        }">
        <input class="w-full font-sans font-poppins bg-transparent focus:outline-none active:outline-none text-gray-600 text-sm tracking-wide pr-8" placeholder="Search area" @focus="searchFocus = true" @blur="searchFocus=false"/>
        <div class="absolute top-0 right-0 p-2">
            <button class="transition-all duration-300 ease-in-out bg-red-500 rounded-full px-2 py-1 hover:bg-red-600 focus:outline-none active:outline-none" type="button"><i class="text-white text-sm fas fa-search"></i></button>
        </div>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            searchFocus:false
        }
    }
}
</script>