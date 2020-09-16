<template>
	<div id="related-products-component relative">
		<p class="text-22 text-tb-black font-bold">Verwandte Produkte</p>
		<div class="flex justify-between mt-3">
			<ProductCard
				v-for="(item, index) in data"
				:key="index"
				:item="productsArray.products[item]"
				@hoverstart="hoverIndex = index"
				@hoverend="hoverIndex = -1"
				v-bind:class="hoverIndex === index + 1 ? 'border-transparent' : 'border-tb-border'"
				class="border-r transition duration-200 hover:tb-shadow-1 w-full hover:rounded hover:border-transparent"
			/>
		</div>
	</div>
</template>

<script>
import ProductCard from "../widgets/ProductCard";
import jsonData from "../../json/categoryProducts.json";

export default {
	name: "RelatedProducts",
	data() {
		return {
			productsArray: jsonData,
			hoverIndex: -1,
		};
	},
	props: ["data"],
	components: {
		ProductCard,
	},
};
</script>

<style scoped>
</style>