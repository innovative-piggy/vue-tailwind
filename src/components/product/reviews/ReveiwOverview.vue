<template>
    <div id="review-overview-component">
        <div class="rounded flex items-stretch gap-2 xl:gap-6 bg-tb-primary p-3 xl:p-6">
            <div class="rounded bg-white flex flex-col items-center justify-center w-1/5 py-6">
                <p
                    class="font-bold review-text-bg text-tb-orange leading-none"
                >{{data.averageRating}}</p>
                <StarRating
                    v-bind:rating="data.averageRating"
                    v-bind:read-only="true"
                    v-bind:show-rating="false"
                    v-bind:star-size="19"
                    active-color="#FF7000"
                    v-bind:padding="1"
                    v-bind:increment="0.1"
                ></StarRating>
            </div>
            <div class="w-5/12">
                <ReviewBarSm :data="data.countPerRating" />
            </div>
            <div>
                <p>
                    <span class="font-bold text-tb-blue">{{data.opinion.total}}</span>
                    <span class="ml-1 text-tb-primary-dark">Meinungen</span>
                </p>
                <p v-for="(item, index) in data.opinion.from" :key="index">
                    <span class="text-tb-primary-dark">davon</span>
                    <span class="font-bold text-tb-blue ml-1">{{item.count}}</span>
                    <span class="text-tb-primary-dark ml-1">Rezensionen von</span>
                    <span class="text-tb-primary-dark ml-1 underline">{{item.company}}</span>
                </p>
                <p>
                    <span class="text-tb-primary-dark">Stand:</span>
                    <span class="text-tb-blue font-bold ml-1">{{data.opinion.date}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from "vue-star-rating";
import ReviewBarSm from "./ReviewBarSm";

export default {
    name: "ReviewOverview",
    props: ["data"],
    components: {
        StarRating,
        ReviewBarSm,
    },
};
</script>

<style scoped>
.review-text-bg {
    font-size: 56px;
}
</style>