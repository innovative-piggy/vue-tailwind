<template>
	<div
		ref="searchRef"
		class="search-data-wrapper w-full border border-tb-semi-dark rounded overflow-visible bg-white tb-shadow-2 px-3 py-4 flex"
	>
		<div class="search-products-wrapper w-1/2">
			<div class="search-heading-wrapper p-3 pt-4 pb-2">
				<span class="search-heading text-tb-blue font-bold">Products</span>
			</div>
			<div class="search-products flex flex-col px-3">
				<router-link to="/">
					<div
						v-for="(product, index) in searchResult.products"
						:key="index"
						class="search-product flex items-center py-2 border-b last:border-b-0 last:pb-0 transition duration-200 relative group"
					>
						<div class="product-thumbnail-wrapper z-10">
							<img
								v-bind:src="
                                require('../../assets/images/thumbnail/' +
                                    product.thumbnail +
                                    '.svg')
                            "
								alt
								class="product-thumbnail h-16"
							/>
						</div>
						<div class="product-detail-wrapper ml-5 z-10">
							<p class="text-tb-black mb-0 leading-5">{{ product.name }}</p>
							<span class="product-additional-info text-xs">
								<span class="text-tb-primary-dark">
									{{ product.val1 }}/{{ product.val2 }} ({{
									product.test
									}}
									test) {{ product.val3 }}
									<span
										class="text-tb-black"
									>from</span>
									<span
										class="text-tb-blue"
									>{{' ' + parseFloat(product.price).toFixed(2).toLocaleString() }} &euro;</span>
								</span>
							</span>
						</div>
						<div
							class="hover-item absolute group-hover:bg-tb-primary transition duration-100 group-hover:border-tb-blue border-transparent z-0 rounded-tr rounded-br"
						></div>
					</div>
				</router-link>
			</div>
		</div>
		<div class="search-more-wrapper w-1/2 rounded bg-tb-primary py-4 px-5">
			<div class="search-heading-wrapper">
				<span class="search-heading text-tb-blue font-bold">Categories</span>
			</div>
			<div class="search-category-wrapper">
				<p
					v-for="(category, index) in searchResult.categories"
					:key="index"
					class="search-category-item text-tb-black mt-3 leading-5"
				>
					<router-link to="/">{{ category }}</router-link>
				</p>
			</div>
			<div class="search-heading-wrapper mt-4">
				<span class="search-heading text-tb-blue font-bold">Manufacturer</span>
			</div>
			<div class="search-category-wrapper">
				<p
					v-for="(company, index) in searchResult.manufacturer"
					:key="index"
					class="search-category-item text-tb-black mt-3 leading-5"
				>
					<router-link to="/">{{ company }}</router-link>
				</p>
			</div>
			<div class="search-heading-wrapper mt-4">
				<span class="search-heading text-tb-blue font-bold">Popular searches</span>
			</div>
			<div class="search-category-wrapper">
				<p
					v-for="(suggest, index) in searchResult.popular"
					:key="index"
					class="search-category-item text-tb-black mt-3 leading-5"
				>
					<router-link to="/">{{ suggest }}</router-link>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SearchMenu",
		methods: {
			closeSearch(e) {
				if (
					!this.$refs.searchRef.contains(e.target) &&
					!this.mainRef.contains(e.target)
				) {
					this.activeOpen = false;
				}
			}
		},
		props: ["searchKey", "searchResult", "focusStat", "mainRef"],
		computed: {
			activeOpen: {
				get() {
					return this.focusStat;
				},
				set() {
					this.$emit("close");
				}
			}
		},
		beforeMount() {
			window.addEventListener("click", this.closeSearch);
		},
		beforeDestroy() {
			window.removeEventListener("click", this.closeSearch);
		}
	};
</script>

<style scoped>
	.hover-item {
		left: -24.5px;
		top: -1px;
		width: calc(100% + 28.5px);
		height: calc(100% + 2px);
		border-left-width: 6px;
	}
</style>
