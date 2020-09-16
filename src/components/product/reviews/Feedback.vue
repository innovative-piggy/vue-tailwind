<template>
    <div id="feedback">
        <div class="pt-4 pb-5 border-b border-tb-border">
            <StarRating
                v-bind:rating="data.rating"
                v-bind:read-only="true"
                v-bind:show-rating="false"
                v-bind:star-size="15"
                active-color="#FF7000"
                v-bind:padding="1"
                v-bind:increment="0.1"
            ></StarRating>
            <p class="font-bold text-tb-black">{{data.title}}</p>
            <p class="text-xs text-tb-primary-dark flex items-center mt-1">
                <span class="flex items-center">
                    <img src="../../../assets/images/user.svg" alt />
                    <span class="ml-1 mt-px">{{data.client}}</span>
                </span>
                <span class="flex items-center ml-3">
                    <img src="../../../assets/images/calender.svg" alt />
                    <span
                        class="ml-1 mt-px"
                    >{{(newDate.toLocaleString("default", {month: "short"}))}} {{newDate.getFullYear()}}</span>
                </span>
            </p>
            <p
                v-bind:class="{'text-ellipsis': !showFull}"
                class="text-tb-black mt-2"
            >{{data.feedback}}</p>
            <p
                @click="showFull = !showFull"
                class="text-tb-primary-dark text-xs mt-1 cursor-pointer"
            >
                Rezension auf
                <span class="underline">Otto zu</span> Ende lesen.
            </p>
        </div>
    </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
    name: "Feedback",
    props: ["data"],
    data() {
        return {
            newDate: new Date(this.data.date),
            showFull: false,
        };
    },
    components: {
        StarRating,
    },
};
</script>

<style scoped>
.text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>