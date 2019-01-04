<template>
    <div class="dashboard-container">
        <component :is="currentRole"></component>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import adminDashboard from './admin'
    import editorDashboard from './editor'

    export default {
        name: 'dashboard',
        components: {adminDashboard, editorDashboard},
        data() {
            return {
                currentRole: 'adminDashboard'
            }
        },
        computed: {
            ...mapGetters([
                'perms'
            ])
        },
        created() {
            if(!this.perms.some(p=>p.val=="*")){
                this.currentRole = 'editorDashboard'
            }
        }
    }
</script>
