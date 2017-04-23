<template>
    <div class="footer">
        this is footer!!!
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {
        increase: function () {
            this.$store.commit('increase');
        },
        decrease: function () {
            this.$store.commit('decrease');
        }
    }
};
</script>

<style lang="scss">
.footer {
    color: #0094ff;
}
</style>