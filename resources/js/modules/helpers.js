export const ACCEPTED_COMPONENTS = ['tb-tab', 'tb-link']

/**
 * Filters components' slot children by tag match
 * 
 * @param  {Array<VueComponent>} slots - slots to filter
 * @param  {Array<String>} tags - accepted tags
 * 
 * @return {Array<VueComponent>} filtered slots
 */
export function filterSlotsByTag(slots = [], tags = []) {

    if ( !tags.length ) return slots

    return slots.filter( item => {
        let tag = item.componentOptions ? item.componentOptions.tag : item.tag
        return tags.includes(tag)
    })
}