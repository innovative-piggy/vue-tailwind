<template>
	<div id="product-reviews-component" class="flex gap-2 xl:gap-6 border-b border-tb-border pb-12">
		<div class="w-2/3">
			<ReviewOverview :data="productReviewData" />
			<div class="feedback-wrapper">
				<Feedback v-for="(item, index) in productReviewData.reviews.result" :key="index" :data="item" />
				<Paginate
					v-model="productReviewData.reviews.pageNumber"
					:page-count="productReviewData.reviews.totalPages"
					:page-range="5"
					:page-link-class="'text-xl w-5 mx-2 text-center outline-none'"
					:margin-pages="0"
					:prev-link-class="'mr-5 product-pagination-arrow outline-none overflow-visible feedback-pagination-prev transform rotate-180'"
					:next-link-class="'ml-5 product-pagination-arrow outline-none overflow-visible feedback-pagination-next'"
					:active-class="'text-tb-blue'"
					:disabled-class="'product-pagination-arrow-disabled'"
					:break-view-link-class="'hidden'"
					:no-li-surround="true"
					:click-handler="myCallback"
					:prev-text="''"
					:next-text="''"
					:container-class="'flex items-center text-tb-primary-dark'"
					class="mt-12"
				></Paginate>
			</div>
			<LeaveFeedback :data="linkData[2]['label']" />
		</div>
		<div class="w-1/3">
			<QuestionSidebar
				:productName="linkData[2]['label']"
				:data="productReviewData.questions"
				:category-questions="productReviewData.categoryQuestions"
			/>
		</div>
	</div>
</template>

<script>
import ReviewOverview from "./ReveiwOverview";
import Feedback from "./Feedback";
import Paginate from "vuejs-paginate";
import LeaveFeedback from "./LeaveFeedback";
import QuestionSidebar from "./QuestionSidebar";

import productReviewJson from "../../../json/productReview.json";

export default {
	name: "ProductReviews",
	props: ["linkData"],
	data() {
		return {
			productReviewData: productReviewJson,
		};
	},
	methods: {
		myCallback() {
			console.log("Paginate");
		},
	},
	components: {
		ReviewOverview,
		Feedback,
		Paginate,
		LeaveFeedback,
		QuestionSidebar,
	},
	mounted() {
		var feedbackNavPrev = this.$el.querySelector(
			".feedback-pagination-prev"
		);
		feedbackNavPrev.innerHTML = `<svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="10" cy="10" r="10" fill="#3099F2" />
				<path
					d="M12.3913 9.83733L12.3913 9.83733C12.5434 9.9895 12.5434 10.2362 12.3913 10.3883L12.3913 10.3884L9.51514 13.2645L9.51514 13.2645C9.36297 13.4166 9.1163 13.4166 8.96413 13.2645L8.96411 13.2645C8.81196 13.1123 8.81196 12.8656 8.96411 12.7134L8.96411 12.7134L11.5647 10.1128L8.96411 7.51224L8.96228 7.51041L8.96229 7.51039C8.81643 7.35939 8.81644 7.11998 8.96228 6.96897L12.3913 9.83733ZM12.3913 9.83733L9.51514 6.96121L9.51516 6.96119M12.3913 9.83733L9.51516 6.96119M9.51516 6.96119L9.51328 6.95938M9.51516 6.96119L9.51328 6.95938M9.51328 6.95938C9.35848 6.80988 9.11179 6.81417 8.96229 6.96897L9.51328 6.95938Z"
					fill="white"
					stroke="white"
					stroke-width="0.3"
				/>
			</svg>`;
		var feedbackNavNext = this.$el.querySelector(
			".feedback-pagination-next"
		);
		feedbackNavNext.innerHTML = `<svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="10" cy="10" r="10" fill="#3099F2" />
				<path
					d="M12.3913 9.83733L12.3913 9.83733C12.5434 9.9895 12.5434 10.2362 12.3913 10.3883L12.3913 10.3884L9.51514 13.2645L9.51514 13.2645C9.36297 13.4166 9.1163 13.4166 8.96413 13.2645L8.96411 13.2645C8.81196 13.1123 8.81196 12.8656 8.96411 12.7134L8.96411 12.7134L11.5647 10.1128L8.96411 7.51224L8.96228 7.51041L8.96229 7.51039C8.81643 7.35939 8.81644 7.11998 8.96228 6.96897L12.3913 9.83733ZM12.3913 9.83733L9.51514 6.96121L9.51516 6.96119M12.3913 9.83733L9.51516 6.96119M9.51516 6.96119L9.51328 6.95938M9.51516 6.96119L9.51328 6.95938M9.51328 6.95938C9.35848 6.80988 9.11179 6.81417 8.96229 6.96897L9.51328 6.95938Z"
					fill="white"
					stroke="white"
					stroke-width="0.3"
				/>
			</svg>`;
	},
};
</script>

<style>
</style>