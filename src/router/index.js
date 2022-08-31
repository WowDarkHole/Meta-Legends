import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import TermsConditions from '../views/TermsConditions.vue';
import MysteryUA1 from '../views/MysteryUA1.vue';
import MysteryUA2 from '../views/MysteryUA2.vue';
import MysteryUA3 from '../views/MysteryUA3.vue';
import MysteryUA4 from '../views/MysteryUA4.vue';
import MysteryUO2 from '../views/MysteryUO2.vue';
import MysteryUO3 from '../views/MysteryUO3.vue';
import MysteryUC1 from "../views/MysteryUC1.vue";
import MysteryUD1 from "../views/MysteryUD1.vue";
import Congrats from '../views/Congrats.vue';
// import Mint from '../views/Mint.vue';
import Mint2 from '../views/Mint-v2.vue';
import PressRelease from '../views/PressRelease.vue';

import BlogpostList from '../views/blogposts/BlogpostList.vue'
import Blogpost1 from '../views/blogposts/blogpost-list/Blogpost-1.vue';
import Blogpost2 from '../views/blogposts/blogpost-list/Blogpost-2.vue';
import Blogpost3 from '../views/blogposts/blogpost-list/Blogpost-3.vue';
import Blogpost4 from '../views/blogposts/blogpost-list/Blogpost-4.vue';
import Blogpost5 from '../views/blogposts/blogpost-list/Blogpost-5.vue';
import Blogpost6 from '../views/blogposts/blogpost-list/Blogpost-6.vue';

const blogpostList = [
    Blogpost1,
]

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: `/${process.env.VUE_APP_UA1}`,
		name: "MysteryUA1",
		component: MysteryUA1,
	},
	{
		path: `/${process.env.VUE_APP_UA2}`,
		name: "MysteryUA2",
		component: MysteryUA2,
	},
	{
		path: `/${process.env.VUE_APP_UA3}`,
		name: "MysteryUA3",
		component: MysteryUA3,
	},
	{
		path: `/${process.env.VUE_APP_UA4}`,
		name: "MysteryUA4",
		component: MysteryUA4,
	},
	{
		path: `/first-hero`,
		name: "Congrats",
		component: Congrats,
	},
	{
		path: "/online-easter-egg-2",
		name: "MysteryUO2",
		component: MysteryUO2,
	},
	{
		path: "/online-easter-egg-3",
		name: "MysteryUO3",
		component: MysteryUO3,
	},
	{
		path: "/celestial",
		name: "MysteryUD1",
		component: MysteryUD1,
	},
	{
		path: "/blog",
		name: "BlogpostList",
		component: BlogpostList,
	},
	{
		path: "/blog/blogpost-1",
		component: Blogpost1,
	},
	{
		path: "/blog/blogpost-2",
		component: Blogpost2,
	},
	{
		path: "/blog/blogpost-3",
		component: Blogpost3,
	},
	{
		path: "/blog/blogpost-4",
		component: Blogpost4,
	},
	{
		path: "/blog/blogpost-5",
		component: Blogpost5,
	},
	{
		path: "/blog/blogpost-6",
		component: Blogpost6,
	},
	{
		path: "/terms-and-conditions",
		component: TermsConditions,
	},
	{
		path: "/press-release",
		component: PressRelease,
	},
	// // {
	// // 	path: "/mint-test-meta-legends-web3",
	// // 	component: Mint2,
	// // },
	// {
	// 	path: "/mint",
	// 	component: Mint2,
	// },
	{
		path: "/:pathMatch(.*)*",
		redirect: () => {
			return {path: "/"};
		},
	},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;