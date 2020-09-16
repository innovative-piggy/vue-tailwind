<template>
    <div id="question-sidebar-component">
        <p class="text-22 text-tb-black font-bold">{{data.total}} question about {{productName}}</p>
        <p class="text-tb-primary-dark mt-2">
            Um eine Frage stellen zu können, musst du dich zunächst
            <span
                class="underline"
            >einloggen.</span>
        </p>
        <div class="questions-wrapper my-2">
            <SingleQuestion v-for="(item, index) in data.result" :key="index" :data="item" />
        </div>
        <p class="text-22 text-tb-black font-bold mt-12">
            Die neuesten Fragen in der Kategorie
            Fernseher:
        </p>
        <div class="rounded bg-tb-primary p-3 xl:p-6 mt-3">
            <div
                v-for="(item, index) in categoryQuestions"
                :key="index"
                class="category-question-wrapper py-4 border-b border-white last:pb-0 last:border-transparent first:pt-0"
            >
                <p class="text-tb-blue">{{item.title}}</p>
                <p class="text-tb-primary-dark mt-1">{{item.product}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import SingleQuestion from "./SingleQuestion";
export default {
    name: "QuestionSidebar",
    props: ["data", "productName", "categoryQuestions"],
    components: {
        SingleQuestion,
    },
};
</script>

<style>
</style>