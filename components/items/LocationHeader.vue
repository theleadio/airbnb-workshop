<template>
    <Content>
        <template v-slot:content>
            <div class="flex flex-col">
                <div class="py-6 text-xl md:text-3xl tracking-tight font-light">
                    <slot name="name"></slot>
                </div>
                <div class="text-md md:text-lg tracking-tight font-light underline">
                    <slot name="location"></slot>
                </div>
            </div>
        </template>
    </Content>
</template>