export type submenuColumnType = {title: string, items: string[]};
export type submenuType = Array<submenuColumnType>


export type HeaderMenuDataProps = {
    title: string,
    submenu?: submenuType
}

export const HeaderMenuData: HeaderMenuDataProps[]  = [
    {
        title: 'Store',
        submenu: [
            {
                title: 'Shop',
                items: [
                    'Shop the latest',
                    'Mac',
                    'Ipad',
                    'Iphone',
                    'Apple watch',
                    'Acessories'
                ]
            }
        ]
    },
    {
        title: 'Mac'
    },
    {
        title: 'iPad'
    },
    {
        title: 'iPhone'
    },
    {
        title: 'Watch'
    },
    {
        title: 'Vision'
    },
    {
        title: 'AirPods'
    },
    {
        title: 'TV & Home'
    },
    {
        title: 'Entertainment'
    },
    {
        title: 'Accessories'
    },
    {
        title: 'Support'
    }
]