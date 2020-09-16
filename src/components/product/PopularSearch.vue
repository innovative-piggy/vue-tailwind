<template>
    <div id="popular-search-component">
        <div class="bg-tb-border px-3 py-10">
            <div class="container mx-auto">
                <p class="text-22 text-tb-black font-bold">Weitere beliebte Suchen</p>
                <div class="flex justify-between gap-0 xl:gap-4 mt-4">
                    <ul class="w-full list-disc list-inside text-tb-blue">
                        <li
                            v-for="(item, index) in data.slice(0, (breakPoint(data)))"
                            :key="index"
                        >{{item}}</li>
                    </ul>
                    <ul class="w-full list-disc list-inside text-tb-blue">
                        <li
                            v-for="(item, index) in data.slice((breakPoint(data)), (breakPoint(data)) * 2 - 1)"
                            :key="index"
                        >{{item}}</li>
                    </ul>
                    <ul class="w-full list-disc list-inside text-tb-blue">
                        <li
                            v-for="(item, index) in data.slice((breakPoint(data) * 2 - 1), (breakPoint(data)) * 3 - 2)"
                            :key="index"
                        >{{item}}</li>
                    </ul>
                    <ul class="w-full list-disc list-inside text-tb-blue">
                        <li
                            v-for="(item, index) in data.slice((breakPoint(data)) * 3 - 2, data.length)"
                            :key="index"
                        >{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PopularSearch",
    props: ["data"],
    methods: {
        breakPoint(array) {
            return (array.length - 1) / 4 + 1;
        },
    },
};
</script>

<style>
</style>