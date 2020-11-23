<template>
    <div class="tab-nav">

        <!-- togglers -->
        <div class="tab-nav__overflow" ref="togglers">
            <component :is="link.link ? 'a' : 'button'"
                :href="link.link"
                v-for="(link, i) in links" :key="i"
                class="tab-nav__toggler"
                :class="{'is-active': i === activeTab}"
                :style="{visibility: hiddenLabels && hiddenLabels.includes(i) ? 'hidden' : 'visible'}"
                @click="linkClick($event, link, i)"
            >
                <slot name="tab-toggler" :item="link" :index="i" :isActive="i === activeTab">
                    {{ link.name }}
                </slot>
            </component>
        </div>

        <!-- hidden toggler -->
        <context-menu
            class="tab-nav__hidden-toggler"
            :class="{'has-active-item': hiddenLabels && hiddenLabels.includes(activeTab)}"
            :style="{
                visibility: hiddenLabels ? 'visible' : 'hidden',
                left: hiddenLabels ? dropdownLeft + 'px' : null
            }"
            boundary=".tab-nav"
            ref="hiddenToggler"
        >
            <template slot="toggler">
                <slot name="tab-hidden-open" :items="links" :hiddenIdx="hiddenLabels" :activeTab="activeTab" :name="togglerLabel">
                    {{ togglerLabel }}
                </slot>
            </template>
            <component :is="link.link ? 'cm-link' : 'cm-button'"
                :href="link.link"
                v-for="(link, i) in links" :key="i"
                v-show="hiddenLabels && hiddenLabels.includes(i)"
                :class="{'is-active': i === activeTab}"
                @click="linkClick($event, link, i)"
            >
                <slot name="tab-hidden" :item="link" :index="i" :isActive="i === activeTab">
                    {{ link.name }}
                </slot>
            </component>
        </context-menu>
    </div>
</template>

<script>
const DEBOUNCE = 100 // onresize debounce, ms

let _uid = 0

export default {

    name: 'tab-nav',

    props: {

        name: String,

        links: {
            type: Array,
            required: true
        },

        active: {
            type: Number,
            default() {
                let activeLinkIndex = this.links.findIndex(link => link.active)
                return activeLinkIndex > -1 ? activeLinkIndex : 0
            }
        }
    },


    data() {
        return {
            hiddenLabels: null,
            dropdownLeft: 0,
            current: this.active
        }
    },


    computed: {

        useRouter() {
            return typeof this.name !== 'undefined'
        },

        activeTab() {
            let current = this.$route.query[this.name] || this.current
            return current && +current
        },

        togglerLabel() {
            if ( ! this.hiddenLabels ) return ''
            switch ( this.hiddenLabels.length ) {
                case this.links.length:
                    return this.links[this.activeTab].label
                    break;
                default:
                    return this.$lang.TABS_HIDDEN_TOGGLER.replace('%s', this.hiddenLabels.length)
            }
        }
    },


    methods: {

        linkClick($event, link, index) {
            if ( ! link.link ) {
                $event.preventDefault()
                $event.stopPropagation()
                if ( this.useRouter ) {
                    this.setRouteParam(index)
                } else {
                    this.current = index
                }
            }
        },

        setRouteParam(tabNumber, push = true) {
            let tab = {}
            tab[this.name] = tabNumber
            this.$router.$setParam(tab, push)
        },

        calculateHiddenLabels() {
            let width = 10, // reserved space
                left = 0,
                hiddenLabels = [],
                hiddenToggler = this.$refs.hiddenToggler.$el,
                maxWidth = this.$refs.togglers.clientWidth - hiddenToggler.clientWidth,
                children = Array.from(this.$refs.togglers.children)

            for ( let i = 0; i < children.length; i++ ) {
                let tabWidth = children[i].offsetWidth
                width += tabWidth
                if ( width > maxWidth ) {
                    hiddenLabels.push(i)
                } else {
                    left += tabWidth
                }
            }
            this.dropdownLeft = left
            this.hiddenLabels = hiddenLabels.length ? hiddenLabels : null
        },

        debounceCalculateHiddenLabels() {
            clearTimeout( this.__resizeTimeout )
            this.__resizeTimeout = setTimeout(this.calculateHiddenLabels, DEBOUNCE)
        }
    },


    mounted() {
        this.$nextTick(this.calculateHiddenLabels)
        window.addEventListener('resize', this.debounceCalculateHiddenLabels)
    },


    beforeDestroy() {
        window.removeEventListener('resize', this.debounceCalculateHiddenLabels)
    }
}
</script>
