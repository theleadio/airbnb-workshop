<template>
    <Content>
        <template v-slot:content>
            <div class="flex relative">
                <div class="grid grid-cols-2">
                    <slot name="main"></slot>
                    <div class="grid grid-cols-2">
                        <slot name="sub"></slot>
                    </div>
                </div>
                <div class="absolute bottom-0 right-0 p-4">
                    <button class="transition-all duration-500 ease-in-out border hover:shadow-lg hover:bg-gray-300 hover:border-gray-400 focus:outline-none active:outline-none py-2 px-4 bg-white rounded-md" type="button"> Show all photos </button>
                </div>
            </div>
        </template>
    </Content>
</template>


