<template>
    <div id="description-component">
        <div class="flex gap-2 xl:gap-6">
            <div class="w-full">
                <p
                    v-for="(paragraph, index) in descData.slice(0,breakPoint)"
                    :key="index"
                    class="text-tb-black"
                >
                    {{paragraph}}
                    <br />
                    <br />
                </p>
            </div>
            <div class="w-full">
                <p
                    v-for="(paragraph, index) in descData.slice(breakPoint, descData.length)"
                    :key="index"
                    class="text-tb-black"
                >
                    {{paragraph}}
                    <br />
                    <br />
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Description",
    props: ["descData"],
    data() {
        return {
            breakPoint: (this.descData.length + 1) / 2,
        };
    },
};
</script>

<style>
</style>