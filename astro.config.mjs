import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import tailwind from '@astrojs/tailwind';

const site = 'https://inf-monkeys.github.io';
const locales = {
	en: {
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
				src: 'src/assets/favicon.png',
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
				github: 'https://github.com/inf-monkeys/monkeys',
			},
			defaultLocale: 'zh-cn',
			locales,
			sidebar: [
				{
					"label": "目录",
					"items": [
					{
					"label": "快速开始",
					"items": [
					{
					"label": "使用云服务",
					"link": "/getting-started/cloud-service"
					},
					{
					"label": "Helm 部署",
					"link": "/getting-started/helm-deployment"
					///installation/helm
					}
					]
					},
					{
					"label": "核心理念",
					"items": [
					{
					"label": "大模型应用现状",
					"link": "/core-concepts/application-status"
					},
					{
					"label": "场景为先",
					"link": "/core-concepts/scenario-first"
					},
					{
					"label": "流程驱动",
					"link": "/core-concepts/process-driven"
					},
					{
					"label": "持续迭代",
					"link": "/core-concepts/continuous-iteration"
					},
					{
					"label": "云原生高可用",
					"link": "/core-concepts/cloud-native"
					}
					]
					},
					{
					"label": "场景",
					"items": [
					{
					"label": "微信舔狗机器人",
					"link": "/scenarios/wechat-dog-robot"
					///showcases/simp-dog-wechatbot-simulator
					}
					]
					},
					{
					"label": "迭代",
					"link": "/iteration"
					},
					{
					"label": "应用",
					"link": "/application"
					},
					{
					"label": "流程",
					"link": "/process"
					},
					{
					"label": "工具",
					"items": [
					{
					"label": "预置工具",
					"link": "/tools/preset-tools"
					},
					{
					"label": "开发自定义工具",
					"link": "/tools/custom-tools"
					///build-tools/introduction
					}
					]
					},
					{
					"label": "组织",
					"link": "/organization"
					},
					{
					"label": "容器",
					"link": "/container"
					},
					{
					"label": "算力",
					"link": "/computing-power"
					},
					{
					"label": "扩展阅读",
					"link": "/further-reading"
					}
					]
				}
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
		remotePatterns: [{ protocol: "https" }],
	},
});
