<template>
    <div
        ref="categoryRef"
        class="category-data-wrapper w-full border border-tb-semi-dark rounded overflow-hidden bg-white tb-shadow-2 flex flex-wrap"
    >
        <div class="category-level-1-wrapper w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <div class="category-level-1 w-full px-3 py-5 flex flex-col justify-between">
                <div
                    v-for="(item, index) in categoryData"
                    :key="index"
                    @mouseover="toggleCategory(index)"
                    class="category-level-1-item flex items-center my-1 mt-2 cursor-pointer"
                >
                    <span class="category-item-icon w-12 text-center text-2xl leading-5">
                        <span :class="'icon-' + item.icon"></span>
                        <!-- <img
              v-bind:src="
                require('../../assets/images/category/' + item.icon + '.svg')
              "
              alt=""
              class="mx-auto"
                        />-->
                    </span>
                    <span
                        v-bind:class="
                            activeCategory === index
                                ? 'text-tb-blue'
                                : 'text-tb-black'
                        "
                        class="category-item-name text-base ml-1 font-bold"
                    >{{ item.name }}</span>
                </div>
            </div>
        </div>
        <div class="category-level-2-wrapper w-full sm:w-1/2 lg:w-2/3 xl:w-3/4 bg-tb-primary">
            <div class="category-level-2 w-full py-5 px-3 flex flex-wrap justify-between">
                <div
                    v-for="(item, index) in categoryData[activeCategory][
                        'data'
                    ]"
                    :key="index"
                    class="category-level-3-wrapper w-1/3 xl:w-1/4 mb-4"
                >
                    <div class="category-level-3 flex flex-col">
                        <div class="category-level-3-item my-1 mt-2">
                            <span class="text-tb-blue">{{ item.name }}</span>
                        </div>
                        <div
                            v-for="(subItem, id) in item['data']"
                            :key="id"
                            class="category-level-3-item my-1 mt-2 cursor-pointer"
                        >
                            <router-link
                                @click.native="$emit('close')"
                                :to="'/category/' + categoryData[activeCategory]['name'] +'/'+ subItem"
                            >{{ subItem }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import categoryList from "../../json/categoryList.json";

export default {
    // name: 'CategoryMenu',
    data() {
        return {
            activeCategory: 0,
            categoryData: categoryList,
        };
    },
    methods: {
        toggleCategory: function (index) {
            this.activeCategory = index;
        },
        closeCategory(e) {
            if (
                !this.$refs.categoryRef.contains(e.target) &&
                !this.mainRef.contains(e.target)
            ) {
                this.activeOpen = false;
            }
        },
    },
    props: ["open", "mainRef"],
    computed: {
        activeOpen: {
            get() {
                return this.open;
            },
            set() {
                this.$emit("close");
            },
        },
    },
    beforeMount() {
        window.addEventListener("click", this.closeCategory);
    },
    beforeDestroy() {
        window.removeEventListener("click", this.closeCategory);
    },
};
</script>

<style></style>
