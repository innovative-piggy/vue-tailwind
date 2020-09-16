<template>
	<div id="product-page">
		<div class="px-3">
			<div class="container mx-auto pt-2">
				<Breadcrumb :link-array="linkData" />
				<div class="product-detail-wrapper mt-10">
					<div ref="productHeaderWrapper" class="product-header border-b border-tb-border flex justify-between items-end">
						<div
							class="pb-1 font-bold text-tb-black whitespace-no-wrap"
							v-bind:style="'font-size: ' + ((titleScaleRate > 0.55) ? titleScaleRate * 36 - 1 : '19') + 'px;'"
							v-bind:class="!(titleScaleRate > 0.55) ? 'w-1/2 truncate' : ''"
							ref="productHeaderName"
						>{{productData.name}} something really great {{productData.name}}</div>
						<div class="flex items-end">
							<div
								@click="activeTab=0"
								v-bind:class="(activeTab === 0 ? 'text-tb-blue border-b-3 border-tb-blue mb-px transform translate-y-1' : 'text-tb-primary-dark')"
								class="font-bold text-xl xl:text-22 pb-1 px-2 cursor-pointer xl:px-3 mx-2"
							>Testing</div>
							<div
								@click="activeTab=1"
								v-bind:class="(activeTab === 1 ? 'text-tb-blue border-b-3 border-tb-blue mb-px transform translate-y-1' : 'text-tb-primary-dark')"
								class="font-bold text-xl xl:text-22 pb-1 px-2 cursor-pointer xl:px-3 mx-2"
							>Offers</div>
							<div
								@click="activeTab=2"
								v-bind:class="(activeTab === 2 ? 'text-tb-blue border-b-3 border-tb-blue mb-px transform translate-y-1' : 'text-tb-primary-dark')"
								class="font-bold text-xl xl:text-22 pb-1 px-2 cursor-pointer xl:px-3 mx-2"
							>Product info</div>
							<div
								@click="activeTab=3"
								v-bind:class="(activeTab === 3 ? 'text-tb-blue border-b-3 border-tb-blue mb-px transform translate-y-1' : 'text-tb-primary-dark')"
								class="font-bold text-xl xl:text-22 pb-1 px-2 cursor-pointer xl:px-3 mx-2"
							>Customer review</div>
						</div>
					</div>
					<div class="tab-contents-wrapper mt-12">
						<div v-if="activeTab===0 || activeTab===2">
							<div class="flex items-stretch gap-2 xl:gap-6">
								<div class="product-gallery-wrapper w-full">
									<ProductGallery :img-array="productData.gallery" :video="productData.video" />
								</div>
								<div class="product-pricing-wrapper w-full">
									<ProductPricing :product-data="productData" @openoffers="activeTab = 1" />
								</div>
							</div>
							<AdvancedOption class="mt-8" :options="productData.advanced" />
						</div>
						<div v-if="activeTab===0" class="tab-content-wrapper">
							<div class="toggleWrapper relative">
								<Description class="mt-8" :descData="productData.description" />
								<ProductDetailSmall v-if="toggleWrapperOpen" class="mt-4 mb-20" :data="productData" />
								<div
									v-bind:class="toggleWrapperOpen ? '' : 'bg-mask'"
									class="toggleMask z-10 absolute bottom-0 transform translate-y-8 w-full h-48 flex justify-center items-center"
								>
									<span
										@click="toggleAction"
										v-bind:class="{'transform translate-y-24':toggleWrapperOpen}"
										class="flex items-center cursor-pointer"
									>
										<img
											src="../assets/images/circle-arrow-right.svg"
											class="w-4 transform"
											v-bind:class="toggleWrapperOpen? '-rotate-90' : 'rotate-90'"
											alt
										/>
										<span
											class="text-tb-blue underline ml-1"
										>Show {{toggleWrapperOpen ? 'Less' : 'More'}} Info</span>
									</span>
								</div>
							</div>
							<ConsumerMagazine class="mt-8" :data="productData" />
						</div>
						<div v-if="activeTab===2" class="tab-content-wrapper">
							<ProductDetail />
						</div>
						<div v-if="activeTab===1" class="tab-content-wrapper">
							<div class="flex justify-between items-center">
								<p
									class="text-22 text-tb-black font-bold"
								>{{productData.totalOffers}} Angebote zu {{productData.name}}</p>
								<div class="text-xs text-tb-primary-dark">Data from 08/09/2020 04:19</div>
							</div>
							<div
								v-for="(item, index) in productOffers"
								:key="index"
								class="flex justify-between items-center py-10 border-b border-tb-border transition duration-100 hover:tb-shadow-1 px-3 rounded"
							>
								<img :src="require('../assets/images/company/' + item.logo + '-bg.png')" class="w-24" alt />
								<img :src="require('../assets/images/product/' + item.thumbnail + '.png')" class="w-24" alt />
								<p class="w-1/3 text-xl xl:text-22 leading-tight text-tb-primary-dark">{{item.name}}</p>
								<span class="flex">
									<img src="../assets/images/truck.svg" alt />
									<span class="ml-2 text-xs text-tb-blue">
										Delivery: Usually ships
										<br />
										within {{item.delivery.min}} -{{item.delivery.max}} days
									</span>
								</span>
								<div>
									<p class="text-22 text-tb-dark-red font-bold">{{(item.price).toLocaleString()}} €</p>
									<p class="text-xs text-tb-primary-dark">Shipping: {{item.shipping}} €</p>
								</div>
								<router-link to="/" class="main-button px-6 xl:px-8">Go to the store</router-link>
							</div>
						</div>
						<div v-if="activeTab===3" class="tab-content-wrapper">
							<ProductReviews :link-data="linkData" />
						</div>
					</div>
					<RelatedProducts class="mt-10" :data="productData.relatedProducts" />
				</div>
			</div>
		</div>
		<PopularSearch class="mt-8" :data="productData.moreSearch" />
	</div>
</template>

<script>
import Breadcrumb from "../components/widgets/Breadcrumb";

import productSingleJson from "../json/productSingle.json";
import productOffersJson from "../json/productOffers.json";

import ProductGallery from "../components/product/ProductGallery";
import ProductPricing from "../components/product/ProductPricing";
import AdvancedOption from "../components/product/AdvancedOption";
import Description from "../components/product/Description";
import ProductDetailSmall from "../components/product/ProductDetailSmall";
import ConsumerMagazine from "../components/product/ConsumerMagazine";
import RelatedProducts from "../components/product/RelatedProducts";
import PopularSearch from "../components/product/PopularSearch";
import ProductDetail from "../components/product/details/ProductDetail";
import ProductReviews from "../components/product/reviews/ProductReviews";

export default {
	name: "Product",
	data() {
		return {
			linkData: [
				{
					url: "/",
					label: this.$route.params.firstId,
				},
				{
					url:
						"/category/" +
						this.$route.params.firstId +
						"/" +
						this.$route.params.secondId,
					label: this.$route.params.secondId,
				},
				{
					url: "#",
					label: this.$route.params.productId,
				},
			],
			productData: productSingleJson,
			productOffers: productOffersJson,
			activeTab: 0,
			toggleWrapperOpen: false,
			titleScaleRate: 1,
		};
	},
	methods: {
		toggleAction() {
			this.toggleWrapperOpen = this.toggleWrapperOpen ? false : true;
			console.log(this.toggleWrapperOpen);
		},
	},
	components: {
		Breadcrumb,
		ProductGallery,
		ProductPricing,
		AdvancedOption,
		Description,
		ProductDetailSmall,
		ConsumerMagazine,
		RelatedProducts,
		PopularSearch,
		ProductDetail,
		ProductReviews,
	},
	mounted() {
		let productHeaderWrapperWidth = this.$refs.productHeaderWrapper.getBoundingClientRect().width / 2;
		let productHeaderNameWidth = this.$refs.productHeaderName.getBoundingClientRect()
			.width;
		this.titleScaleRate =
			productHeaderWrapperWidth / productHeaderNameWidth < 1.0
				? productHeaderWrapperWidth / productHeaderNameWidth
				: 1;
	},
};
</script>

<style scoped>
.bg-mask {
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0) -30.21%,
		#ffffff 51.84%
	);
}
</style>