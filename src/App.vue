<template>
    <div id="wrapper">
        <!-- Sidebar -->
        <side-nav/>
        <!-- /#sidebar-wrapper -->
        <!-- Page Content -->
        <div id="page-content-wrapper">
            <button type="button" class="hamburger is-closed" data-toggle="offcanvas">
                <span class="hamb-top"></span>
                <span class="hamb-middle"></span>
                <span class="hamb-bottom"></span>
            </button>
            <div class="container">
                <router-view/>
            </div>
        </div>
        <!-- /#page-content-wrapper -->
    </div>
</template>

<script>
    import SideNav from "@/components/layout/SideNav";
    export default {
        components: {
            SideNav,
        },
        // created(){
        //     console.log(this.$route.fullPath)
        // }
    }
</script>

<style lang="scss">
.hamburger{
    span {
        background-color: red!important;
    }
}
</style>
