<template>
    <div class="flex items-center justify-between py-6 border-b border-gray-400">
        <div class="flex flex-col">
            <div class="text-md md:text-xl tracking-tight font-light">
                <slot name="name"></slot>
            </div>
            <div class="text-sm md:text-md tracking-tight font-light">
                <slot name="description"></slot>
            </div>
        </div>
        <UserImage />
    </div>
</template>