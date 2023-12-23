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
                    'iPad',
                    'iPhone',
                    'Apple watch',
                    'Acessories'
                ]
            },
            {
                title: 'Quick Links',
                items: [
                    'Shop Holiday Gifts',
                    'Find a Store',
                    'Order Status',
                    'Apple Trade In',
                    'Financing'
                ]
            },
            {
                title: 'Shop Special Stores',
                items: [
                    'Certified Refurbished',
                    'Education',
                    'Business',
                    'Veterans and Military',
                    'Government'
                ]
            }
        ]
    },
    {
        title: 'Mac',
        submenu: [
            {
                title: 'Explore Mac',
                items: [
                    'Explore All Mac',
                    'MacBook Air',
                    'MacBook Pro',
                    'iMac',
                    'Mac mini',
                    'Mac Studio',
                    'Mac Pro',
                    'Displays'
                ]
            },
            {
                title: 'Shop Mac',
                items: [
                    'Shop Mac',
                    'Mac Acessories',
                    'Apple Trade In',
                    'Financing'
                ]
            },
            {
                title: 'More from Mac',
                items: [
                    'Mac Support',
                    'AppleCare+ for Mac',
                    'macOS Sonoma',
                    'Apps by Apple',
                    'Continuity',
                    'iCloud+',
                    'Mac for Business',
                    'Education'
                ]
            }
        ]
    },
    {
        title: 'iPad',
        submenu: [
            {
                title: 'Explore iPad',
                items: [
                    'Explora All iPad',
                    'iPad Pro',
                    'iPad Air',
                    'iPad',
                    'iPad mini',
                    'Applu Pencil',
                    'Keyboards'
                ]
            },
            {
                title: 'Shop iPad',
                items: [
                    'Shop iPad',
                    'iPad Acessories',
                    'Apple Trade In',
                    'Financing'
                ]
            },
            {
                title: 'More from iPad',
                items: [
                    'iPad Support',
                    'AppleCare+ for iPad',
                    'iPadOS 17',
                    'Apps by Apple',
                    'iCloud+',
                    'Education'
                ]
            }
        ]
    },
    {
        title: 'iPhone',
        submenu: [
            {
                title: 'Explore iPhone',
                items: [
                    'Explora All iPhone',
                    'iPhone 15 Pro',
                    'iPhone 15',
                    'iPhone 14',
                    'iPhone 13',
                    'iPhone SE'
                ]
            },
            {
                title: 'Shop iPhone',
                items: [
                    'Shop iPhone',
                    'iPhone Acessories',
                    'Apple Trade In',
                    'Carrier Deals at Apple',
                    'Financing'
                ]
            },
            {
                title: 'More from iPhone',
                items: [
                    'iPhone Support',
                    'AppleCare+ for iPhone',
                    'iOS 17',
                    'Apps by Apple',
                    'iPhone Privacy',
                    'iCloud+',
                    'Wallet, Pay, Card',
                    'Siri'
                ]
            }
        ]
    },
    {
        title: 'Watch',
        submenu: [
            {
                title: 'Explore Watch',
                items: [
                    'Explora All Apple Watch',
                    'Apple Watch Series 9',
                    'Apple Watch Ultra 2',
                    'Apple Watch SE',
                    'Apple Watch Nike',
                    'Apple Watch Hermes'
                ]
            },
            {
                title: 'Shop Watch',
                items: [
                    'Shop Apple Watch',
                    'Apple Watch Studio',
                    'Apple Watch Bands',
                    'Apple Watch Accessories',
                    'Apple Trade In',
                    'Financing'
                ]
            },
            {
                title: 'More from Watch',
                items: [
                    'Apple Watch Support',
                    'AppleCare+',
                    'watchOS 10',
                    'Apps by Apple',
                    'Apple Fitness+'
                ]
            }
        ]
    },
    {
        title: 'Vision'
    },
    {
        title: 'AirPods',
        submenu: [
            {
                title: 'Explore AirPods',
                items: [
                    'Explora All AirPods',
                    'AirPods Pro 2nd generation',
                    'AirPods 2nd generation',
                    'AirPods 3rd generation',
                    'AirPods Max'
                ]
            },
            {
                title: 'Shop AirPods',
                items: [
                    'Shop AirPods',
                    'AirPods Accessories'
                ]
            },
            {
                title: 'More from AirPods',
                items: [
                    'AirPods Support',
                    'AppleCare+ for Headphones',
                    'Apple Music'
                ]
            }
        ]
    },
    {
        title: 'TV & Home',
        submenu: [
            {
                title: 'Explore TV & Home',
                items: [
                    'Explora TV & Home',
                    'Apple TV 4K',
                    'HomePod',
                    'HomePod mini'
                ]
            },
            {
                title: 'Shop TV & Home',
                items: [
                    'Shop Apple TV 4K',
                    'Shop HomePod',
                    'Shop HomePod mini',
                    'Shop Siri Remote',
                    'TV & Home Accessories'
                ]
            },
            {
                title: 'More from TV & Home',
                items: [
                    'Apple TV Support',
                    'Home Pod Support',
                    'AppleCare+',
                    'Apple TV app',
                    'Apple TV+',
                    'Home app',
                    'Apple Music',
                    'Siri',
                    'AirPlay'
                ]
            }
        ]
    },
    {
        title: 'Entertainment',
        submenu: [
            {
                title: 'Explore Entertainment',
                items: [
                    'Explora Entertainment',
                    'Apple One',
                    'Apple TV+',
                    'Apple Music',
                    'Apple Arcade',
                    'Apple Fitness+',
                    'Apple News+',
                    'Apple Podcasts',
                    'Apple Books',
                    'Apple Store'
                ]
            },
            {
                title: 'Support',
                items: [
                    'Apple TV+ Support',
                    'Apple Music Support'
                ]
            }
        ]
    },
    {
        title: 'Accessories',
        submenu: [
            {
                title: 'Shop Accessories',
                items: [
                    'Shop All Accessories',
                    'Mac',
                    'iPad',
                    'iPhone',
                    'Apple Watch',
                    'AirPods',
                    'TV & Home'
                ]
            },
            {
                title: 'Explore Accessories',
                items: [
                    'Shop Holiday Gifts',
                    'Made by Apple',
                    'Beats by Dr. Dre',
                    'AirTag'
                ]
            }
        ]
    },
    {
        title: 'Support',
        submenu: [
            {
                title: 'Explore Support',
                items: [
                    'iPhone',
                    'Mac',
                    'iPad',
                    'Watch',
                    'AirPods',
                    'Music',
                    'TV'
                ]
            },
            {
                title: 'Get Help',
                items: [
                    'Community',
                    'Check Coverage',
                    'Repair',
                    'Contact Us'
                ]
            },
            {
                title: 'Helpful Topics',
                items: [
                    'Get AppleCare+',
                    'Apple ID & Password',
                    'Billing & Subscriptions',
                    'Find My',
                    'Accessibility'
                ]
            }
        ]
    }
]