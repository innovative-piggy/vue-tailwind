<template>
    <div id="consumer-magazine-component">
        <p class="text-22 font-bold text-tb-black">LG OLED65CX9LA Test aus Verbrauchermagazinen</p>
        <div class="mt-3 rounded border border-tb-primary-dark py-6 px-3 xl:p-8">
            <div
                class="flex justify-between items-stretch rounded bg-tb-primary gap-2 xl:gap-6 py-4 px-2 xl:px-6"
            >
                <ReviewBar class="w-full" :data="data.customerReviews" />
                <div class="w-full rounded bg-tb-white-green py-6 px-3 xl:px-5">
                    <div
                        v-for="(item, index) in data.customerPros"
                        :key="index"
                        class="flex items-start"
                    >
                        <img src="../../assets/images/thumbup.svg" class="mt-1" alt />
                        <span class="text-tb-black ml-3">{{item}}</span>
                    </div>
                </div>
                <div class="w-full rounded bg-tb-white-pink py-6 px-3 xl:px-5">
                    <div
                        v-for="(item, index) in data.customerCons"
                        :key="index"
                        class="flex items-start"
                    >
                        <img src="../../assets/images/thumbdown.svg" class="mt-1" alt />
                        <span class="text-tb-black ml-3">{{item}}</span>
                    </div>
                </div>
            </div>
            <CustomerReviewList :data="data.customerFeedback" />
        </div>
    </div>
</template>

<script>
import ReviewBar from "./ReviewBar";
import CustomerReviewList from "./CustomerReveiwList";

export default {
    name: "ConsumerMagazine",
    props: ["data"],
    components: {
        ReviewBar,
        CustomerReviewList,
    },
};
</script>

<style>
</style>