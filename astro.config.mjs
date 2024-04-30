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
					"label": "快速开始",
					"items": [
						{
						"label": "使用云服务",
						"link": "/getting-started/cloud-service"
						},
						{
						"label": "Helm 部署",
						"link": "/getting-started/helm"
						}
					]
				},
				{
					"label": "核心理念",
					"items": [
						{
						"label": "大模型应用生命周期",
						"link": "/core-concepts/application-status"
						},
						{
						"label": "场景为先",
						"link": "/core-concepts/scenario-first"
						},
						{
						"label": "流程驱动",
						"link": "/core-concepts/flow-driven"
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
					"link": "/scenarios/simp-dog-wechatbot-simulator"
					}
					]
				},
				{
					"label": "应用",
					"items": [
						{
						"label": "应用构建",
						"link": "/applications/application-building"
						},
						{
						"label": "应用集成",
						"link": "/applications/application-integration"
						},
						{
						"label": "应用可观测性",
						"link": "/applications/application-observability"
						},
						{
						"label": "应用智能",
						"link": "/applications/application-intelligence"
						},
						{
						"label": "典型应用示例",
						"link": "/applications/application-examples"
						}
					]
				},
				{
					"label": "流程",
					"items": [
						{
						"label": "流程声明式语法",
						"link": "/flow/flow-schema"
						},
						{
						"label": "流程可视化配置",
						"link": "/flow/visualization-configuration"
						},
						{
						"label": "流程控制",
						"link": "/flow/flow-control"
						},
						{
						"label": "流程智能",
						"link": "/flow/flow-intelligence"
						}
					]
				},
				{
					"label": "工具",
					"items": [
						{
						"label": "工具声明式语法",
						"link": "/tools/declarative-syntax"
						},
						{
						"label": "工具列表",
						"link": "/tools/tool-list"
						},
						{
						"label": "预置工具（大语言模型）",
						"link": "/tools/preset-tools-large-language-models"
						},
						{
						"label": "预置工具（多模态模型）",
						"link": "/tools/preset-tools-multimodal-models"
						},
						{
						"label": "预置工具（数据处理）",
						"link": "/tools/preset-tools-data-processing"
						},
						{
						"label": "预置工具（私有数据搜索）",
						"link": "/tools/preset-tools-private-data-search"
						},
						{
						"label": "预置工具（文件处理）",
						"link": "/tools/preset-tools-file-handling"
						},
						{
						"label": "预置工具（自动化）",
						"link": "/tools/preset-tools-automation"
						},
						{
						"label": "预置工具（模型训练）",
						"link": "/tools/preset-tools-model-training"
						},
						{
						"label": "预置工具（模型测评）",
						"link": "/tools/preset-tools-model-evaluation"
						},
						{
						"label": "使用自定义工具",
						"link": "/tools/custom-tools-use"
						},
						{
						"label": "开发自定义工具",
						"link": "/tools/custom-tools"
						}
					]
				},
				{
					"label": "组织",
					"items": [
						{
						"label": "身份",
						"link": "/org/identity"
						},
						{
						"label": "数据隔离",
						"link": "/org/data-isolation"
						},
						{
						"label": "多人协同",
						"link": "/org/multi-person-collaboration"
						},
						{
						"label": "权限控制",
						"link": "/org/permission-control"
						}
					]
					},
				{
						"label": "容器",
						"items": [
						{
						"label": "工具镜像",
						"link": "/container/tool-images"
						},
						{
						"label": "服务镜像",
						"link": "/container/service-images"
						},
						{
						"label": "中间件镜像",
						"link": "/container/middleware-images"
						}
						]
					},
				{
						"label": "集群",
						"items": [
						{
						"label": "构建云原生集群",
						"link": "/cluster/building-cloud-native-cluster"
						},
						{
						"label": "Helm 部署和更新",
						"link": "/cluster/helm-deploy-update"
						},
						{
						"label": "多副本负载均衡",
						"link": "/cluster/multiple-replica-load-balancing"
						},
						{
						"label": "多副本弹性扩容",
						"link": "/cluster/multiple-replica-elastic-expansion"
						}
						]
				},
				{
					"label": "算力",
					"link": "/computing-power"
				},
				{
					"label": "扩展阅读",
					"link": "/further-reading"
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
