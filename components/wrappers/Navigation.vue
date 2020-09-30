<template>
    <div class="w-full h-full py-2 shadow-md">
        <Content>
            <template v-slot:content>
                <div class="flex items-center justify-between">
                    <slot name="widget-1"></slot>
                    <slot name="widget-2"></slot>
                    <slot name="widget-3"></slot>
                </div>
            </template>
        </Content>
    </div>
</template>