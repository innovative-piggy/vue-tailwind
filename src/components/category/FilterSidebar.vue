<template>
	<div id="filter-sidebar">
		<div class="rounded bg-tb-primary py-5">
			<p class="text-tb-black font-bold text-base mb-5 px-4">Filter by</p>
			<label class="test-winner-only flex items-center mb-5 px-4">
				<input type="checkbox" class="form-checkbox rounded-full border-transparent" />
				<span class="text-sm text-tb-blue ml-2">nur Testsieger anzeigen ({{filterData.ourWinner}})</span>
			</label>
			<div class="price-range-wrapper">
				<div class="accordion">
					<div class="accordion-nav flex justify-between gap-5 items-center px-4 select-none py-2">
						<span
							@click="accordionActive.priceRange = !accordionActive.priceRange"
							class="flex items-center cursor-pointer w-full"
						>
							<img
								src="../../assets/images/accordion-arrow.svg"
								alt
								v-bind:class="accordionActive.priceRange?'rotate-90':''"
								class="transition duration-200 transform"
							/>
							<span class="text-tb-black ml-2">Price Range</span>
						</span>
						<span class="reload-icon cursor-pointer">
							<img src="../../assets/images/reset.svg" class="transition transform duration-200" v-bind:class="{'scale-75': !accordionActive.priceRange}" alt />
						</span>
					</div>
					<transition name="fade">
						<div v-if="accordionActive.priceRange" class="accordion-content h-32 px-4 overflow-y-hidden">
							<div class="content-wrapper py-4 w-full relative">
								<div class="flex justify-between items-center mb-5">
									<input
										type="number"
										class="price-range-input form-input rounded-full border-transparent px-4 py-3 placeholder-tb-primary-dark"
										:placeholder="'€ ' + filterData.priceFrom"
										v-model="priceRangeValue[0]"
										@input="clearErrorMsg"
									/>
									<span class="text-tb-black font-extrabold">-</span>
									<input
										type="number"
										class="price-range-input form-input rounded-full border-transparent px-4 py-3 placeholder-tb-primary-dark"
										:placeholder="'€ ' + filterData.priceTo + '+'"
										v-model="priceRangeValue[1]"
										@input="clearErrorMsg"
									/>
								</div>
								<div class="error-wrapper w-full text-center absolute bottom-0">
									<span class="text-red-600">{{errorMsg}}</span>
								</div>
								<div class="flex justify-center w-full px-4">
									<vue-slider
										v-model="priceRangeValue"
										:dotOptions="priceRangeOptions"
										width="100%"
										:min="filterData.priceFrom"
										:max="filterData.priceTo"
										:enableCross="false"
										@error="priceRangeError"
										@change="clearErrorMsg"
										contained="true"
										dotSize="20"
									></vue-slider>
								</div>
							</div>
						</div>
					</transition>
				</div>
				<div class="accordion">
					<div class="accordion-nav flex justify-between gap-5 items-center px-4 select-none py-2">
						<span
							@click="accordionActive.manufacturer = !accordionActive.manufacturer"
							class="flex items-center cursor-pointer w-full"
						>
							<img
								src="../../assets/images/accordion-arrow.svg"
								alt
								v-bind:class="accordionActive.manufacturer?'rotate-90':''"
								class="transition duration-200 transform"
							/>
							<span class="text-tb-black ml-2">Hersteller</span>
						</span>
						<span class="reload-icon cursor-pointer">
							<img src="../../assets/images/reset.svg" class="transition transform duration-200" v-bind:class="{'scale-75': !accordionActive.manufacturer}" alt />
						</span>
					</div>
					<transition name="fade">
						<div v-if="accordionActive.manufacturer" class="accordion-content h-80 overflow-y-hidden">
							<div class="content-wrapper py-1 w-full">
								<div class="manufacturer-search mb-2 px-4">
									<input
										type="text"
										class="form-input rounded-full border-transparent px-4 py-3 placeholder-tb-primary-dark w-full"
										placeholder="Search Hersteller"
									/>
								</div>

								<div class="h-64 overflow-y-auto nice-scroll pl-4 mr-5">
									<label
										v-for="(item, index) in filterData.manufacturer"
										:key="index"
										class="category-check-item flex items-center my-1"
									>
										<input
											type="checkbox"
											name="manufacturer"
											class="form-checkbox rounded-full border-transparent"
											:value="index"
											v-model="checkedFilter.manufacturer"
											id
										/>
										<span class="text-tb-blue text-sm ml-4">{{item.name}} ({{item.products}})</span>
									</label>
								</div>
							</div>
						</div>
					</transition>
				</div>
				<div class="accordion">
					<div class="accordion-nav flex justify-between gap-5 items-center px-4 select-none py-2">
						<span
							@click="accordionActive.screenSize = !accordionActive.screenSize"
							class="flex items-center cursor-pointer w-full"
						>
							<img
								src="../../assets/images/accordion-arrow.svg"
								alt
								v-bind:class="accordionActive.screenSize?'rotate-90':''"
								class="transition duration-200 transform"
							/>
							<span class="text-tb-black ml-2">Bildschirmgröße</span>
						</span>
						<span class="reload-icon cursor-pointer">
							<img src="../../assets/images/reset.svg" class="transition transform duration-200" v-bind:class="{'scale-75': !accordionActive.screenSize}" alt />
						</span>
					</div>
					<transition name="fade">
						<div v-if="accordionActive.screenSize" class="accordion-content h-64 overflow-y-hidden">
							<div class="content-wrapper w-full">
								<div class="h-64 overflow-y-auto nice-scroll pl-4 mr-5">
									<label
										v-for="(item, index) in filterData.screenSize"
										:key="index"
										class="category-check-item flex items-center my-1"
									>
										<input
											type="checkbox"
											name="screensize"
											class="form-checkbox rounded-full border-transparent"
											:value="index"
											v-model="checkedFilter.screenSize"
											id
										/>
										<span class="text-tb-blue text-sm ml-4">{{item.size}} Zoll ({{item.products}})</span>
									</label>
								</div>
							</div>
						</div>
					</transition>
				</div>
				<div class="accordion">
					<div class="accordion-nav flex justify-between gap-5 items-center px-4 select-none py-2">
						<span
							@click="accordionActive.type = !accordionActive.type"
							class="flex items-center cursor-pointer w-full"
						>
							<img
								src="../../assets/images/accordion-arrow.svg"
								alt
								v-bind:class="accordionActive.type?'rotate-90':''"
								class="transition duration-200 transform"
							/>
							<span class="text-tb-black ml-2">Produkttyp</span>
						</span>
						<span class="reload-icon cursor-pointer">
							<img src="../../assets/images/reset.svg" class="transition transform duration-200" v-bind:class="{'scale-75': !accordionActive.type}" alt />
						</span>
					</div>
					<transition name="fade">
						<div v-if="accordionActive.type" class="accordion-content h-64 overflow-y-hidden">
							<div class="content-wrapper w-full">
								<div class="h-64 overflow-y-auto nice-scroll pl-4 mr-5">
									<label
										v-for="(item, index) in filterData.type"
										:key="index"
										class="category-check-item flex items-center my-1"
									>
										<input
											type="checkbox"
											name="type"
											class="form-checkbox rounded-full border-transparent"
											:value="index"
											v-model="checkedFilter.type"
											id
										/>
										<span class="text-tb-blue text-sm ml-4">{{item.name}} ({{item.products}})</span>
									</label>
								</div>
							</div>
						</div>
					</transition>
				</div>
				<div class="accordion">
					<div class="accordion-nav flex justify-between gap-5 items-center px-4 select-none py-2">
						<span
							@click="accordionActive.resolution = !accordionActive.resolution"
							class="flex items-center cursor-pointer w-full"
						>
							<img
								src="../../assets/images/accordion-arrow.svg"
								alt
								v-bind:class="accordionActive.resolution?'rotate-90':''"
								class="transition duration-200 transform"
							/>
							<span class="text-tb-black ml-2">Bildschirmauflösung</span>
						</span>
						<span class="reload-icon cursor-pointer">
							<img src="../../assets/images/reset.svg" class="transition transform duration-200" v-bind:class="{'scale-75': !accordionActive.resolution}" alt />
						</span>
					</div>
					<transition name="fade">
						<div v-if="accordionActive.resolution" class="accordion-content h-32 overflow-y-hidden">
							<div class="content-wrapper w-full">
								<div class="h-32 nice-scroll pl-4 mr-5">
									<label
										v-for="(item, index) in filterData.resolution"
										:key="index"
										class="category-check-item flex items-center my-1"
									>
										<input
											type="checkbox"
											name="resolution"
											class="form-checkbox rounded-full border-transparent"
											:value="index"
											v-model="checkedFilter.resolution"
											id
										/>
										<span
											class="text-tb-blue text-sm ml-4"
										>{{(item.width).toLocaleString()}} x {{(item.height).toLocaleString()}}{{item.class ? ' (' + item.class + ') ' : ''}} ({{item.products}})</span>
									</label>
								</div>
							</div>
						</div>
					</transition>
				</div>
				<div class="accordion">
					<div class="accordion-nav flex justify-between gap-5 items-center px-4 select-none py-2">
						<span
							@click="accordionActive.energySaving = !accordionActive.energySaving"
							class="flex items-center cursor-pointer w-full"
						>
							<img
								src="../../assets/images/accordion-arrow.svg"
								alt
								v-bind:class="accordionActive.energySaving?'rotate-90':''"
								class="transition duration-200 transform"
							/>
							<span class="text-tb-black ml-2">Energieeffizienzklasse</span>
						</span>
						<span class="reload-icon cursor-pointer">
							<img src="../../assets/images/reset.svg" class="transition transform duration-200" v-bind:class="{'scale-75': !accordionActive.energySaving}" alt />
						</span>
					</div>
					<transition name="fade">
						<div v-if="accordionActive.energySaving" class="accordion-content h-64 overflow-y-hidden">
							<div class="content-wrapper w-full">
								<div class="h-64 overflow-y-auto nice-scroll pl-4 mr-5">
									<label
										v-for="(item, index) in filterData.energySaving"
										:key="index"
										class="category-check-item flex items-center my-1"
									>
										<input
											type="checkbox"
											name="energysaving"
											class="form-checkbox rounded-full border-transparent"
											:value="index"
											v-model="checkedFilter.energySaving"
											id
										/>
										<span class="text-tb-blue text-sm ml-4">{{item.name}} ({{item.products}})</span>
									</label>
								</div>
							</div>
						</div>
					</transition>
				</div>
				<div class="accordion">
					<div class="accordion-nav flex justify-between gap-5 items-center px-4 select-none py-2">
						<span
							@click="accordionActive.threeDimension = !accordionActive.threeDimension"
							class="flex items-center cursor-pointer w-full"
						>
							<img
								src="../../assets/images/accordion-arrow.svg"
								alt
								v-bind:class="accordionActive.threeDimension?'rotate-90':''"
								class="transition duration-200 transform"
							/>
							<span class="text-tb-black ml-2">3D-Technologie</span>
						</span>
						<span class="reload-icon cursor-pointer">
							<img src="../../assets/images/reset.svg" class="transition transform duration-200" v-bind:class="{'scale-75': !accordionActive.threeDimension}" alt />
						</span>
					</div>
					<transition name="fade">
						<div v-if="accordionActive.threeDimension" class="accordion-content h-64 overflow-y-hidden">
							<div class="content-wrapper w-full">
								<div class="h-64 overflow-y-auto nice-scroll pl-4 mr-5">
									<label
										v-for="(item, index) in filterData.threeDimension"
										:key="index"
										class="category-check-item flex items-center my-1"
									>
										<input
											type="checkbox"
											name="threedimension"
											class="form-checkbox rounded-full border-transparent"
											:value="index"
											v-model="checkedFilter.threeDimension"
											id
										/>
										<span class="text-tb-blue text-sm ml-4">{{item.name}} ({{item.products}})</span>
									</label>
								</div>
							</div>
						</div>
					</transition>
				</div>
				<div class="accordion">
					<div class="accordion-nav flex justify-between gap-5 items-center px-4 select-none py-2">
						<span
							@click="accordionActive.connection = !accordionActive.connection"
							class="flex items-center cursor-pointer w-full"
						>
							<img
								src="../../assets/images/accordion-arrow.svg"
								alt
								v-bind:class="accordionActive.connection?'rotate-90':''"
								class="transition duration-200 transform"
							/>
							<span class="text-tb-black ml-2">Anschlüsse</span>
						</span>
						<span class="reload-icon cursor-pointer">
							<img src="../../assets/images/reset.svg" class="transition transform duration-200" v-bind:class="{'scale-75': !accordionActive.connection}" alt />
						</span>
					</div>
					<transition name="fade">
						<div v-if="accordionActive.connection" class="accordion-content h-64 overflow-y-hidden">
							<div class="content-wrapper w-full">
								<div class="h-64 overflow-y-auto nice-scroll pl-4 mr-5">
									<label
										v-for="(item, index) in filterData.connection"
										:key="index"
										class="category-check-item flex items-center my-1"
									>
										<input
											type="checkbox"
											name="connection"
											class="form-checkbox rounded-full border-transparent"
											:value="index"
											v-model="checkedFilter.connection"
											id
										/>
										<span class="text-tb-blue text-sm ml-4">{{item.name}} ({{item.products}})</span>
									</label>
								</div>
							</div>
						</div>
					</transition>
				</div>
				<div class="accordion">
					<div class="accordion-nav flex justify-between gap-5 items-center px-4 select-none py-2">
						<span
							@click="accordionActive.weight = !accordionActive.weight"
							class="flex items-center cursor-pointer w-full"
						>
							<img
								src="../../assets/images/accordion-arrow.svg"
								alt
								v-bind:class="accordionActive.weight?'rotate-90':''"
								class="transition duration-200 transform"
							/>
							<span class="text-tb-black ml-2">VESA-Norm</span>
						</span>
						<span class="reload-icon cursor-pointer">
							<img src="../../assets/images/reset.svg" class="transition transform duration-200" v-bind:class="{'scale-75': !accordionActive.weight}" alt />
						</span>
					</div>
					<transition name="fade">
						<div v-if="accordionActive.weight" class="accordion-content h-64 overflow-y-hidden">
							<div class="content-wrapper w-full">
								<div class="h-64 overflow-y-auto nice-scroll pl-4 mr-5">
									<label
										v-for="(item, index) in filterData.weight"
										:key="index"
										class="category-check-item flex items-center my-1"
									>
										<input
											type="checkbox"
											name="weight"
											class="form-checkbox rounded-full border-transparent"
											:value="index"
											v-model="checkedFilter.weight"
											id
										/>
										<span class="text-tb-blue text-sm ml-4">{{item.name}} ({{item.products}})</span>
									</label>
								</div>
							</div>
						</div>
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import filterDataJson from "../../json/filterData.json";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

const ERROR_TYPE = {
	VALUE: 1,
	INTERVAL: 2,
	MIN: 3,
	MAX: 4,
	ORDER: 5,
};

export default {
	name: "FilterSidebar",
	data() {
		return {
			priceRangeOptions: {
				tooltip: "none",
				style: {
					"border-width": "6px",
					"border-color": "#3099F2",
					"box-shadow": "none",
				},
			},
			priceRangeValue: [filterDataJson.priceFrom, filterDataJson.priceTo],
			filterData: filterDataJson,
			accordionActive: {
				priceRange: true,
				manufacturer: true,
				screenSize: false,
				type: false,
				resolution: false,
				energySaving: false,
				threeDimension: false,
				connection: false,
				weight: false,
			},
			checkedFilter: {
				manufacturer: [],
				screenSize: [],
				type: [],
				resolution: [],
				energySaving: [],
				threeDimension: [],
				connection: [],
				weight: [],
			},
			errorMsg: "",
		};
	},
	components: {
		VueSlider,
	},
	methods: {
		priceRangeError(type, msg) {
			switch (type) {
				case ERROR_TYPE.MIN:
					msg = "Minimum value is " + this.filterData.priceFrom;
					break;
				case ERROR_TYPE.MAX:
					msg = "Maximum value is " + this.filterData.priceTo;
					break;
			}
			this.errorMsg = msg;
		},
		clearErrorMsg() {
			this.errorMsg = "";
		},
	},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	height: 0 !important;
}
.price-range-input {
	width: 45%;
}
.reload-icon img {
	transform-origin: 100% 50%;
	height: 17px;
	width: 17px;
}
.h-80 {
	height: 320px;
}
</style>