<template>
    <button
        class="hy-button-wrapper"
        :class="[
            type === 'text' ? 'dy-button-text' : 'dy-button',
            `dy-button--${type}`,
            {
                'is-round': round,
                'is-circle': circle,
                'is-disable': disable,
                'is-loading': loading,
                'small':small,
                'middle':middle,
                'large':large
            }
        ]"
        :disabled="disable"
        @click.stop="handleClick">
        <i
            v-show="icon"
            :class="[`iconfont ${icon}`]"/>
        <i
            v-show="loading"
            :class="[`dy-icon-loading`, { loading: loading }]"/>
        <span v-if="$slots.default">
            <slot/>
        </span>
    </button>
</template>

<script>
export default {
    name: 'Button',
    components: {}, 
    props: {     
        type: { 
            type: String,
         default: 'info' 
        },
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        disable: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        small: {
            type: Boolean,
            default: false
            
        },
        middle: {
            type: Boolean,
            default: false
        },
        large: {
            type: Boolean,
            default: false
        },
        superbig: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: 'initial'
        }
    },
    methods: {
        handleClick (e) {
            this.$emit('click', e)
            return false
        }
    }
}
</script>
