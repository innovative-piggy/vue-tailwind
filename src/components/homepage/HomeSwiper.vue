<template>
	<div class="home-top-slider-wrapper relative overflow-x-hidden">
		<Swiper
			:options="swiperOption"
			class="home-top-slider select-none bg-tb-primary overflow-visible mb-16"
		>
			<SwiperSlide class="slide -mb-16 pb-16">
				<div class="slide-content-wrapper">
					<div class="slide-content container lg:w-1024 xl:w-1280 mx-auto flex py-32">
						<div
							data-swiper-parallax-opacity="0"
							data-swiper-parallax-scale="0.5"
							class="slide-text-wrapper w-1/2"
						>
							<div class="slide-text-content xl:w-3/4">
								<h1
									data-swiper-parallax="600"
									class="slide-text-title text-5xl font-extrabold text-tb-black"
								>Smartwatch Test</h1>
								<p class="text-tb-black mt-2 mb-10 text-xl">
									Check out our review on the latest
									smartwatch around the world.The best at the
									TOP price!
								</p>
								<div data-swiper-parallax="-500">
									<router-link to="/" class="main-button w-56" data-swiper-parallax="-600">Find out more</router-link>
								</div>
							</div>
						</div>
						<div
							data-swiper-parallax-opacity="0"
							data-swiper-parallax="-1000"
							data-swiper-parallax-duration="300"
							class="slide-img-wrapper w-1/2 relative"
						>
							<img
								src="../../assets/images/watch.png"
								alt
								class="slide-img mx-auto absolute top-0 transform -translate-y-5 xl:translate-x-32 transition duration-1000 ease-in-out hover:-translate-y-8"
							/>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide class="slide -mb-16 pb-16">
				<div class="slide-content-wrapper bg-tb-primary">
					<div class="slide-content container lg:w-1024 xl:w-1280 mx-auto flex py-32">
						<div
							data-swiper-parallax-opacity="0"
							data-swiper-parallax="-1000"
							data-swiper-parallax-duration="300"
							class="slide-img-wrapper w-1/2 relative"
						>
							<img
								src="../../assets/images/watch.png"
								alt
								class="slide-img mx-auto absolute top-0 transform -translate-y-5 xl:translate-x-32 transition duration-1000 ease-in-out hover:-translate-y-8"
							/>
						</div>
						<div
							data-swiper-parallax-opacity="0"
							data-swiper-parallax-scale="0.5"
							class="slide-text-wrapper w-1/2"
						>
							<div class="slide-text-content mx-auto xl:w-3/4">
								<h1
									data-swiper-parallax="600"
									class="slide-text-title text-5xl font-extrabold text-tb-black"
								>Smartwatch Test</h1>
								<p class="text-tb-black mt-2 mb-10 text-xl">
									Check out our review on the latest
									smartwatch around the world.The best at the
									TOP price!
								</p>
								<div data-swiper-parallax="-500">
									<router-link to="/" class="main-button w-56" data-swiper-parallax="-600">Find out more</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide class="slide -mb-16 pb-16">
				<div class="slide-content-wrapper bg-tb-primary">
					<div class="slide-content container lg:w-1024 xl:w-1280 mx-auto flex py-32">
						<div
							data-swiper-parallax-opacity="0"
							data-swiper-parallax-scale="0.5"
							class="slide-text-wrapper w-1/2"
						>
							<div class="slide-text-content xl:w-3/4">
								<h1
									data-swiper-parallax="600"
									class="slide-text-title text-5xl font-extrabold text-tb-black"
								>Smartwatch Test</h1>
								<p class="text-tb-black mt-2 mb-10 text-xl">
									Check out our review on the latest
									smartwatch around the world.The best at the
									TOP price!
								</p>
								<div data-swiper-parallax="-500">
									<router-link to="/" class="main-button w-56" data-swiper-parallax="-600">Find out more</router-link>
								</div>
							</div>
						</div>
						<div
							data-swiper-parallax-opacity="0"
							data-swiper-parallax="-1000"
							data-swiper-parallax-duration="300"
							class="slide-img-wrapper w-1/2 relative"
						>
							<img
								src="../../assets/images/watch.png"
								alt
								class="slide-img mx-auto absolute top-0 transform -translate-y-5 xl:translate-x-32 transition duration-1000 ease-in-out hover:-translate-y-8"
							/>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide class="slide -mb-16 pb-16">
				<div class="slide-content-wrapper bg-tb-primary">
					<div class="slide-content container lg:w-1024 xl:w-1280 mx-auto flex py-32">
						<div
							data-swiper-parallax-opacity="0"
							data-swiper-parallax="-1000"
							data-swiper-parallax-duration="300"
							class="slide-img-wrapper w-1/2 relative"
						>
							<img
								src="../../assets/images/watch.png"
								alt
								class="slide-img mx-auto absolute top-0 transform -translate-y-5 xl:translate-x-32 transition duration-1000 ease-in-out hover:-translate-y-8"
							/>
						</div>
						<div
							data-swiper-parallax-opacity="0"
							data-swiper-parallax-scale="0.5"
							class="slide-text-wrapper w-1/2"
						>
							<div class="slide-text-content mx-auto xl:w-3/4">
								<h1
									data-swiper-parallax="600"
									class="slide-text-title text-5xl font-extrabold text-tb-black"
								>Smartwatch Test</h1>
								<p class="text-tb-black mt-2 mb-10 text-xl">
									Check out our review on the latest
									smartwatch around the world.The best at the
									TOP price!
								</p>
								<div data-swiper-parallax="-500">
									<router-link to="/" class="main-button w-56" data-swiper-parallax="-600">Find out more</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<div class="swiper-pagination" slot="pagination"></div>
		</Swiper>
		<div
			class="swiper-navigation-next swiper-navigation-arrow top-0 absolute h-full px-10 focus:outline-none pt-48 z-10 right-0"
		>
			<img src="../../assets/images/arrow-bg.svg" alt />
		</div>
		<div
			class="swiper-navigation-prev swiper-navigation-arrow top-0 absolute h-full px-10 focus:outline-none pt-48 z-10 left-0"
		>
			<img src="../../assets/images/arrow-bg.svg" class="transform rotate-180" alt />
		</div>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from "vue-awesome-swiper";
	import "swiper/css/swiper.css";

	export default {
		name: "HomeSwiper",
		data() {
			return {
				swiperOption: {
					pagination: {
						el: ".swiper-pagination",
						clickable: true
					},
					speed: 1000,
					navigation: {
						nextEl: ".swiper-navigation-next",
						prevEl: ".swiper-navigation-prev"
					},
					parallax: true,
					loop: true
				}
			};
		},
		components: {
			Swiper,
			SwiperSlide
		}
	};
</script>

<style scoped>
	.container.slide-content {
		max-width: calc(100% - 150px);
	}
</style>
