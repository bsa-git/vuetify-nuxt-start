// The values in the configuration files "config/env/"
// will be overwritten by the values of "env.js" file
export default {
    app_env: 'testing', // development, production, testing
    global: {
        staticPath: '',//vuetify-nuxt-start
        debug: false,
        maintenance: false,
        ui: {
            color_theme: 'light', // dark/light
            nav_left: {show: true, value: true},
            nav_left_mini: {show: true, value: false},
            nav_left_clipped: {show: true, value: false},
            footer_fixed: {show: true, value: false},
            nav_right: {show: false, value: false}
        },
        personal_data: {
            app_title: 'Vuetify',
            logo_title: 'BSA Lab.',
            logo_icon: 'check_circle',
            logo_img: '/images/system/user.jpg',
            copyright: '© 2017 "BSA Lab." - All Rights Reserved',
            designed_with: 'BSA Lab Studio',
            designed_with_url: 'https://www.real.com/iamgurdeeposahan',
            contact: {
                location: '795 Real Ave, Suite 600',
                phone: '+01 234 567 890',
                fax: '+01 234 567 890',
                email: 'real@real.com',
                website: 'www.real.com'
            },
            twitter: {url: 'https://twitter.com/real', tag: '@Real'},
            socials: {
                facebook: {url: 'https://facebook.com/real', icon: 'fa-facebook'},
                twitter: {url: 'https://twitter.com/real', icon: 'fa-twitter'},
                google: {url: 'https://google.com/real', icon: 'fa-google-plus'},
                linkdin: {url: 'https://linkdin.com/real', icon: 'fa-linkedin'},
                flickr: {url: 'https://flickr.com/real', icon: 'fa-flickr'},
                skype: {url: 'https://skype.com/real', icon: 'fa-skype'}
            }
        }
    },
    production: {
        api: {
            base_url: 'http://real-production.com/api'
        }
    },
    development: {
        api: {
            base_url: 'http://real-development.com/api'
        }
    },
    testing: {
        api: {
            base_url: 'http://real-testing.com/api'
        }
    }
}
