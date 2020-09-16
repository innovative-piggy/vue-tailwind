<template>
    <div id="product-pricing-component" class="flex flex-col justify-between">
        <div class="flex gap-2 xl:gap-6 items-stretch justify-between">
            <div class="w-7/12 xl:w-2/3 flex flex-col justify-between">
                <div class="flex items-center">
                    <span class="text-xs text-tb-primary-dark">From:</span>
                    <span
                        class="text-22 text-tb-dark-red font-bold ml-3"
                    >{{(productData["priceRange"][0]).toLocaleString()}} - {{(productData["priceRange"][1]).toLocaleString()}}</span>
                </div>
                <div class="flex items-center">
                    <span class="text-xs text-tb-primary-dark">Share to:</span>
                    <span class="facebook-color ml-3"></span>
                    <span class="twitter-color ml-3"></span>
                    <span class="instagram-color ml-3"></span>
                    <span class="pinterest-color ml-3"></span>
                </div>
                <div class="flex items-stretch bg-tb-primary text-center">
                    <div
                        v-bind:class="classBg(productData.class)"
                        class="text-white w-1/7 rounded flex justify-center items-center py-1"
                    >{{productData.class}}</div>
                    <div
                        class="test-field-wrapper text-tb-primary-dark text-xs flex justify-center items-center py-1"
                    >
                        <p
                            class="border-r border-white w-full"
                        >{{productData.percentage}}/100 ({{productData.test}} Tests)</p>
                    </div>
                    <div
                        class="text-xs text-tb-primary-dark w-1/4 flex justify-center items-center py-1"
                    >{{productData.offer}} offers</div>
                    <div
                        class="text-xs text-white bg-tb-blue rounded w-1/4 flex justify-center items-center py-1"
                    >Sehr gut</div>
                </div>
            </div>
            <div class="5/12 xl:w-1/3 flex flex-col items-center gap-2">
                <div class="text-tb-blue underline flex items-center w-full justify-center">
                    <img src="../../assets/images/subscribe.svg" alt />
                    <span class="vue">Subscribe to this Product</span>
                </div>
                <div
                    class="flex gap-4 xl:gap-6 justify-center items-center rounded bg-tb-primary pt-1 pb-3 w-full"
                >
                    <p
                        class="text-tb-orange text-4xl text-center mt-2 font-bold"
                    >{{(productData.rate).toFixed(1)}}</p>
                    <div class="flex flex-col justify-start items-center">
                        <StarRating
                            v-bind:rating="productData.rate"
                            v-bind:read-only="true"
                            v-bind:show-rating="false"
                            v-bind:star-size="13"
                            active-color="#FF7000"
                            v-bind:padding="1"
                            v-bind:inline="true"
                        ></StarRating>
                        <p @click="openFeedbackLightbox = true" class="text-xs text-tb-primary-dark underline cursor-pointer">Write a review</p>
                        <transition name="fade"><LeaveFeedbackLightbox v-if="openFeedbackLightbox" :data="productData.name" @close="openFeedbackLightbox = false" /></transition>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4 rounded border border-tb-primary-dark py-6 px-2 xl:px-6">
            <div class="flex justify-between items-center">
                <p class="text-tb-black font-bold">Popular offers</p>
                <p v-on:click="$emit('openoffers')" class="text-tb-primary-dark underline cursor-pointer">More offers</p>
            </div>
            <div class="mt-1 flex flex-col">
                <div
                    v-for="(item, index) in productData['popularOffers']"
                    :key="index"
                    class="flex justify-between items-center border-b border-tb-border last:border-transparent mt-3 pb-3"
                >
                    <div class="w-2/5 flex items-center">
                        <div>
                            <p
                                class="text-22 text-tb-blue font-bold"
                            >{{(item.price).toLocaleString()}} €</p>
                            <p
                                class="text-xs text-tb-primary-dark"
                            >{{item.shipping > 0 ? 'Shipping: ' + item.shipping + ' €' : 'Free Shipping'}}</p>
                        </div>
                        <div
                            v-if="item.badge"
                            v-bind:class="'bg-tb-' + item.badge.color"
                            class="company-badge rounded-full text-white text-xs px-2 py-0 ml-3 xl:ml-4"
                        >{{item.badge.text}}</div>
                    </div>
                    <div class="w-1/6 xl:w-1/5">
                        <img
                            :src="require('../../assets/images/company/' + item.logo + '.jpg')"
                            alt
                            class="max-w-full float-right"
                        />
                    </div>
                    <div
                        class="go-to-store rounded-full bg-tb-blue text-lg text-white px-5 hover:bg-tb-blue-dark transition duration-75 cursor-pointer"
                    >Go to the store</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from "vue-star-rating";
import LeaveFeedbackLightbox from './LeaveFeedbackLightbox'

export default {
    name: "ProductPricing",
    props: ["productData"],
    data() {
        return {
            openFeedbackLightbox: false
        }
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
    },
    components: {
        StarRating,
        LeaveFeedbackLightbox
    },
};
</script>

<style scoped>
.test-field-wrapper {
    width: 35.7142857%;
}
.company-badge {
    margin-top: 7px;
}
.go-to-store {
    padding-top: 11px;
    padding-bottom: 11px;
}
.fade-enter-active {
    transition: 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>