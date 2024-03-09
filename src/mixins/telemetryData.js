export const telemData = {
    created(){
        this.logTelem( 'COMP_LOADED', this.$options.name);
    },
    destroyed(){
        this.logTelemRemoval( 'COMP_REMOVED', this.$options.name);
    },
    methods:{
        logTelem(type, value){
            console.log( `${value} ${type}   ===> telem data is being sent to server`)
        },
        logTelemRemoval(type, value){
            console.log( `${value} ${type}   ===> telem data is being sent to server`)
        },
    }
}