<template>
    <div>
        <div class="login" v-if="path === '/login' ">
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
                                <div class="col-lg-6 col-md-6 col-xs-12">
                                    <ul class="top_information ">
                                        <li>Building your Web with Firebase</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" id="openNav" @click.prevent="openSide(false)" class="hamburger is-closed" data-toggle="offcanvas">
                    <span class="hamb-top"></span>
                    <span class="hamb-middle"></span>
                    <span class="hamb-bottom"></span>
                </button>
                <div class="body">
                    <div class="sidenav-overlay" @click.prevent="openSide(true)" style="display: none; opacity: 0;"></div>
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
            let vm = this;
            this.$root.$on('closenav', function () {
                vm.openSide(true);
            })
        },
        data(){
            return {
                path : '/login',
                isOpen: false
            }
        },
        updated() {
            var currentUrl = this.$router.currentRoute.path;
            // var currentUrl = window.location.pathname;
            // console.log(currentUrl)
            this.path =  currentUrl
        },
        methods: {
            openSide(state){
                if(state){
                    const el = document.getElementById('openNav');
                    const el1 = document.getElementsByClassName('sidenav-overlay')[0];
                    const body = document.getElementById('wrapper');
                    if(el){
                        el.setAttribute("class", "is-closed hamburger")
                        el1.setAttribute("style", "display: none; opacity: 0;")
                        body.classList.remove("toggled");
                    }
                    // console.log('hahaha');
                    // console.log(body);
                    // console.log(el);
                    this.isOpen = false;
                }else{
                    const el = document.getElementsByClassName('hamburger')[0];
                    const el1 = document.getElementsByClassName('sidenav-overlay')[0];
                    const body = document.getElementById('wrapper');
                    if(el){
                        el.setAttribute("class", "is-open")
                        el1.setAttribute("style", "display: block; opacity: 1; ")
                        body.setAttribute("class", "toggled")
                    }
                    this.isOpen = true;
                }
            },
        }
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
        @media (max-width: 1199px) {
            padding: 0px;
            text-align: left;
            margin-right: 20px;
            width: auto;
        }
    }
</style>
