<template>
    <div class="tab-builder">

        <!-- togglers -->
        <tab-nav
            :name="name"
            :links="links"
            :active="active"
        >
            <!-- pass slots -->
            <template slot="tab-toggler" slot-scope="toggler">
                <slot name="tab-toggler" v-bind="toggler"></slot>
            </template>
            <template slot="tab-hidden" slot-scope="hidden">
                <slot name="tab-hidden" v-bind="hidden"></slot>
            </template>
            <template slot="tab-hidden-open" slot-scope="hiddenOpen">
                <slot name="tab-hidden-open" v-bind="hiddenOpen"></slot>
            </template>
        </tab-nav>

        <!-- tabs -->
        <tab-switcher :active="activeTab">
            <slot></slot>
        </tab-switcher>

    </div>
</template>

<script>
import { ACCEPTED_COMPONENTS, filterSlotsByTag } from '../js/modules/helpers'

let _uid = 0

export default {

    name: 'tab-builder',


    props: {

        name: {
            type: String,
            default: () => 'tab-builder-' + _uid++
        },

        active: {
            type: Number,
            default: 0
        }
    },


    computed: {

        activeTab() {
            let current = this.$route.query[this.name]
            return typeof current === 'undefined' ? this.active : +current
        },

        links() {
            return filterSlotsByTag(this.$slots.default, ACCEPTED_COMPONENTS).map( item => {
                return {
                    name: item.componentOptions.propsData.label,
                    link: item.componentOptions.propsData.url || null
                }
            })
        }
    }
}
</script>