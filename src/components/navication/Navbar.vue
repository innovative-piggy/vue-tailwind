<template>
	<div class="navbar-wrapper bg-tb-primary h-20 xl:h-24 w-full px-3">
		<div class="mx-auto h-full container relative">
			<div class="flex items-center justify-between h-full">
				<div class="navbar-logo-wrapper items-center w-1/4 max-w-xs pr-3">
					<router-link to="/">
						<img src="../../assets/images/site-logo.svg" alt class="logo-checkbox" />
					</router-link>
				</div>
				<div class="navbar-search-wrapper w-1/2">
					<SearchWidget class="w-full z-20" />
				</div>
				<div class="navbar-cat-btn-wrapper">
					<div
						ref="categoryOnBtn"
						v-on:click="toggleCategory"
						v-bind:class="[showMenu ? 'bg-white' : 'bg-tb-blue hover:bg-tb-blue-dark']"
						class="cat-btn rounded-full px-5 xl:px-8 flex items-center cursor-pointer select-none transition lg:py-2"
					>
						<span class="menu-ico-wrapper">
							<span v-if="showMenu" class="icon-menu-blue"></span>
							<span v-else class="icon-menu"></span>
						</span>
						<span
							v-bind:class="[
                                showMenu ? 'text-tb-blue' : 'text-white',
                            ]"
							class="font-bold text-base xl:text-lg ml-2"
						>Categories</span>
					</div>
				</div>
				<div v-if="!isUserLoggedIn" class="navbar-login-btn-wrapper">
					<router-link to="/login">
						<div class="login-btn flex items-center">
							<span class="icn-login icomoon-blue"></span>
							<span class="text-tb-blue font-bold text-lg ml-1">Login</span>
						</div>
					</router-link>
				</div>
				<div
					v-else
					@mouseenter="userDropDownOpen = true"
					@mouseleave="userDropDownOpen = false"
					class="navbar-user-btn-wrapper relative z-20"
				>
					<div ref="userDropdownBtn" class="user-btn flex items-center cursor-pointer">
						<span class="user-ico-wrapper rounded-full"></span>
						<span class="text-tb-blue text-lg ml-2">Lek S</span>
						<img src="../../assets/images/arrow-blue.svg" class="ml-3" alt />
					</div>
					<UserDropdown
						v-if="userDropDownOpen === true"
						:userBtnRef="$refs.userDropdownBtn"
						@logout="isUserLoggedIn=false"
						@close="userDropDownOpen =false"
						class="absolute right-0 transform pt-3 -translate-y-px"
					/>
				</div>
			</div>
			<transition name="fade">
				<CategoryMenu
					v-if="showMenu"
					:open="showMenu"
					@close="showMenu = false"
					:mainRef="$refs.categoryOnBtn"
					class="megamenu absolute top-0 left-0 transform translate-y-20 mt-1 xl:mt-2 z-20"
				></CategoryMenu>
			</transition>
		</div>
	</div>
</template>

<script>
import SearchWidget from "../widgets/SearchWidget";
import CategoryMenu from "./CategoryMenu";
import UserDropdown from "./UserDropdown";

export default {
	name: "Navbar",
	components: {
		SearchWidget,
		CategoryMenu,
		UserDropdown
	},
	data() {
		return {
			showMenu: false,
			isUserLoggedIn: true,
			userDropDownOpen: false
		};
	},
	methods: {
		toggleCategory: function() {
			this.showMenu = !this.showMenu;
		},
		toggleDropdown() {
			this.userDropDownOpen = this.userDropDownOpen ? false : true;
		}
	}
};
</script>

<style scoped>
.fade-enter-active {
	transition: 0.2s;
	transition-delay: 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.navbar-cat-btn-wrapper .cat-btn {
	padding-bottom: 11px;
	padding-top: 10px;
}
.user-ico-wrapper {
	height: 26px;
	width: 26px;
	background-image: url("../../assets/images/profile.jpg");
	background-size: cover;
}
@media (max-width: 1280px) {
	.navbar-cat-btn-wrapper .cat-btn {
		padding-top: 8px;
		padding-bottom: 7px;
	}
}
</style>
