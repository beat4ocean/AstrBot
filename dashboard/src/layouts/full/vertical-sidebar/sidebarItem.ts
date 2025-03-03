export interface menu {
  header?: string;
  title?: string;
  icon?: string;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  {
    title: '统计',
    icon: 'mdi-view-dashboard',
    to: '/dashboard/default'
  },
  {
    title: '消息平台',
    icon: 'mdi-message-processing',
    to: '/platforms',
  },
  {
    title: '服务提供商',
    icon: 'mdi-creation',
    to: '/providers',
  },
  {
    title: '配置',
    icon: 'mdi-cog',
    to: '/config',
  },
  {
    title: '插件管理',
    icon: 'mdi-puzzle',
    to: '/extension'
  },
  {
    title: '插件市场',
    icon: 'mdi-storefront',
    to: '/extension-marketplace'
  },
  {
    title: '聊天',
    icon: 'mdi-chat',
    to: '/chat'
  },
  {
    title: '数据库',
    icon: 'mdi-database',
    to: '/database'
  },
  {
    title: '控制台',
    icon: 'mdi-console',
    to: '/console'
  },
  {
    title: '设置',
    icon: 'mdi-wrench',
    to: '/settings'
  },
  {
    title: '关于',
    icon: 'mdi-information',
    to: '/about'
  },
  // {
  //   title: 'Project ATRI',
  //   icon: 'mdi-grain',
  //   to: '/project-atri'
  // },
];

export default sidebarItem;
