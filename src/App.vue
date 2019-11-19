<template>
    <div>
        <div v-if="path === '/login' ">
            <br><br><br><br><br><br>
            <div>
                <router-view/>
            </div>
        </div>
        <div v-else id="wrapper">
            <!-- Sidebar -->
            <side-nav/>
            <!-- /#sidebar-wrapper -->
            <!-- Page Content -->
            <div id="page-content-wrapper">
                <div class="header_top navb">
                    <div class="container">
                        <div class="full">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-xs-12">
                                    <ul class="top_information ">
                                        <li> devFest Western Kenya 2019</li>

                                    </ul>
                                </div>
                                <div class="col-lg-6 col-md-6 col-xs-12 xs-hidden">
                                    <ul class="top_information ">
                                        <li>Building your Web with Firebase</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="hamburger is-closed" data-toggle="offcanvas">
                    <span class="hamb-top"></span>
                    <span class="hamb-middle"></span>
                    <span class="hamb-bottom"></span>
                </button>
                <div class="body">
                    <router-view/>
                </div>
            </div>
            <!-- /#page-content-wrapper -->
        </div>
    </div>
</template>

<script>
    import SideNav from "@/components/layout/SideNav";
    export default {
        components: {
            SideNav,
        },
        created(){
            // console.log(this.$route.fullPath)
            // console.log(this.$router.currentRoute.path)
            window.addEventListener('online', () => {
                alert('You are back online')
            });
            window.addEventListener('offline', () => {
                alert('You are Offline')
            });
        },
        data(){
            return {
                path : '/login'
            }
        },
        updated() {
            var currentUrl = this.$router.currentRoute.path;
            // var currentUrl = window.location.pathname;
            console.log(currentUrl)
            this.path =  currentUrl
        },
    }
</script>

<style lang="scss">
.hamburger{
    span {
        background-color: red!important;
    }
}
.navb {
    overflow: hidden;
    /*background-color: #333;*/
    position: fixed; /* Set the navbar to fixed position */
    bottom: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index: 999999;
}
    .full{
        padding: 10px!important;
        ul li {
            font-size: 20px;
        }
    }
</style>
