// Global values for application"
export default {
    staticPath: '',
    debug: false,
    maintenance: false,
    ui: {
        color_theme: 'dark', // dark/light
        nav_left: {show: true, value: true},
        nav_left_mini: {show: true, value: false},
        nav_left_clipped: {show: true, value: false},
        footer_fixed: {show: true, value: false},
        nav_right: {show: true, value: false}
    },
    personal_data: {
        app_title: 'My Application',
        logo_title: 'My Logo',
        logo_icon: 'new_releases',
        logo_img: '/images/system/user_female.png',
        copyright: '© 2016 Sample - All Rights Reserved',
        designed_with: 'Sample Studio',
        designed_with_url: 'https://www.sample.com/iamgurdeeposahan',
        contact: {
            location: '795 Sample Ave, Suite 600',
            phone: '+01 234 567 890',
            fax: '+01 234 567 890',
            email: 'sample@sample.com',
            website: 'www.sample.com'
        },
        twitter: {url: '#', tag: '@Sample'},
        socials: {
            facebook: {url: '#', icon: 'fa-facebook'},
            twitter: {url: '#', icon: 'fa-twitter'},
            google: {url: '#', icon: 'fa-google-plus'},
            linkdin: {url: '#', icon: 'fa-linkedin'},
            flickr: {url: '#', icon: 'fa-flickr'},
            skype: {url: '#', icon: 'fa-skype'}
        },
        blog: {
            url: '/blog/home1',
            total: 3 // Count of posts on page
        },
        portfolio: {
            url: '/portfolio/col-1',
            total: 6 // Count of items on page
        }
    }
}
