<template>
    <div id="product-detail-component">
        <div class="flex justify-between gap-2 xl:gap-6">
            <div class="w-full">
                <ProductSubDetail :data="data.general" :title="'General data'" />
                <ProductSubDetail :data="data.function" :title="'Funktionen'" />
                <ProductSubDetail :data="data.weight" :title="'Maße & Gewicht'" />
            </div>
            <div class="w-full">
                <ProductSubDetail :data="data.screen" :title="'Bildschirm'" />
                <ProductSubDetail :data="data.audioVideo" :title="'Audio & Video'" />
                <ProductSubDetail :data="data.energy" :title="'Energiemerkmale'" />
                <ProductSubDetail :data="data.connect" :title="'Konnektivität'" />
            </div>
        </div>
    </div>
</template>

<script>
import jsonData from "../../../json/productDetail.json";
import ProductSubDetail from "./ProductSubDetail";

export default {
    name: "ProductDetail",
    data() {
        return {
            data: jsonData,
        };
    },
    components: {
        ProductSubDetail,
    },
};
</script>

<style>
</style>