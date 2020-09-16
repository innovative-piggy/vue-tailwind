<template>
    <div id="account-component">
        <div class="px-3 mb-12 mt-8">
            <div class="container mx-auto">
                <div class="flex justify-between items-end border-b border-tb-border pb-1">
                    <p class="text-tb-black text-4xl">
                        <b>Welcome</b>
                        Lek Sapanlay
                    </p>
                    <div class="tab-wrapper text-tb-primary-dark -mb-px">
                        <span
                            @click="activeTab=0"
                            v-bind:class="{'border-b-3 text-tb-blue': (activeTab===0)}"
                            class="text-22 font-bold mx-5 xl:mx-8 border-tb-blue pb-1 px-4 cursor-pointer"
                        >My Account</span>
                        <span
                            @click="activeTab=1"
                            v-bind:class="{'border-b-3 text-tb-blue': (activeTab===1)}"
                            class="text-22 font-bold mx-5 xl:mx-8 border-tb-blue pb-1 px-4 cursor-pointer"
                        >My Reviews</span>
                        <span
                            @click="activeTab=2"
                            v-bind:class="{'border-b-3 text-tb-blue': (activeTab===2)}"
                            class="text-22 font-bold mx-5 xl:mx-8 border-tb-blue pb-1 px-4 cursor-pointer"
                        >Subscription</span>
                    </div>
                </div>
                <div class="tab-content-wrapper"></div>
                <div v-if="activeTab===0" class="flex gap-4 xl:gap-8 mt-8">
                    <MainCard class="w-2/3" />
                    <SocialCard class="w-1/3" />
                </div>
                <div v-if="activeTab===1">
                    <MyReview v-for="(item, index) in reviewData" :key="index" :data="item" />
                </div>
                <div v-if="activeTab===2" class="mt-8">
                    <NewsletterBanner />
                    <p class="text-22 font-bold text-tb-black mt-8">Category Subscriptions</p>
                    <div class="flex gap-4 xl:gap-8 flex-1 flex-grow mt-8">
                        <CategorySubscriptionCard
                            v-for="(item, index) in subscriptionData.category"
                            :key="index"
                            :data="item"
                            class="h-32 break-every"
                        />
                    </div>
                    <p class="text-22 font-bold text-tb-black mt-8">Products Subscriptions</p>
                    <div class="flex gap-4 xl:gap-8 flex-wrap mt-8">
                        <ProductSubscriptionCard
                            v-for="(item, index) in subscriptionData.product"
                            :key="index"
                            :data="item"
                            class="h-32 break-every"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainCard from "../components/account/MainCard";
import SocialCard from "../components/account/SocialCard";
import MyReview from "../components/account/MyReview";
import NewsletterBanner from "../components/account/NewsletterBanner";
import CategorySubscriptionCard from "../components/account/CategorySubscriptionCard";
import ProductSubscriptionCard from "../components/account/ProductSubscriptionCard";

import accountReviewsJson from "../json/accountReviews.json";
import subscriptionDataJson from "../json/subscriptionData.json";

export default {
    name: "Account",
    data() {
        return {
            activeTab:
                this.$route.params.tabId === "myaccount"
                    ? 0
                    : this.$route.params.tabId === "review"
                    ? 1
                    : 2,
            reviewData: accountReviewsJson,
            subscriptionData: subscriptionDataJson,
        };
    },
    watch: {
        "$route.params": {
            handler(params) {
                this.activeTab =
                    params.tabId === "myaccount"
                        ? 0
                        : params.tabId === "review"
                        ? 1
                        : 2;
            },
            immediate: true,
        },
    },
    components: {
        MainCard,
        SocialCard,
        MyReview,
        NewsletterBanner,
        CategorySubscriptionCard,
        ProductSubscriptionCard,
    },
};
</script>

<style scoped>
.break-every {
    width: calc(33.3333% - 21.4px);
}
@media (max-width: 1279px) {
    .break-every {
        width: calc(33.3333% - 10.7px);
    }
}
</style>