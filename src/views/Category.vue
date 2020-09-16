<template>
	<div id="Category">
		<div class="category-page px-3 pt-2 mb-12">
			<div class="container mx-auto">
				<Breadcrumb :link-array="linkData" />
				<div class="products-navigation-wrapper mt-6">
					<div class="products-navigation-header-wrapper flex justify-between items-center mb-4">
						<div class="products-header-left-wrapper">
							<p
								class="category-product-label text-22 text-tb-black font-bold"
							>{{ linkData[1].label }} Test</p>
							<p
								class="text-xs text-tb-primary-dark"
							>({{paginationData.from}} - {{paginationData.to}} von {{(paginationData.totalProducts).toLocaleString()}})</p>
						</div>
						<div class="products-header-right-wrapper flex items-center">
							<div class="flex items-center cursor-pointer">
								<img src="../assets/images/subscribe.svg" alt />
								<span class="text-tb-blue ml-px underline">Subscribe to this Category</span>
							</div>
							<div
								@mouseover="sortDropdownShow = true"
								@mouseleave="sortDropdownShow = false"
								class="rounded-full text-tb-primary-dark border cursor-pointer border-tb-border ml-5 pl-5 pr-6 py-3 flex justify-between items-center w-48 relative"
							>
								<span>{{sortMethods[activeSortKey]}}</span>
								<img src="../assets/images/accordion-arrow.svg" class="transform rotate-90 opacity-50" alt />
								<div
									@mouseover="sortDropdownShow = true"
									@mouseleave="sortDropdownShow = false"
									v-if="sortDropdownShow"
									class="dropdown-wrapper absolute w-48 left-0 rounded tb-shadow-4 bg-white"
								>
									<div
										@click="changeSortMethod(index)"
										v-for="(item, index) in sortMethods"
										:key="index"
										class="px-4 py-2 border-b border-tb-border text-tb-primary-dark hover:text-tb-blue last:border-transparent"
									>{{item}}</div>
								</div>
							</div>
						</div>
					</div>
					<div class="products-wrapper flex justify-between">
						<FilterSidebar class="filter-sidebar"></FilterSidebar>
						<ProductsPagination :page-data="paginationData" class="w-3/4" />
					</div>
				</div>
			</div>
		</div>
		<CategoryGuide />
	</div>
</template>

<script>
import Breadcrumb from "../components/widgets/Breadcrumb";
import categoryProducts from "../json/categoryProducts.json";
import FilterSidebar from "../components/category/FilterSidebar";
import ProductsPagination from "../components/category/ProductsPagination";
import CategoryGuide from "../components/category/CategoryGuide";

export default {
	name: "Category",
	data() {
		return {
			sortMethods: [
				"Popularity",
				"High to Low",
				"Low to High",
				"Best Seller"
			],
			activeSortKey: 0,
			sortDropdownShow: false,
			linkData: [
				{
					url: "/",
					label: this.$route.params.firstId
				},
				{
					url: "#",
					label: this.$route.params.secondId
				}
			],
			paginationData: categoryProducts
		};
	},
	methods: {
		changeSortMethod(index) {
			this.activeSortKey = index;
			this.sortDropdownShow = false;
		}
	},
	watch: {
		"$route.params": {
			handler(params) {
				this.linkData[0].label = params.firstId;
				this.linkData[1].label = params.secondId;
			},
			immediate: true
		}
	},
	components: {
		Breadcrumb,
		FilterSidebar,
		ProductsPagination,
		CategoryGuide
	}
};
</script>

<style scoped>
.sortby-select {
	padding-top: 12px;
	padding-bottom: 12px;
	width: 209px;
}
.filter-sidebar {
	width: 24%;
}
.dropdown-wrapper {
	top: 50px;
}
</style>
