<template>
    <header :class="{ 'scrolled-nav': scrolledNav}">
        <nav>
            
            <div class="branding" :class="{ 'img-move' : mobileNav}">
                <img src="@/assets/images/logo_no_background.png" alt="" />
            </div>
            
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" :to="{ name: 'Startseite' }">Startseite</router-link></li>
                <li><router-link class="link" :to="{ name: 'Sportangebote' }">Sportangebote</router-link></li>
                <li><router-link class="link" :to="{ name: 'Trainingszeiten' }">Trainingzeiten</router-link></li>
                <li><router-link class="link" :to="{ name: 'Verein' }">Verein</router-link></li>
                <li><router-link class="link" :to="{ name: 'Kontakt' }">Kontakt</router-link></li>
            </ul>
            <div class="icon">
                <i class="fa-solid fa-bars" @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active' : mobileNav}"></i>
            </div>
            
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><router-link class="link" :to="{ name: 'Startseite' }">Startseite</router-link></li>
                    <li><router-link class="link" :to="{ name: 'Sportangebote' }">Sportangebote</router-link></li>
                    <li><router-link class="link" :to="{ name: 'Trainingszeiten' }">Trainingzeiten</router-link></li>
                    <li><router-link class="link" :to="{ name: 'Verein' }">Verein</router-link></li>
                    <li><router-link class="link" :to="{ name: 'Kontakt' }">Kontakt</router-link></li>
                </ul>
            </transition>

        </nav>
    </header>
</template>

<script>
export default {
    name: "navigation",
    data() {
        return {
            scrolledNav: null,
            mobile: null,
            mobileNav: null,
            windowWith: null
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll)
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },

        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
            return;
        },  

        checkScreen() {
            this.windowWith = window.innerWidth;
            if (this.windowWith <= 1040) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
    }
}
</script>

<style lang="scss" scoped>

header {
    background-color: rgba(220,220,220,0.8);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    color: #000;
    

    nav {
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transition: .5s ease all;
        width: 90%;
        margin: 0 auto;
        @media (min-width: 1140px) {
            max-width: 1140px;
        }

        ul,
        .link {
            font-weight: 500;
            color: #000;
            list-style: none;
            text-decoration: none;
        }

        li {
            text-transform: uppercase;
            padding: 16px;
            margin-left: 16px;
        }

        .link {
            font-size: 14px;
            transition: 0.5s ease all;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;
        
            &:hover {
                border-color: #00afea;
            }
        }
        .branding {
            transition: 1s ease all;
            display: flex;
            align-items: center;

            img {
                width: 300px;
                transition: .5s ease all;
            }

            
        }

    .navigation {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
    }

    .icon {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 24px;
        height: 100%;

        i {
            cursor: pointer;
            font-size: 24px;
            transition: .8s ease all;
        }
    }

    .icon-active {
        transform: rotate(180deg);
    }
    
    .dropdown-nav {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        margin: 0;
        width: 100%;
        max-width: 250px;
        height: 100%;
        background-color: #fff;
        top: 0px;
        left: 0px;

        li {
            margin-left: 0;
            .link {
                color: #000;
            }
        }
    }

    .img-move {
        transition: 1s ease all;
        transform: translate(250px);
    }

        .mobile-nav-enter-active,
        .mobile-nav-leave-active {
            transition: 1s ease all;
        }

        .mobile-nav-enter-from,
        .mobile-nav-leave-to {
            transform:translateX(-250px);
        }

        

    } 
}

.scrolled-nav {
    background-color: #fff;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);

    nav {
        padding: 8px 0;

        .branding {
            img {
                width: 200px;
            }
        }
    }
}

</style>