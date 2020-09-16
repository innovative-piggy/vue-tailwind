<template>
	<div id="product-gallery-component" class="px-5 xl:px-10">
		<div ref="lightboxx" class="bg-image-wrapper w-full flex justify-center items-center relative">
			<div
				v-if="zoomActive"
				@mousemove="zoomImage"
				@mouseleave="zoomLeave"
				@click="showLightbox = true"
				v-bind:style="'transform: translate(' + glassPositionLeft + 'px, ' + (glassPositionTop) + 'px); width: ' + glassSize + 'px; height: ' + glassSize + 'px;'"
				class="absolute opacity-50 zoom-glass rounded top-0 left-0"
			></div>
			<div
				v-if="zoomActive"
				ref="lightzoom"
				class="absolute w-full zoom-wrapper shadow-md top-0 overflow-hidden"
				:style="'background-image: url(' + require('../../assets/images/product-detail/' + imgArray[activeImage] + '-bg.jpg') + '); background-position: -' + resultX + 'px -' + resultY + 'px;'"
			></div>
			<img
				v-if="activeImage > -1"
				ref="lightbox"
				@mouseover="zoomActive = true"
				@mouseenter="zoomImage"
				:src="require('../../assets/images/product-detail/' + imgArray[activeImage] + '-normal.jpg')"
				class="h-full"
				alt
			/>
			<div v-if="activeImage < 0" class="absolute top-0 left-0 h-full w-full">
				<div class="embed-container w-full">
					<iframe
						type="text/html"
						width="640"
						height="360"
						:src="'https://www.youtube.com/embed/' + video + '?autoplay=1'"
						frameborder="0"
					></iframe>
				</div>
			</div>
		</div>
		<div class="flex w-full mt-8 gap-1 xl:gap-5">
			<div
				v-for="(item, index) in imgArray"
				:key="index"
				@click="activeImage=index"
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
			<div
				@click="activeImage = -1"
				v-if="video != ''"
				class="sm-image-wrapper h-16 w-full py-2 rounded items-center flex justify-center relative cursor-pointer box-border"
			>
				<div
					v-bind:class="activeImage === -1 ? 'border border-tb-blue' : ''"
					class="absolute h-full w-full top-0 left-0 rounded"
				></div>
				<img src="../../assets/images/product-detail/preview-video.svg" class="max-h-full" alt />
			</div>
		</div>
		<transition name="fade">
		<ProductLightbox
			v-if="showLightbox"
			@close="showLightbox = false"
			:data="imgArray"
			:active="activeImage"
			:video="video"
		/>
		</transition>
	</div>
</template>

<script>
import ProductLightbox from "./ProductLightbox";

export default {
	name: "ProductGallery",
	data() {
		return {
			activeImage: 0,
			zoomActive: false,
			resultX: 0,
			resultY: 0,
			glassPositionLeft: 0,
			glassPositionTop: 0,
			glassSize: 0,
			showLightbox: false,
		};
	},
	methods: {
		zoomImage(event) {
			let mouseX = event.clientX;
			let mouseY = event.clientY;
			let leftOuterCorner = this.$refs.lightboxx.getBoundingClientRect()
				.left;
			let leftCorner = this.$refs.lightbox.getBoundingClientRect().left;
			let topCorner = this.$refs.lightbox.getBoundingClientRect().top;
			let boxWidth = this.$refs.lightbox.getBoundingClientRect().width;
			this.glassSize = boxWidth / 2;
			let boxHeight = this.$refs.lightbox.getBoundingClientRect().height;
			if (mouseX > leftCorner + boxWidth - boxWidth / 4)
				this.glassPositionLeft =
					leftCorner - leftOuterCorner + boxWidth - boxWidth / 2;
			else if (mouseX < leftCorner + boxWidth / 4)
				this.glassPositionLeft = leftCorner - leftOuterCorner;
			else
				this.glassPositionLeft =
					mouseX - leftOuterCorner - boxWidth / 4;
			if (mouseY > topCorner + boxHeight - boxWidth / 4)
				this.glassPositionTop = boxHeight - boxWidth / 2;
			else if (mouseY < topCorner + boxWidth / 4)
				this.glassPositionTop = 0;
			else this.glassPositionTop = mouseY - topCorner - boxWidth / 4;
			let imgWidth = this.$refs.lightzoom.getBoundingClientRect().width;
			let imgHeight = this.$refs.lightzoom.getBoundingClientRect().height;
			let percentageX = (mouseX - leftCorner) / boxWidth;
			let percentageY = (mouseY - topCorner) / boxHeight;
			let bgSizeWidth = imgWidth * 2;
			let bgSizeHeight = boxHeight * (bgSizeWidth / boxWidth);

			this.resultX =
				bgSizeWidth * percentageX - imgWidth / 2 > 0
					? bgSizeWidth * percentageX + imgWidth / 2 < bgSizeWidth
						? bgSizeWidth * percentageX - imgWidth / 2
						: bgSizeWidth - imgWidth
					: 0;
			this.resultY =
				bgSizeHeight * percentageY - imgHeight / 2 > 0
					? bgSizeHeight * percentageY + imgHeight / 2 < bgSizeHeight
						? bgSizeHeight * percentageY - imgHeight / 2
						: bgSizeHeight - imgHeight
					: 0;
		},
		zoomLeave() {
			this.zoomActive = false;
			this.glassPositionLeft = 0;
			this.glassPositionTop = 0;
		},
	},
	props: ["imgArray", "video"],
	components: {
		ProductLightbox,
	},
	updated() {
		console.log(this.activeImage)
	},
};
</script>

<style scoped>
.bg-image-wrapper {
	height: 340px;
}
.zoom-glass {
	background: linear-gradient(90deg, black 5px, transparent 1%) center,
		linear-gradient(black 5px, transparent 1%) center, #fff;
	background-size: 6px 6px;
}
.zoom-wrapper {
	left: 100%;
	height: 436px;
	background-size: 200%;
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
.fade-enter-active {
    transition: 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
