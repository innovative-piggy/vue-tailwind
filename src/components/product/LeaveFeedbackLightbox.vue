<template>
	<div id="leave-feedback-lightbox-component" class="fixed top-0 left-0 w-full h-full z-30">
		<div class="relative h-full w-full flex items-center justify-center">
			<div v-on:click="$emit('close')" class="absolute h-full w-full top-0 left-0 bg-black opacity-50"></div>
			<div class="rounded bg-tb-primary px-5 xl:px-8 relative tb-shadow-2">
                <LeaveFeedback :data="data" />
				<div
					v-on:click="$emit('close')"
					class="close-btn absolute top-0 right-0 transform -translate-x-4 text-3xl text-tb-dark-red hover:text-red-800 cursor-pointer"
				>&times;</div>
			</div>
		</div>
	</div>
</template>

<script>
import LeaveFeedback from './reviews/LeaveFeedback'

export default {
    name: "LeaveFeedbackLightbox",
    props: ['data'],
    components: {
        LeaveFeedback
    }
};
</script>

<style>
</style>