<template>
    <div class="fav-icon" @click="toggle()">
        <span v-show="is_fav" class="star">
            <span class="fa fa-star checked"></span>
        </span>
        <span v-show="!is_fav" class="star">
            <span class="fa fa-star"></span>
        </span>
    </div>
</template>

<script>

export default {
    name: 'FavsWidget',
    data() {
        return {
            is_fav: this.initial_value || false

        }
    },
    props: {
        initial_value: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        toggle() {
            this.is_fav = !this.is_fav;
            this.$emit('toggle', this.is_fav)
        }
    }
}
</script>

<style>
.star {
    cursor: pointer;
}
.checked {
    color: orange;
}
</style>