<template>
	<div id="advanced-option-component" class="relative">
		<div class="swiper-outer-wrapper overflow-hidden px-px">
			<Swiper :options="swiperOption" class="swiper-wrapper">
				<SwiperSlide v-for="(option, index) in options" :key="index" class="option-card-wrapper">
					<div class="relative">
						<div
							class="hover-card absolute rounded border-0 border-tb-blue hover:border transition duration-100"
						></div>
						<div class="rounded bg-tb-primary flex justify-evenly items-stretch option-card py-5 xl:py-6">
							<img
								:src="
                                    require('../../assets/images/product-sm/' +
                                        option.thumbnail +
                                        '.png')
                                "
								alt
							/>
							<div class="flex justify-between flex-col">
								<p class="text-tb-black font-bold">{{ option.name }}</p>
								<p class="text-tb-blue">ab {{ option.price.toFixed(2) }} €</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
		<div class="navigator-box absolute z-20">
			<div class="relative">
				<div class="swiper-navigation-right swiper-navigation-arrow outline-none right-0">
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
				<div class="swiper-navigation-left swiper-navigation-arrow transform rotate-180 outline-none">
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
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
	name: "AdvancedOption",
	props: ["options"],
	data() {
		return {
			swiperOption: {
				slidesPerView: 5,
				spaceBetween: 16,
				loop: true,
				navigation: {
					nextEl: ".swiper-navigation-right",
					prevEl: ".swiper-navigation-left",
				},
				breakpoints: {
					// when window width is >= 1024px
					1280: {
						slidesPerView: 6,
						spaceBetween: 24,
					},
				},
			},
		};
	},
	components: {
		Swiper,
		SwiperSlide,
	},
};
</script>

<style scoped>
.swiper-wrapper {
	width: calc(100% + 3px);
	margin-left: -1px;
}
.navigator-box {
	left: 50%;
	transform: translateX(-50%);
	width: calc(100vw - 40px);
	max-width: 1420px;
}
@media screen and (min-width: 1200px) and (max-width: 1279px) {
	.navigator-box {
		width: calc(100vw - 120px);
	}
}
.swiper-navigation-arrow {
	position: absolute;
	bottom: 24px;
}
.swiper-navigation-arrow:hover circle {
	fill: #1f84da;
}
.hover-card {
	top: 1px;
	left: 1px;
	height: calc(100% - 2px);
	width: calc(100% - 2px);
}
</style>
