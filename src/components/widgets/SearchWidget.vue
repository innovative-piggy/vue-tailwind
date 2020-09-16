<template>
    <div
        class="search-widget bg-white flex rounded-full tb-shadow-filter relative py-2 pl-6 xl:py-3 xl:pl-8"
    >
        <input
            v-model="searchKey"
            ref="searchInputField"
            @focus="inputFocus = true; showSearchMenu = true"
            type="text"
            placeholder="Search for.."
            class="w-full outline-none placeholder-tb-primary-dark bg-transparent"
        />
        <div
            class="search-widget-btn bg-tb-blue rounded-full absolute top-center transform -translate-y-1/2 right-0 object-center cursor-pointer transition duration-75 hover:bg-tb-blue-dark"
        >
            <img
                src="../../assets/images/search.svg"
                alt
                class="search-widget-icon absolute top-center transform -translate-y-1/2 right-0 translate-x-1/2"
            />
        </div>
        <transition name="fade">
            <SearchMenu
                v-if="showSearchResult"
                :focus-stat="inputFocus"
                :search-key="searchKey"
                :search-result="searchResult"
                @close="showSearchMenu = false"
                :mainRef="$refs.searchInputField"
                class="searchmenu absolute top-0 left-0 transform translate-y-16"
            />
        </transition>
    </div>
</template>

<script>
import SearchMenu from "../navication/SearchMenu";
import searchResults from "../../json/searchResult.json";

export default {
    name: "SearchWidget",
    data() {
        return {
            searchKey: "",
            showSearchMenu: false,
            inputFocus: false,
            searchResult: searchResults,
        };
    },
    methods: {},
    computed: {
        showSearchResult() {
            return this.showSearchMenu && this.inputFocus;
        },
    },
    components: {
        SearchMenu,
    },
};
</script>

<style scoped>
.fade-enter-active {
    transition: 0.2s;
    transition-delay: 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
