<template>
    <div id="press-card-component" class="relative">
        <div
            class="absolute h-full w-full top-0 left-0 hover:border border-tb-blue hover:tb-shadow-3 rounded transition duration-100"
        ></div>
        <div class="rounded bg-tb-primary overflow-hidden">
            <div
                :style="'background-image:url(' + require('../../assets/images/press/' + data.thumbnail + '.jpg') + ');'"
                class="img-wrapper bg-cover h-48 xl:h-56"
            ></div>
            <div class="p-2 xl:p-6 mt-3">
                <p class="text-22 font-bold text-tb-black">{{data.title}}</p>
                <p class="text-tb-black leading-snug mt-3">{{data.text}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PressCard",
    props: ["data"],
};
</script>