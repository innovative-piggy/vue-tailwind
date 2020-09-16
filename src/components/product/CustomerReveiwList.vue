<template>
    <div id="customer-review-list">
        <div
            v-for="(item, index) in data"
            :key="index"
            class="py-12 border-b border-tb-border flex justify-between items-stretch last:border-transparent last:pb-4"
        >
            <div class="rounded-full bg-tb-green badge-circle relative">
                <div class="text-lg text-white absolute font-bold">{{item.percentage}}</div>
                <div class="text-xs text-white absolute">{{item.expression}}</div>
            </div>
            <div class="w-32 xl:w-40 relative">
                <img
                    :src="require('../../assets/images/company/' + item.logo + '.jpg')"
                    alt
                    class="absolute company-logo"
                />
            </div>
            <div class="w-2/3">
                <p class="font-bold">{{item.name}}</p>
                <div class="flex items-center text-xs text-tb-primary-dark mt-1">
                    <span class="flex items-center">
                        <img src="../../assets/images/calender.svg" alt />
                        <span class="ml-1">{{item.date}}</span>
                    </span>
                    <router-link
                        v-if="item.link"
                        v-bind:to="item.link.url"
                        class="flex items-center ml-3"
                    >
                        <img src="../../assets/images/link.svg" alt />
                        <span class="ml-1">{{item.link.text}}</span>
                    </router-link>
                </div>
                <p class="mt-3 text-tb-black leading-snug">
                    &#8220;
                    {{item.text}}
                    &#8221;
                </p>
                <div v-if="item.pros" class="flex justify-between mt-4">
                    <div class="w-1/2 xl:w-5/12">
                        <div
                            v-for="(thumb, id) in (item.pros).slice(0, breakPoint(item.pros))"
                            :key="id"
                            class="flex items-start"
                        >
                            <img src="../../assets/images/thumbup.svg" class="mt-1" alt />
                            <span class="ml-3 text-tb-primary-dark">{{thumb}}</span>
                        </div>
                    </div>
                    <div class="w-1/2 xl:w-5/12">
                        <div
                            v-for="(thumb, id) in (item.pros).slice(breakPoint(item.pros), (item.pros).length)"
                            :key="id"
                            class="flex items-start"
                        >
                            <img src="../../assets/images/thumbup.svg" class="mt-1" alt />
                            <span class="ml-3 text-tb-primary-dark">{{thumb}}</span>
                        </div>
                    </div>
                </div>
                <div v-if="item.cons" class="flex justify-between mt-4">
                    <div class="w-1/2 xl:w-5/12">
                        <div
                            v-for="(thumb, id) in (item.cons).slice(0, breakPoint(item.cons))"
                            :key="id"
                            class="flex items-start"
                        >
                            <img src="../../assets/images/thumbdown.svg" class="mt-1" alt />
                            <span class="ml-3 text-tb-primary-dark">{{thumb}}</span>
                        </div>
                    </div>
                    <div class="w-1/2 xl:w-5/12">
                        <div
                            v-for="(thumb, id) in (item.cons).slice(breakPoint(item.cons), (item.cons).length)"
                            :key="id"
                            class="flex items-start"
                        >
                            <img src="../../assets/images/thumbdown.svg" class="mt-1" alt />
                            <span class="ml-3 text-tb-primary-dark">{{thumb}}</span>
                        </div>
                    </div>
                </div>
                <div v-if="item.marks" class="flex justify-between mt-4">
                    <ul class="w-1/2 xl:w-5/12 list-disc list-inside text-tb-primary-dark pl-2">
                        <li
                            v-for="(thumb, id) in (item.marks).slice(0, breakPoint(item.marks))"
                            :key="id"
                        >{{thumb.title}}: {{thumb.score}} von {{thumb.max}} Punkte</li>
                    </ul>
                    <ul class="w-1/2 xl:w-5/12 list-disc list-inside text-tb-primary-dark pl-2">
                        <li
                            v-for="(thumb, id) in (item.marks).slice(breakPoint(item.marks) ,(item.marks).length)"
                            :key="id"
                        >{{thumb.title}}: {{thumb.score}} von {{thumb.max}} Punkte</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CustomerReviewList",
    methods: {
        breakPoint(array) {
            return (array.length + 1) / 2;
        },
    },
    props: ["data"],
};
</script>

<style scoped>
.badge-circle {
    height: 90px;
    width: 90px;
}
.badge-circle div {
    left: 50%;
    transform: translateX(-50%);
}
.badge-circle .text-lg {
    top: 25%;
}
.badge-circle .text-xs {
    top: 52%;
}
.company-logo {
    top: 45px;
    left: 0;
    max-width: 100%;
    transform: translateY(-50%);
}
</style>