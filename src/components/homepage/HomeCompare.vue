<template>
    <div class="container mx-auto">
        <p class="text-tb-black text-xl font-bold mb-2">Aktuelle Vergleiche</p>
        <div class="compare-content-wrapper flex flex-wrap justify-between items-stretch">
            <div
                v-for="(item, index) in compareData"
                :key="index"
                class="compare-item my-3 relative group"
            >
                <div
                    class="absolute top-0 left-0 h-full w-full rounded group-hover:border transition duration-200 border-0 border-tb-blue"
                ></div>
                <div
                    class="compare-item-card rounded bg-tb-border py-6 flex justify-evenly h-full select-none"
                >
                    <div class="logo-wrapper w-3/12">
                        <img
                            :src="
                                require('../../assets/images/company/' +
                                    item.logo +
                                    '.png')
                            "
                            alt
                            class="mx-auto mt-1"
                        />
                    </div>
                    <div class="compare-desc-wrapper w-7/12">
                        <router-link to="/">
                            <p class="text-tb-black font-bold">{{ item.title }}</p>
                        </router-link>
                        <p class="text-tb-blue mb-2">{{ item.date }} - {{ item.auth }}</p>
                        <p class="text-tb-black leading-5">{{ item.preview }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import compareJson from "../../json/homeCompareData.json";

export default {
    name: "HomeCompare",
    data() {
        return {
            compareData: compareJson,
        };
    },
};
</script>

<style scoped>
.compare-item {
    width: calc(33.33% - 16px);
}
</style>
