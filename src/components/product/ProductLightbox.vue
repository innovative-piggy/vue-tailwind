<template>
	<div
		id="product-lightbox-component"
		class="fixed z-40 top-0 left-0 h-full w-full px-3 bg-black bg-opacity-50"
	>
		<div class="relative h-full w-full">
			<div class="h-full w-full" v-on:click="$emit('close')"></div>
			<div class="absolute container transform -translate-x-1/2 -translate-y-1/2 lightbox-wrapper">
				<div
					class="lightbox-content rounded bg-tb-primary h-full w-full tb-shadow-2 p-8 xl:p-12 flex relative"
				>
					<div
						v-on:click="$emit('close')"
						class="close-btn absolute top-0 right-0 transform -translate-x-4 text-3xl text-tb-dark-red hover:text-red-800 cursor-pointer"
					>&times;</div>
					<div class="px-5 py-3 w-2/5">
						<p class="text-tb-black font-bold text-3xl xl:text-4xl">Apple iPhone SE (2020) 256GB White</p>
						<div
							class="flex w-full mt-8 xl:mt-10 pb-6 xl:pb-8 border-b border-white gap-1 xl:gap-5 justify-between"
						>
							<div
								v-for="(item, index) in data"
								:key="index"
								@click="setActiveImage(index)"
								class="sm-image-wrapper h-16 w-full py-2 rounded items-center flex justify-center box-border relative cursor-pointer"
							>
								<div
									v-bind:class="activeImage===index ? 'border border-tb-blue' : ''"
									class="absolute h-full w-full top-0 left-0 rounded"
								></div>
								<img
									:src="require('../../assets/images/product-detail/' + item + '-sm.jpg')"
									class="max-h-full"
									alt
								/>
							</div>
						</div>
						<div class="embed-container mt-6 xl:mt-8 w-full" v-if="video != ''">
							<iframe
								id="ytplayer"
								type="text/html"
								width="640"
								height="360"
								:src="'https://www.youtube.com/embed/' + video + '?autoplay=1'"
								frameborder="0"
							></iframe>
						</div>
					</div>
					<div class="w-3/5 rounded p-2 xl:p-4 bg-white h-full">
						<div class="relative w-full h-full p-8">
							<div
								@click="navNext"
								class="absolute h-full w-8 xl:w-12 -mr-2 xl:-mr-4 top-0 flex justify-center items-center right-0 cursor-pointer"
							>
								<img class="lightbox-nav-next w-5" src="../../assets/images/arrow-bg.svg" />
							</div>
							<div
								@click="navPrev"
								class="absolute h-full w-8 xl:w-12 -ml-2 xl:-ml-4 top-0 flex justify-center items-center left-0 cursor-pointer"
							>
							<img
								@click="navPrev"
								class="lightbox-nav-prev w-5 transform rotate-180"
								src="../../assets/images/arrow-bg.svg"
							/>
							</div>
							<div
								class="relative w-full h-full bg-wrapper flex items-center justify-center overflow-hidden"
								ref="zoomPlay"
							>
								<img
									@click="bgZoomIn = true"
									v-if="bgZoomIn != true"
									:src="require('../../assets/images/product-detail/' + data[activeImage] + '-normal.jpg')"
									class="max-h-full max-w-full normal-image"
									alt
								/>
								<img
									:style="'transform: translate(-' + zoomImageLeft + 'px, -' + zoomImageTop + 'px);'"
									class="absolute top-0 left-0 zoomed-image"
									v-if="bgZoomIn"
									ref="zoomImage"
									@click="bgZoomIn = false"
									@mousemove="zoomImage"
									:src="require('../../assets/images/product-detail/' + data[activeImage] + '-bg.jpg')"
									alt
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProductLightbox",
	props: ["data", "active", "video"],
	data() {
		return {
			activeImage: this.active,
			bgZoomIn: false,
			zoomImageLeft: 0,
			zoomImageTop: 0,
		};
	},
	methods: {
		navNext() {
			this.bgZoomIn = false;
			this.activeImage = (this.activeImage + 1) % this.data.length;
		},
		navPrev() {
			this.bgZoomIn = false;
			this.activeImage = (this.activeImage + 3) % this.data.length;
		},
		setActiveImage(index) {
			this.bgZoomIn = false;
			this.activeImage = index;
		},
		zoomImage(event) {
			let mouseX = event.clientX;
			let mouseY = event.clientY;
			let leftCorner = this.$refs.zoomPlay.getBoundingClientRect().left;
			let topCorner = this.$refs.zoomPlay.getBoundingClientRect().top;
			let boxWidth = this.$refs.zoomPlay.getBoundingClientRect().width;
			let boxHeight = this.$refs.zoomPlay.getBoundingClientRect().height;
			let imgWidth = this.$refs.zoomImage.getBoundingClientRect().width;
			let imgHeight = this.$refs.zoomImage.getBoundingClientRect().height;
			if (
				mouseX >
				leftCorner + boxWidth - (boxWidth * boxWidth) / imgWidth / 2
			)
				this.zoomImageLeft = imgWidth - boxWidth;
			else if (mouseX < leftCorner + (boxWidth * boxWidth) / imgWidth / 2)
				this.zoomImageLeft = 0;
			else
				this.zoomImageLeft =
					(imgWidth / boxWidth) * (mouseX - leftCorner) -
					boxWidth / 2;

			if (
				mouseY >
				topCorner + boxHeight - (boxHeight * boxHeight) / imgHeight / 2
			)
				this.zoomImageTop = imgHeight - boxHeight;
			else if (
				mouseY <
				topCorner + (boxHeight * boxHeight) / imgHeight / 2
			)
				this.zoomImageTop = 0;
			else
				this.zoomImageTop =
					(imgHeight / boxHeight) * (mouseY - topCorner) -
					boxHeight / 2;
		},
	},
};
</script>

<style scoped>
.lightbox-wrapper {
	height: 90%;
	max-height: 800px;
	top: 50%;
	left: 50%;
}
.embed-container {
	position: relative;
	padding-bottom: 56.25%;
	height: 0;
	overflow: hidden;
	max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.lightbox-nav {
	top: 46%;
}
.normal-image {
	cursor: zoom-in;
}
.zoomed-image {
	cursor: zoom-out;
	width: unset;
	max-width: unset;
	min-width: unset;
}
</style>