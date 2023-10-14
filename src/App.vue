<template>
    <div>
        <router-view>
            
        </router-view>
    </div>
</template>

<script>
    import listcomponent from './components/ListComponent.vue';

    export default{
        name: "app",
        components:{listcomponent},
        data(){
            
        }
    }
</script>