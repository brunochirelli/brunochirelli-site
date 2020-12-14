const MenuItems = [
    { name: 'Home', link: '/' },
    { name: 'Sobre', link: '/sobre/' },
    {
        name: 'Serviços',
        link: '/servicos',
        children: [
            { name: 'Search Engine Marketing', link: '/servicos/search-engine-marketing' },
            { name: 'Criação de Sites', link: '/servicos/criacao-sites' },
            { name: 'Identidade Visual', link: '/servicos/identidade-visual' },
        ],
    },
    { name: 'Portfólio', link: '/portfolio' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contato', link: '/contato' },
];

export default MenuItems;
