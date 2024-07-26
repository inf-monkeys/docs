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
					label: 'Getting Started',
					translations: {
						'zh-CN': '快速开始',
					},
					items: [
						{
							label: 'Using Cloud Services',
							link: '/getting-started/cloud-service',
							translations: {
								'zh-CN': '使用云服务',
							},
						},
						{
							label: 'Using Helm Chart for One-Click Installation',
							link: '/getting-started/helm',
							translations: {
								'zh-CN': 'Helm 部署',
							},
						},
						{
							label: 'Using Docker Compose for One-Click Installation',
							link: '/getting-started/docker-compose',
							translations: {
								'zh-CN': 'Docker Compose 部署',
							},
						},
					],
				},
				{
					label: 'Applications',
					translations: {
						'zh-CN': '应用',
					},
					items: [
						{
							label: 'Application Building',
							link: '/applications/application-building',
							translations: {
								'zh-CN': '应用构建',
							},
						},
						{
							label: 'Application Integration',
							link: '/applications/application-integration',
							translations: {
								'zh-CN': '应用集成',
							},
						},
						{
							label: 'Application Observability',
							link: '/applications/application-observability',
							translations: {
								'zh-CN': '应用可观测性',
							},
						},
						{
							label: 'Application Intelligence',
							link: '/applications/application-intelligence',
							translations: {
								'zh-CN': '应用智能',
							},
						},
						{
							label: 'Application Examples',
							link: '/applications/application-examples',
							translations: {
								'zh-CN': '典型应用示例',
							},
						},
					],
				},
				{
					label: 'Flow',
					translations: {
						'zh-CN': '流程',
					},
					items: [
						{
							label: 'Flow Schema',
							link: '/flow/flow-schema',
							translations: {
								'zh-CN': '流程声明式语法',
							},
						},
						{
							label: 'Visualization Configuration',
							link: '/flow/visualization-configuration',
							translations: {
								'zh-CN': '流程可视化配置',
							},
						},
						{
							label: 'Flow Control',
							link: '/flow/flow-control',
							translations: {
								'zh-CN': '流程控制',
							},
						},
						{
							label: 'Flow Intelligence',
							link: '/flow/flow-intelligence',
							translations: {
								'zh-CN': '流程智能',
							},
						},
					],
				},
				{
					label: 'Tools',
					translations: {
						'zh-CN': '工具',
					},
					items: [
						{
							label: 'Declarative Syntax',
							link: '/tools/declarative-syntax',
							translations: {
								'zh-CN': '工具声明式语法',
							},
						},
						{
							label: 'Tool List',
							link: '/tools/tool-list',
							translations: {
								'zh-CN': '工具列表',
							},
						},
						{
							label: 'Built-in Tools (Large Language Models)',
							link: '/tools/builtin-tools-large-language-models',
							translations: {
								'zh-CN': '预置工具（大语言模型）',
							},
						},
						{
							label: 'Built-in Tools (Multimodal Models)',
							link: '/tools/builtin-tools-multimodal-models',
							translations: {
								'zh-CN': '预置工具（多模态模型）',
							},
						},
						{
							label: 'Built-in Tools (Data Processing)',
							link: '/tools/builtin-tools-data-processing',
							translations: {
								'zh-CN': '预置工具（数据处理）',
							},
						},
						{
							label: 'Built-in Tools (Private Data Search)',
							link: '/tools/builtin-tools-private-data-search',
							translations: {
								'zh-CN': '预置工具（私有数据搜索）',
							},
						},
						{
							label: 'Built-in Tools (File Handling)',
							link: '/tools/builtin-tools-file-handling',
							translations: {
								'zh-CN': '预置工具（文件处理）',
							},
						},
						{
							label: 'Built-in Tools (Automation)',
							link: '/tools/builtin-tools-automation',
							translations: {
								'zh-CN': '预置工具（自动化）',
							},
						},
						{
							label: 'Built-in Tools (Model Training)',
							link: '/tools/builtin-tools-model-training',
							translations: {
								'zh-CN': '预置工具（模型训练）',
							},
						},
						{
							label: 'Built-in Tools (Model Evaluation)',
							link: '/tools/builtin-tools-model-evaluation',
							translations: {
								'zh-CN': '预置工具（模型测评）',
							},
						},
						{
							label: 'Use Custom Tools',
							link: '/tools/use-custom-tools',
							translations: {
								'zh-CN': '使用自定义工具',
							},
						},
						{
							label: 'Build Custom Tools',
							link: '/tools/build-custom-tools',
							translations: {
								'zh-CN': '开发自定义工具',
							},
						},
						{
							label: 'Others',
							items: [
								{
									label: 'How to Get Xiaohongshu Cookie',
									link: '/tools/others/get-xiaohongshu-cookie',
									translations: {
										'zh-CN': '如何获取小红书 Cookie',
									},
								},
							]
						}
					],
				},
				{
					label: 'Scenarios',
					translations: {
						'zh-CN': '场景',
					},
					items: [
						{
							label: 'WeChat Simp Dog Bot',
							link: '/scenarios/simp-dog-wechatbot-simulator',
							translations: {
								'zh-CN': '微信舔狗机器人',
							},
						},
					],
				},
				{
					label: 'Organization',
					translations: {
						'zh-CN': '组织',
					},
					items: [
						{
							label: 'Identity',
							link: '/org/identity',
							translations: {
								'zh-CN': '身份',
							},
						},
						{
							label: 'Data Isolation',
							link: '/org/data-isolation',
							translations: {
								'zh-CN': '数据隔离',
							},
						},
						{
							label: 'Multi-Person Collaboration',
							link: '/org/multi-person-collaboration',
							translations: {
								'zh-CN': '多人协同',
							},
						},
						{
							label: 'Permission Control',
							link: '/org/permission-control',
							translations: {
								'zh-CN': '权限控制',
							},
						},
					],
				},
				{
					label: 'Container',
					translations: {
						'zh-CN': '容器',
					},
					items: [
						{
							label: 'Tool Images',
							link: '/container/tool-images',
							translations: {
								'zh-CN': '工具镜像',
							},
						},
						{
							label: 'Service Images',
							link: '/container/service-images',
							translations: {
								'zh-CN': '服务镜像',
							},
						},
						{
							label: 'Middleware Images',
							link: '/container/middleware-images',
							translations: {
								'zh-CN': '中间件镜像',
							},
						},
					],
				},
				{
					label: 'Cluster',
					translations: {
						'zh-CN': '集群',
					},
					items: [
						{
							label: 'Building Cloud Native Cluster',
							link: '/cluster/building-cloud-native-cluster',
							translations: {
								'zh-CN': '构建云原生集群',
							},
						},
						{
							label: 'Helm Deploy and Update',
							link: '/cluster/helm-deploy-update',
							translations: {
								'zh-CN': 'Helm 部署和更新',
							},
						},
						{
							label: 'Multiple Replica Load Balancing',
							link: '/cluster/multiple-replica-load-balancing',
							translations: {
								'zh-CN': '多副本负载均衡',
							},
						},
						{
							label: 'Service Monitoring',
							translations: {
								'zh-CN': '服务监控',
							},
							items: [
								{
									label: 'Prometheus & Grafana',
									link: '/cluster/monitoring/prometheus-grafana',
									translations: {
										'zh-CN': 'Prometheus & Grafana',
									},
								},
							]
						},
					],
				},
				{
					label: 'Computing Power',
					link: '/computing-power',
					translations: {
						'zh-CN': '算力',
					},
				},
				{
					label: 'Further Reading',
					translations: {
						'zh-CN': '扩展阅读',
					},
					items: [
						{
							label: 'Third-Party Tool Integration',
							translations: {
								'zh-CN': '第三方工具集成',
							},
							items: [
								{
									label: 'Lobe-Chat',
									link: '/others/integrations/lobe-chat',
									translations: {
										'zh-CN': 'Lobe-Chat',
									},
								},
								{
									label: 'One API',
									link: '/others/integrations/one-api',
									translations: {
										'zh-CN': 'One API',
									},
								}
							]
						},
					]
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
		remotePatterns: [{ protocol: 'https' }],
	},
});
