<template>
    <div id="review-bar-component">
        <div class="h-full flex flex-col justify-evenly pr-0 xl:pr-6">
            <div class="flex gap-1 xl:gap-2 items-center">
                <div class="w-6/12 xl:w-2/5 text-tb-primary-dark">sehr gut</div>
                <div class="w-full rounded-full bg-white progress-bar">
                    <div
                        v-bind:style="(data[0] > 0) ? 'width:' + (data[0]/maxRate*100).toFixed(2) + '%' : 'width:10px;'"
                        class="rounded-full bg-tb-green h-full"
                    ></div>
                </div>
                <div class="text-tb-primary-dark">{{(data[0]).toFixed(0)}}</div>
            </div>
            <div class="flex gap-1 xl:gap-2 items-center">
                <div class="w-6/12 xl:w-2/5 text-tb-primary-dark">gut</div>
                <div class="w-full rounded-full bg-white progress-bar">
                    <div
                        v-bind:style="(data[1] > 0) ? 'width:' + (data[1]/maxRate*100).toFixed(2) + '%' : 'width:10px;'"
                        class="rounded-full bg-tb-light-green h-full"
                    ></div>
                </div>
                <div class="text-tb-primary-dark">{{(data[1]).toFixed(0)}}</div>
            </div>
            <div class="flex gap-1 xl:gap-2 items-center">
                <div class="w-6/12 xl:w-2/5 text-tb-primary-dark">befriedigend</div>
                <div class="w-full rounded-full bg-white progress-bar">
                    <div
                        v-bind:style="(data[2] > 0) ? 'width:' + (data[2]/maxRate*100).toFixed(2) + '%' : 'width:10px;'"
                        class="rounded-full bg-tb-yellow h-full"
                    ></div>
                </div>
                <div class="text-tb-primary-dark">{{(data[2]).toFixed(0)}}</div>
            </div>
            <div class="flex gap-1 xl:gap-2 items-center">
                <div class="w-6/12 xl:w-2/5 text-tb-primary-dark">ausreichend</div>
                <div class="w-full rounded-full bg-white progress-bar">
                    <div
                        v-bind:style="(data[3] > 0) ? 'width:' + (data[3]/maxRate*100).toFixed(2) + '%' : 'width:10px;'"
                        class="rounded-full bg-tb-orange h-full"
                    ></div>
                </div>
                <div class="text-tb-primary-dark">{{(data[3]).toFixed(0)}}</div>
            </div>
            <div class="flex gap-1 xl:gap-2 items-center">
                <div class="w-6/12 xl:w-2/5 text-tb-primary-dark">mangelhaft</div>
                <div class="w-full rounded-full bg-white progress-bar">
                    <div
                        v-bind:style="(data[4] > 0) ? 'width:' + (data[4]/maxRate*100).toFixed(2) + '%' : 'width:10px;'"
                        class="rounded-full bg-tb-red h-full"
                    ></div>
                </div>
                <div class="text-tb-primary-dark">{{(data[4]).toFixed(0)}}</div>
            </div>
            <div v-if="data.length > 5" class="flex gap-1 xl:gap-2 items-center">
                <div class="w-6/12 xl:w-2/5 text-tb-primary-dark">keine Note</div>
                <div class="w-full rounded-full bg-white progress-bar">
                    <div
                        v-bind:style="(data[5] > 0) ? 'width:' + (data[5]/maxRate*100).toFixed(2) + '%' : 'width:10px;'"
                        class="rounded-full bg-tb-green h-full"
                    ></div>
                </div>
                <div class="text-tb-primary-dark">{{(data[5]).toFixed(0)}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ReviewBar",
    props: ["data"],
    data() {
        return {
            maxRate: Math.max(this.data),
        };
    },
};
</script>

<style scoped>
.progress-bar {
    height: 10px;
}
</style>