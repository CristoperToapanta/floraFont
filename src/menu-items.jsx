
const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/analytics'
        }
      ]
    },
    {
      id: 'utilities',
      title: 'Utilities',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'component',
          title: 'Component',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'button',
              title: 'Button',
              type: 'item',
              icon: 'feather icon-',
              url: '/basic/button'
            },
            {
              id: 'badges',
              title: 'Badges',
              type: 'item',
              url: '/basic/badges'
            },
            {
              id: 'breadcrumb-pagination',
              title: 'Breadcrumb & Pagination',
              type: 'item',
              url: '/basic/breadcrumb-pagination'
            },
            {
              id: 'collapse',
              title: 'Collapse',
              type: 'item',
              url: '/basic/collapse'
            },
            {
              id: 'typography',
              title: 'Typography',
              type: 'item',
              url: '/basic/typography'
            }
          ]
        }
      ]
    },
    {
      id: 'auth',
      title: 'Authentication',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'sign in',
          title: 'Login',
          type: 'item',
          icon: 'feather icon-lock',
          url: '/auth/signin-1',
          target: true,
          breadcrumbs: false
        },
        {
          id: 'sign Up',
          title: 'Register',
          type: 'item',
          icon: 'feather icon-log-in',
          url: '/auth/signup-1',
          target: true,
          breadcrumbs: false
        },
        {
          id: 'reset-pass',
          title: 'Reset Password',
          type: 'item',
          icon: 'feather icon-unlock',
          url: '/auth/reset-password-1',
          target: true,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'support',
      title: 'Support',
      type: 'group',
      icon: 'icon-support',
      children: [
        {
          id: 'sample-page',
          title: 'Sample Page',
          type: 'item',
          url: '/sample-page',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        }
      ]
    }
  ]
};

export default menuItems;
