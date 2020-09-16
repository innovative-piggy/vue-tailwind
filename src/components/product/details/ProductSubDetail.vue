<template>
    <div id="product-sub-detail" class="mt-10">
        <p class="text-tb-blue font-bold text-22">{{title}}</p>
        <div
            v-for="(item, index) in data"
            :key="index"
            class="flex py-3 border-b gap-2 border-tb-border last:border-transparent"
        >
            <div class="w-1/2 xl:w-2/5 text-tb-primary-dark">{{item.name}}</div>
            <div class="w-full">
                <span
                    v-for="(subItem, id) in item.contents"
                    :key="id"
                    class="text-tb-black font-bold"
                >{{id > 0 ? ', ' : ''}}{{subItem}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductSubDetail",
    props: ["data", "title"],
};
</script>

<style>
</style>