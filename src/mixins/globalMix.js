export const globalMixin = {
    created(){
        if (this.$options.bobIsAReallyCoolGuy) {
            console.log('Bob is truly the coolest')
        }
    }
}