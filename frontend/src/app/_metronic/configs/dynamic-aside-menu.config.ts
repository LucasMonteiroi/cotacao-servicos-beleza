export const DynamicAsideMenuConfig = {
  items: [
    {
      title: 'Dashboard',
      root: true,
      icon: 'flaticon2-architecture-and-city',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/dashboard',
      translate: 'MENU.DASHBOARD',
      bullet: 'dot',
    },
    {
      title: 'Layout Builder',
      root: true,
      icon: 'flaticon2-expand',
      page: '/builder',
      svg: './assets/media/svg/icons/Home/Library.svg'
    },
    {
      title: 'Clientes',
      root: true,
      icon: 'flaticon2-avatar',
      page: '/clientes',
      svg: './assets/media/svg/icons/Communication/Group.svg'
    },
    {
      title: 'Produtos',
      root: true,
      icon: 'flaticon2-gift',
      page: '/produtos',
      svg: './assets/media/svg/icons/Shopping/Bag2.svg'
    },
    {
      title: 'Cotações',
      root: true,
      icon: 'flaticon-shopping-basket',
      page: '/cotacoes',
      svg: './assets/media/svg/icons/Shopping/Cart2.svg'
    },
    // {
    //   title: 'Wizard',
    //   root: true,
    //   bullet: 'dot',
    //   icon: 'flaticon2-mail-1',
    //   page: '/wizard',
    //   submenu: [
    //     {
    //       title: 'Wizard 1',
    //       page: '/wizard/wizard-1'
    //     },
    //     {
    //       title: 'Wizard 2',
    //       page: '/wizard/wizard-2'
    //     },
    //     {
    //       title: 'Wizard 3',
    //       page: '/wizard/wizard-3'
    //     },
    //     {
    //       title: 'Wizard 4',
    //       page: '/wizard/wizard-4'
    //     },
    //   ]
    // },
  ]
};
