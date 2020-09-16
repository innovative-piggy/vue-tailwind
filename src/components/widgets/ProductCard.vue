<template>
    <router-link :to="'/product/' + routeData[0] + '/' + routeData[1] + '/' + item.name">
        <div
            @mouseenter="hoverStart"
            @mouseleave="hoverEnd"
            class="p-4 flex flex-col justify-between items-center rounded"
        >
            <div class="thumbnail-wrapper px-2 pb-3 align-middle">
                <img
                    :src="require('../../assets/images/product/' + item.thumbnail + '.png')"
                    class="mx-auto h-32 xl:h-40"
                    alt
                />
            </div>
            <div class="detail-wrapper h-auto w-full">
                <div
                    class="badge-wrapper bg-tb-primary flex items-stretch justify-between flex-1 mb-3"
                >
                    <div
                        v-bind:class="classBg(item.class)"
                        class="class-wrapper rounded text-white font-bold w-1/5 text-center py-1"
                    >{{item.class}}</div>
                    <div
                        class="test-wrapper text-center text-xs flex items-center text-tb-primary-dark"
                    >{{item.percentage}}/100 ({{item.tests}} Tests)</div>
                    <div
                        class="checkout-wrapper rounded flex justify-center items-center text-white text-xs w-1/3 bg-tb-blue"
                    >Sehr gut</div>
                </div>
                <div class="font-bold text-tb-black mb-1">{{item.name}}</div>
                <ul class="text-tb-primary-dark list-disc list-inside mb-1">
                    <li>Farbe: {{item.color}}</li>
                    <li>{{item.size}} cm, {{Math.floor((item.size)/2.54)}} Zoll</li>
                    <li>{{(item.width).toLocaleString()}} x {{(item.height).toLocaleString()}} Pixel</li>
                    <li>
                        <span
                            v-for="(tag, tagId) in item.tags"
                            :key="tagId"
                            class="uppercase"
                        >{{tagId > 0 ? ', ' : ''}}{{tag}}</span>
                    </li>
                </ul>
                <div class="w-full flex justify-between items-center">
                    <div class="price-wrapper">
                        <span class="text-tb-black">ab</span>
                        <span
                            class="price-text text-22 text-tb-blue font-bold pl-1"
                        >{{(item.price).toLocaleString()}} €</span>
                    </div>
                    <div class="rate-wrapper">
                        <StarRating
                            v-bind:rating="item.rate"
                            v-bind:read-only="true"
                            v-bind:show-rating="false"
                            v-bind:star-size="12"
                            active-color="#FF7000"
                            v-bind:padding="1"
                            v-bind:inline="true"
                        ></StarRating>
                        <span class="text-xs text-tb-primary-dark ml-1">({{ item.rateCount }})</span>
                    </div>
                </div>
                <div class="text-xs text-tb-primary-dark -mt-1">{{item.events}} Angebote</div>
            </div>
        </div>
    </router-link>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
    name: "ProductCard",
    data() {
        return {
            routeData: [
                this.$route.params.firstId,
                this.$route.params.secondId,
            ],
        };
    },
    methods: {
        classBg(clas) {
            let firstLetter = clas;
            switch (firstLetter[0]) {
                case "A":
                    return "bg-tb-green";
                case "B":
                    return "bg-tb-yellow";
                case "C":
                    return "bg-tb-danger";

                default:
                    return "";
            }
        },
        hoverStart() {
            this.$emit("hoverstart");
        },
        hoverEnd() {
            this.$emit("hoverend");
        },
    },
    components: {
        StarRating,
    },
    props: ["item"],
};
</script>

<style>
</style>