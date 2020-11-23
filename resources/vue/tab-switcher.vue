<script>
import { ACCEPTED_COMPONENTS, filterSlotsByTag } from '../js/modules/helpers'

export default {

    name: 'tab-switcher',

    props: {

        active: {
            type: Number,
            default: 0
        }
    },

    render(h) {

        return h('div', { staticClass: 'tab-switcher'}, [
            h('transition-group', {props: {tag: 'div', name: 'tab-transition'}},
                filterSlotsByTag(this.$slots.default, ACCEPTED_COMPONENTS).map( (item, i) => {
                    return h('div', {
                        directives: [
                            {
                                name: "show",
                                rawName: "v-show",
                                value: i == this.active,
                                expression: "i == active"
                            }
                        ],
                        staticClass: 'tab-switcher__tab',
                        key: i + 'child'
                    },
                    item.componentOptions.children)
                })
            )
        ])
    }
}
</script>