import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import tailwind from '@astrojs/tailwind';

const site = 'https://inf-monkeys.github.io';
const locales = {
	root: {
		label: 'English',
		lang: 'en',
	},
	'zh-cn': {
		label: '简体中文',
		lang: 'zh-CN',
	},
};

// https://astro.build/config
export default defineConfig({
	site,
	base: '/docs',
	integrations: [
		starlight({
			expressiveCode: {
				themes: ['dark-plus', 'github-light'],
			},
			logo: {
				light: 'src/assets/favicon.png',
				dark: 'src/assets/favicon.png',
			},
			title: 'Monkeys',
			editLink: {
				baseUrl: 'https://github.com/monkeys/docs',
			},
			tagline: 'Build Workflow-Centric AI applications',
			favicon: 'favicon.png',
			head: [
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: site + 'og.png?v=1' },
				},
				{
					tag: 'meta',
					attrs: { property: 'twitter:image', content: site + 'og.png?v=1' },
				},
			],
			customCss: ['src/tailwind.css', 'src/styles/landing.css', '@fontsource-variable/figtree'],
			social: {
				github: 'https://github.com/monkeys/monkeys',
			},
			defaultLocale: 'root',
			locales,
			sidebar: [
				{
					label: '介绍',
					items: [
						{
							label: '快速开始',
							link: '/getting-started',
						},
						{
							label: '为什么选择 Monkeys?',
							link: '/why-monkeys',
						},
						{
							label: 'Monkeys 核心概念',
							link: '/monkeys-concepts',
						},
						{
							label: 'Monkeys 架构设计',
							link: '/architecture',
						},
					],
				},
				{
					label: '安装',
					items: [
						{
							label: 'Helm chart 部署',
							link: '/installation/helm',
						},
						{
							label: '本地源码启动',
							link: '/installation/local',
						},
					],
				},
				{
					label: '应用示例',
					items: [
						{
							label: '知识库问答机器人（RAG）',
							link: '/showcases/qabot-based-on-knowledgebase',
						},
						{
							label: '微信舔狗🐶机器人🤡',
							link: '/showcases/simp-dog-wechatbot-simulator',
						},
					],
				},
				{
					label: '使用手册',
					items: [
						{
							label: '工作流',
							link: '/workflows',
						},
						{
							label: '知识库',
							link: '/knowledge-base',
						},
					],
				},
			],
			plugins: [
				starlightLinksValidator({
					errorOnFallbackPages: false,
					errorOnInconsistentLocale: true,
				}),
			],
		}),
		tailwind({ applyBaseStyles: false }),
	],
	image: {
		service: passthroughImageService(),
	},
});
