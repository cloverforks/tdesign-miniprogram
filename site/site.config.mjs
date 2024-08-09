export const docs = [
  {
    title: '开始',
    titleEn: 'Start',
    type: 'document', // 普通文档
    children: [
      {
        title: '快速开始',
        titleEn: 'Getting Started',
        name: 'getting-started',
        meta: { docType: 'explain' },
        path: '/miniprogram/getting-started',
        component: () => import('@docs/getting-started.md'),
        componentEn: () => import('@docs/getting-started.en-US.md'),
      },
      {
        title: '贡献指南',
        titleEn: 'CONTRIBUTING',
        name: 'develop',
        meta: { docType: 'explain' },
        path: '/miniprogram/develop',
        component: () => import('@/../CONTRIBUTING.md'),
      },
      {
        title: '谁在用',
        titleEn: 'USED',
        name: 'used',
        meta: { docType: 'explain' },
        path: '/miniprogram/used',
        component: () => import('@pages/used.vue'),
      },
      {
        title: '更新日志',
        titleEn: 'CHANGELOG',
        name: 'changelog',
        meta: { docType: 'explain' },
        path: '/miniprogram/changelog',
        component: () => import('~/CHANGELOG.md'),
      },
      {
        title: '样式覆盖',
        titleEn: 'Custom Style',
        name: 'custom-style',
        meta: { docType: 'explain' },
        path: '/miniprogram/custom-style',
        component: () => import('@docs/custom-style.md'),
      },
      {
        title: '自定义主题',
        titleEn: 'Custom Theme',
        name: 'custom-theme',
        meta: { docType: 'explain' },
        path: '/miniprogram/custom-theme',
        component: () => import('@docs/custom-theme.md'),
      },
      {
        title: '组件概览',
        titleEn: 'Overview',
        name: 'overview',
        meta: { docType: 'explain' },
        path: '/miniprogram/overview',
        component: () => import('@docs/overview.md'),
        componentEn: () => import('@docs/overview.en-US.md'),
      },
    ],
  },
  {
    title: '全局配置',
    titleEn: 'Global Config',
    type: 'document',
    children: [
      {
        title: '深色模式',
        titleEn: 'Dark Mode',
        name: 'dark-mode',
        meta: { docType: 'explain' },
        path: '/miniprogram/dark-mode',
        component: () => import('@docs/dark-mode.md'),
      },
    ],
  },
  {
    title: '基础',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Button 按钮',
        titleEn: 'Button',
        name: 'button',
        meta: { docType: 'base' },
        path: '/miniprogram/components/button',
        component: () => import('@/button/README.md'),
        componentEn: () => import('@/button/README.en-US.md'),
      },
      {
        title: 'Divider 分割线',
        titleEn: 'Divider',
        name: 'divider',
        meta: { docType: 'data' },
        path: '/miniprogram/components/divider',
        component: () => import('@/divider/README.md'),
      },
      {
        title: 'Fab 悬浮按钮',
        titleEn: 'Fab',
        name: 'fab',
        meta: { docType: 'form' },
        path: '/miniprogram/components/fab',
        component: () => import('@/fab/README.md'),
      },
      {
        title: 'Icon 图标',
        titleEn: 'Icon',
        name: 'icon',
        meta: { docType: 'base' },
        path: '/miniprogram/components/icon',
        component: () => import('@/icon/README.md'),
      },
      {
        title: 'Layout 布局',
        titleEn: 'Layout',
        name: 'layout',
        meta: { docType: 'base' },
        path: '/miniprogram/components/col',
        component: () => import('@/col/README.md'),
      },
      {
        title: 'Link 链接',
        titleEn: 'Link',
        name: 'link',
        meta: { docType: 'base' },
        path: '/miniprogram/components/link',
        component: () => import('@/link/README.md'),
      },
    ],
  },
  {
    title: '导航',
    type: 'component',
    children: [
      {
        title: 'BackTop 返回顶部',
        titleEn: 'BackTop',
        name: 'back-top',
        meta: { docType: 'navigation' },
        path: '/miniprogram/components/back-top',
        component: () => import('@/back-top/README.md'),
      },
      {
        title: 'Drawer 抽屉',
        titleEn: 'Drawer',
        name: 'drawer',
        meta: { docType: 'navigation' },
        path: '/miniprogram/components/drawer',
        component: () => import('@/drawer/README.md'),
      },
      {
        title: 'Indexes 索引',
        titleEn: 'Indexes',
        name: 'indexes',
        meta: { docType: 'navigation' },
        path: '/miniprogram/components/indexes',
        component: () => import('@/indexes/README.md'),
      },
      {
        title: 'Navbar 导航栏',
        titleEn: 'Navbar',
        name: 'navbar',
        meta: { docType: 'navigation' },
        path: '/miniprogram/components/navbar',
        component: () => import('@/navbar/README.md'),
      },
      {
        title: 'SideBar 侧边栏',
        titleEn: 'SideBar',
        name: 'sidebar',
        meta: { docType: 'navigation' },
        path: '/miniprogram/components/side-bar',
        component: () => import('@/side-bar/README.md'),
      },
      {
        title: 'Steps 步骤条',
        titleEn: 'Steps',
        name: 'steps',
        meta: { docType: 'navigation' },
        path: '/miniprogram/components/steps',
        component: () => import('@/steps/README.md'),
      },
      {
        title: 'TabBar 标签栏',
        titleEn: 'TabBar',
        name: 'tabbar',
        meta: { docType: 'navigation' },
        path: '/miniprogram/components/tab-bar',
        component: () => import('@/tab-bar/README.md'),
      },
      {
        title: 'Tabs 选项卡',
        titleEn: 'Tabs',
        name: 'tabs',
        meta: { docType: 'navigation' },
        path: '/miniprogram/components/tabs',
        component: () => import('@/tabs/README.md'),
      },
    ],
  },
  {
    title: '输入',
    type: 'component',
    children: [
      {
        title: 'Calendar 日历',
        titleEn: 'Calendar',
        name: 'calendar',
        meta: { docType: 'form' },
        path: '/miniprogram/components/calendar',
        component: () => import('@/calendar/README.md'),
      },
      {
        title: 'Cascader 级联选择器',
        titleEn: 'Cascader',
        name: 'cascader',
        meta: { docType: 'form' },
        path: '/miniprogram/components/cascader',
        component: () => import('@/cascader/README.md'),
      },
      {
        title: 'CheckBox 多选框',
        titleEn: 'CheckBox',
        name: 'checkbox',
        meta: { docType: 'form' },
        path: '/miniprogram/components/checkbox',
        component: () => import('@/checkbox/README.md'),
      },
      {
        title: 'DateTimePicker 时间选择器',
        titleEn: 'DateTimePicker',
        name: 'dateTimePicker',
        meta: { docType: 'form' },
        path: '/miniprogram/components/date-time-picker',
        component: () => import('@/date-time-picker/README.md'),
      },
      {
        title: 'Input 输入框',
        titleEn: 'Input',
        name: 'input',
        meta: { docType: 'form' },
        path: '/miniprogram/components/input',
        component: () => import('@/input/README.md'),
      },
      {
        title: 'Picker 选择器',
        titleEn: 'Picker',
        name: 'picker',
        meta: { docType: 'form' },
        path: '/miniprogram/components/picker',
        component: () => import('@/picker/README.md'),
      },
      {
        title: 'Radio 单选框',
        titleEn: 'Radio',
        name: 'radio',
        meta: { docType: 'form' },
        path: '/miniprogram/components/radio',
        component: () => import('@/radio/README.md'),
      },
      {
        title: 'Rate 评分',
        titleEn: 'Rate',
        name: 'rate',
        meta: { docType: 'form' },
        path: '/miniprogram/components/rate',
        component: () => import('@/rate/README.md'),
      },
      {
        title: 'Search 搜索框',
        titleEn: 'Search',
        name: 'search',
        meta: { docType: 'form' },
        path: '/miniprogram/components/search',
        component: () => import('@/search/README.md'),
      },
      {
        title: 'Slider 滑动选择器',
        titleEn: 'Slider',
        name: 'slider',
        meta: { docType: 'form' },
        path: '/miniprogram/components/slider',
        component: () => import('@/slider/README.md'),
      },
      {
        title: 'Stepper 步进器',
        titleEn: 'Stepper',
        name: 'stepper',
        meta: { docType: 'form' },
        path: '/miniprogram/components/stepper',
        component: () => import('@/stepper/README.md'),
      },
      {
        title: 'Switch 开关',
        titleEn: 'Switch',
        name: 'switch',
        meta: { docType: 'form' },
        path: '/miniprogram/components/switch',
        component: () => import('@/switch/README.md'),
      },
      {
        title: 'Textarea 多行文本框',
        titleEn: 'Textarea',
        name: 'textarea',
        meta: { docType: 'form' },
        path: '/miniprogram/components/textarea',
        component: () => import('@/textarea/README.md'),
      },
      {
        title: 'TreeSelect 树形选择',
        titleEn: 'TreeSelect',
        name: 'treeSelect',
        meta: { docType: 'form' },
        path: '/miniprogram/components/tree-select',
        component: () => import('@/tree-select/README.md'),
      },
      {
        title: 'Upload 上传',
        titleEn: 'Upload',
        name: 'upload',
        meta: { docType: 'form' },
        path: '/miniprogram/components/upload',
        component: () => import('@/upload/README.md'),
      },
    ],
  },
  {
    title: '数据展示',
    type: 'component',
    children: [
      {
        title: 'Avatar 头像',
        titleEn: 'Avatar',
        name: 'avatar',
        meta: { docType: 'data' },
        path: '/miniprogram/components/avatar',
        component: () => import('@/avatar/README.md'),
      },
      {
        title: 'Badge 徽标',
        titleEn: 'Badge',
        name: 'badge',
        meta: { docType: 'data' },
        path: '/miniprogram/components/badge',
        component: () => import('@/badge/README.md'),
      },
      {
        title: 'Cell 单元格',
        titleEn: 'Cell',
        name: 'cell',
        meta: { docType: 'data' },
        path: '/miniprogram/components/cell',
        component: () => import('@/cell/README.md'),
      },
      {
        title: 'Collapse 折叠面板',
        titleEn: 'Collapse',
        name: 'collapse',
        meta: { docType: 'data' },
        path: '/miniprogram/components/collapse',
        component: () => import('@/collapse/README.md'),
      },
      {
        title: 'CountDown 倒计时',
        titleEn: 'CountDown',
        name: 'countdown',
        meta: { docType: 'data' },
        path: '/miniprogram/components/count-down',
        component: () => import('@/count-down/README.md'),
      },
      {
        title: 'Empty 空状态',
        titleEn: 'Empty',
        name: 'empty',
        meta: { docType: 'data' },
        path: '/miniprogram/components/empty',
        component: () => import('@/empty/README.md'),
      },
      {
        title: 'Footer 页脚',
        titleEn: 'Footer',
        name: 'footer',
        meta: { docType: 'data' },
        path: '/miniprogram/components/footer',
        component: () => import('@/footer/README.md'),
      },
      {
        title: 'Image 图片',
        titleEn: 'Image',
        name: 'image',
        meta: { docType: 'data' },
        path: '/miniprogram/components/image',
        component: () => import('@/image/README.md'),
      },
      {
        title: 'Grid 宫格',
        titleEn: 'Grid',
        name: 'grid',
        meta: { docType: 'data' },
        path: '/miniprogram/components/grid',
        component: () => import('@/grid/README.md'),
      },
      {
        title: 'ImageViewer 图片预览',
        titleEn: 'ImageViewer',
        name: 'image-viewer',
        meta: { docType: 'data' },
        path: '/miniprogram/components/image-viewer',
        component: () => import('@/image-viewer/README.md'),
      },
      {
        title: 'Progress 进度条',
        titleEn: 'Progress',
        name: 'progress',
        meta: { docType: 'message' },
        path: '/miniprogram/components/progress',
        component: () => import('@/progress/README.md'),
      },
      {
        title: 'Result 结果',
        titleEn: 'Result',
        name: 'result',
        meta: { docType: 'data' },
        path: '/miniprogram/components/result',
        component: () => import('@/result/README.md'),
      },
      {
        title: 'Skeleton 骨架屏',
        titleEn: 'Skeleton',
        name: 'skeleton',
        meta: { docType: 'data' },
        path: '/miniprogram/components/skeleton',
        component: () => import('@/skeleton/README.md'),
      },
      {
        title: 'Sticky 吸顶',
        titleEn: 'Sticky',
        name: 'sticky',
        meta: { docType: 'navigation' },
        path: '/miniprogram/components/sticky',
        component: () => import('@/sticky/README.md'),
      },
      {
        title: 'Swiper 轮播图',
        titleEn: 'Swiper',
        name: 'swiper',
        meta: { docType: 'data' },
        path: '/miniprogram/components/swiper',
        component: () => import('@/swiper/README.md'),
      },
      {
        title: 'Tag 标签',
        titleEn: 'Tag',
        name: 'tag',
        meta: { docType: 'data' },
        path: '/miniprogram/components/tag',
        component: () => import('@/tag/README.md'),
      },
    ],
  },
  {
    title: '反馈',
    type: 'component', // 组件文档
    children: [
      {
        title: 'ActionSheet 动作面板',
        titleEn: 'ActionSheet',
        name: 'actionsheet',
        meta: { docType: 'message' },
        path: '/miniprogram/components/action-sheet',
        component: () => import('@/action-sheet/README.md'),
      },
      {
        title: 'Dialog 对话框',
        titleEn: 'Dialog',
        name: 'dialog',
        meta: { docType: 'message' },
        path: '/miniprogram/components/dialog',
        component: () => import('@/dialog/README.md'),
      },
      {
        title: 'DropdownMenu 下拉菜单',
        titleEn: 'DropdownMenu',
        name: 'dropdown-menu',
        meta: { docType: 'navigation' },
        path: '/miniprogram/components/dropdown-menu',
        component: () => import('@/dropdown-menu/README.md'),
      },
      {
        title: 'Guide 引导',
        titleEn: 'Guide',
        name: 'guide',
        meta: { docType: 'navigation' },
        path: '/miniprogram/components/guide',
        component: () => import('@/guide/README.md'),
      },
      {
        title: 'Loading 加载',
        titleEn: 'Loading',
        name: 'loading',
        meta: { docType: 'message' },
        path: '/miniprogram/components/loading',
        component: () => import('@/loading/README.md'),
      },
      {
        title: 'Message 消息通知',
        titleEn: 'Message',
        name: 'message',
        meta: { docType: 'message' },
        path: '/miniprogram/components/message',
        component: () => import('@/message/README.md'),
      },
      {
        title: 'NoticeBar 公告栏',
        titleEn: 'NoticeBar',
        name: 'noticebar',
        meta: { docType: 'message' },
        path: '/miniprogram/components/notice-bar',
        component: () => import('@/notice-bar/README.md'),
      },
      {
        title: 'Overlay 遮罩层',
        titleEn: 'Overlay',
        name: 'overlay',
        meta: { docType: 'message' },
        path: '/miniprogram/components/overlay',
        component: () => import('@/overlay/README.md'),
      },
      {
        title: 'Popup 弹出层',
        titleEn: 'Popup',
        name: 'popup',
        meta: { docType: 'message' },
        path: '/miniprogram/components/popup',
        component: () => import('@/popup/README.md'),
      },
      {
        title: 'PullDownRefresh 下拉刷新',
        titleEn: 'PullDownRefresh',
        name: 'pullDownRefresh',
        meta: { docType: 'message' },
        path: '/miniprogram/components/pull-down-refresh',
        component: () => import('@/pull-down-refresh/README.md'),
      },
      {
        title: 'SwipeCell 滑动操作',
        titleEn: 'SwipeCell',
        name: 'swipeCell',
        meta: { docType: 'message' },
        path: '/miniprogram/components/swipe-cell',
        component: () => import('@/swipe-cell/README.md'),
      },
      {
        title: 'Toast 轻提示',
        titleEn: 'Toast',
        name: 'toast',
        meta: { docType: 'message' },
        path: '/miniprogram/components/toast',
        component: () => import('@/toast/README.md'),
      },
    ],
  },
];

const enDocs = docs.map((doc) => {
  return {
    ...doc,
    title: doc.titleEn,
    children: doc?.children?.map((child) => {
      return {
        title: child.titleEn,
        name: `${child.name}-en`,
        path: `${child.path}-en`,
        meta: { lang: 'en' },
        component: child.componentEn || child.component,
      };
    }),
  };
});

export default { docs, enDocs };
