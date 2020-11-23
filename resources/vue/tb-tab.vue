<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {

    name: 'tb-tab',

    props: {

        label: {
            type: String,
        },
    }
}
</script>