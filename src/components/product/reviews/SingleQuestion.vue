<template>
    <div id="single-question-component">
        <p class="text-22 text-tb-blue font-bold">{{data.title}}</p>
        <p class="text-tb-black mt-1">{{data.content}}</p>
        <div class="flex items-center mt-1">
            <span class="text-tb-primary-dark">{{data.author}}</span>
            <img src="../../../assets/images/thumbup.svg" alt class="ml-2" />
            <img src="../../../assets/images/thumbdown.svg" alt class="ml-2" />
        </div>
    </div>
</template>

<script>
export default {
    name: "SingleQuestion",
    props: ["data"],
};
</script>

<style>
</style>