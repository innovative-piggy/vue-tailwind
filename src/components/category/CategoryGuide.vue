<template>
    <div class="bg-tb-border w-full px-3 py-12">
        <div class="container mx-auto">
            <div class="flex justify-between">
                <div
                    class="text-tb-black section-navigation-wrapper rounded bg-white py-4 flex flex-col"
                >
                    <div
                        v-for="(item, index) in guideData.content"
                        @click="activeSection=index"
                        v-bind:class="(activeSection===index)?'bg-tb-blue text-white': ''"
                        :key="index"
                        class="section-btn pl-6 pr-4 py-3 cursor-pointer"
                    >{{item.title}}</div>
                </div>
                <div class="section-content-wrapper w-3/4 px-2">
                    <p class="section-title text-22 text-tb-black font-bold">{{guideData.title}}</p>
                    <div class="section-content mt-3">
                        <div
                            class="text-tb-blue font-bold"
                        >{{guideData['content'][activeSection]['title']}}</div>
                        <div
                            v-for="(textItem, textId) in guideData['content'][activeSection]['text']"
                            :key="textId"
                            class="section-content-text text-tb-black my-2 mb-5"
                        >{{textItem}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import guideJson from "../../json/categoryGuide.json";

export default {
    name: "CategoryGuide",
    data() {
        return {
            guideData: guideJson,
            activeSection: 0,
        };
    },
};
</script>

<style scoped>
.section-navigation-wrapper {
    width: 24%;
}
</style>