<template>
	<div class="home-product-slider-wrapper relative mx-auto">
		<div class="slider-outer-box container mx-auto">
			<p class="text-tb-black text-xl font-bold -mb-5">Top Produkte</p>
			<div class="slider-inner-box overflow-x-hidden">
				<div class="slider-final-box">
					<Swiper ref="mySwiper" @transitionEnd="updateActive" :options="swiperOption">
						<SwiperSlide v-for="(product, index) in productArray" :key="index">
							<div
								class="product-content-wrapper flex flex-col justify-between items-center single-slide px-4 pt-4 relative"
							>
								<div
									@mouseenter="removeBorderL(index + 1)"
									@mouseleave="recoverBorderL()"
									v-bind:class="(borderLessItem === index) ? '' : 'border-l'"
									class="absolute hover-box h-full top-0 transition duration-75 w-full left-0 border-tb-border"
								></div>
								<div class="product-thumbnail-wrapper h-24 mb-6">
									<img
										:src="
                                            require('../../assets/images/product/product-' +
                                                product.thumbnail +
                                                '.png')
                                        "
										alt
										class="mx-auto max-w-full max-h-full"
									/>
								</div>
								<div class="product-desc-wrapper h-24">
									<p class="product-name text-tb-black text-base">
										<router-link to="/">{{ product.name }}</router-link>
									</p>
									<p class="text-xs">
										<span class="text-tb-primary-dark">
											{{ product.val1 }}/100 ({{
											product.test
											}}
											Test) ab
											<span
												class="text-tb-blue"
											>
												{{
												product.price.toLocaleString()
												}}&euro;
											</span>
										</span>
									</p>
									<div class="rating-wrapper">
										<StarRating
											v-bind:rating="product.review"
											v-bind:read-only="true"
											v-bind:show-rating="false"
											v-bind:star-size="12"
											active-color="#FF7000"
											v-bind:padding="1"
											v-bind:inline="true"
										></StarRating>
										<span class="text-xs text-tb-primary-dark">({{ product.reviewCount }})</span>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
		<div
			class="pagination-wrapper absolute bottom-0 transform -translate-y-3 w-full text-center z-10"
		>
			<div
				@click="slideSwiperTo(0)"
				v-bind:class="{'swiper-pagination-bullet-active': (activeBullet === 0)}"
				class="swiper-pagination-bullet rounded-full cursor-pointer"
			></div>
			<div
				@click="slideSwiperTo(2)"
				v-bind:class="{'swiper-pagination-bullet-active': (activeBullet === 1)}"
				class="swiper-pagination-bullet rounded-full cursor-pointer"
			></div>
			<div
				@click="slideSwiperTo(4)"
				v-bind:class="{'swiper-pagination-bullet-active': (activeBullet === 2)}"
				class="swiper-pagination-bullet rounded-full cursor-pointer"
			></div>
		</div>
		<div class="swiper-navigation-next product-slider-next swiper-navigation-arrow z-10">
			<svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="10" cy="10" r="10" fill="#3099F2" />
				<path
					d="M12.3913 9.83733L12.3913 9.83733C12.5434 9.9895 12.5434 10.2362 12.3913 10.3883L12.3913 10.3884L9.51514 13.2645L9.51514 13.2645C9.36297 13.4166 9.1163 13.4166 8.96413 13.2645L8.96411 13.2645C8.81196 13.1123 8.81196 12.8656 8.96411 12.7134L8.96411 12.7134L11.5647 10.1128L8.96411 7.51224L8.96228 7.51041L8.96229 7.51039C8.81643 7.35939 8.81644 7.11998 8.96228 6.96897L12.3913 9.83733ZM12.3913 9.83733L9.51514 6.96121L9.51516 6.96119M12.3913 9.83733L9.51516 6.96119M9.51516 6.96119L9.51328 6.95938M9.51516 6.96119L9.51328 6.95938M9.51328 6.95938C9.35848 6.80988 9.11179 6.81417 8.96229 6.96897L9.51328 6.95938Z"
					fill="white"
					stroke="white"
					stroke-width="0.3"
				/>
			</svg>
		</div>
		<div class="swiper-navigation-prev product-slider-prev swiper-navigation-arrow z-10">
			<svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="10" cy="10" r="10" fill="#3099F2" />
				<path
					d="M12.3913 9.83733L12.3913 9.83733C12.5434 9.9895 12.5434 10.2362 12.3913 10.3883L12.3913 10.3884L9.51514 13.2645L9.51514 13.2645C9.36297 13.4166 9.1163 13.4166 8.96413 13.2645L8.96411 13.2645C8.81196 13.1123 8.81196 12.8656 8.96411 12.7134L8.96411 12.7134L11.5647 10.1128L8.96411 7.51224L8.96228 7.51041L8.96229 7.51039C8.81643 7.35939 8.81644 7.11998 8.96228 6.96897L12.3913 9.83733ZM12.3913 9.83733L9.51514 6.96121L9.51516 6.96119M12.3913 9.83733L9.51516 6.96119M9.51516 6.96119L9.51328 6.95938M9.51516 6.96119L9.51328 6.95938M9.51328 6.95938C9.35848 6.80988 9.11179 6.81417 8.96229 6.96897L9.51328 6.95938Z"
					fill="white"
					stroke="white"
					stroke-width="0.3"
				/>
			</svg>
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import StarRating from "vue-star-rating";
import sliderProductData from "../../json/homeProductSlider.json";

export default {
	name: "HomeProductSlider",
	data() {
		return {
			swiperOption: {
				loop: false,
				slidesPerView: 5,
				followFinger: false,
				threshold: 50,
				navigation: {
					nextEl: ".product-slider-next",
					prevEl: ".product-slider-prev",
				},
				breakpoints: {
					// when window width is >= 1024px
					1280: {
						slidesPerView: 6,
					},
				},
			},
			productArray: sliderProductData,
			activeBullet: 0,
			borderLessItem: 9999,
		};
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.$swiper;
		},
	},
	methods: {
		slideSwiperTo(index) {
			this.swiper.slideTo(index);
		},
		updateActive() {
			this.activeBullet = this.swiper.isBeginning
				? 0
				: this.swiper.isEnd
				? 2
				: 1;
		},
		removeBorderL(id) {
			this.borderLessItem = id;
		},
		recoverBorderL() {
			this.borderLessItem = 9999;
		},
	},
	components: {
		Swiper,
		SwiperSlide,
		StarRating,
	},
};
</script>

<style scoped>
.home-product-slider-wrapper {
	max-width: 1420px;
}
.slider-final-box {
	width: calc(100% + 2px);
	margin-left: -1px;
}
.swiper-navigation-arrow {
	position: absolute;
	top: 50%;
	transform: translateY(-100%);
}
.swiper-navigation-arrow:focus {
	outline: none;
}
.swiper-navigation-arrow:hover circle {
	fill: #1f84da;
}
.swiper-navigation-next {
	right: 20px;
}
.swiper-navigation-prev {
	left: 20px;
	transform: rotate(180deg) translateY(100%);
}
.hover-box:hover {
	width: calc(100% - 2px);
	left: 1px;
	border: 1px solid #3099f2;
	border-radius: 4px;
}
</style>
