<template>
    <nav class="navbar navbar-inverse navbar-fixed-top nav" id="sidebar-wrapper">
        <div class="logo">
            <a href="#"><img src="/assets/images/logos/logo_purple.png" alt="#" /></a>
        </div>
        <ul class="nav sidebar-nav">
            <li :class="currentPage.includes('all') ? 'active' : ''"><a id="link1" class="nav-section1" href="#all"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> All</a></li>
            <li :class="currentPage.includes('home') ? 'active' : ''"><a id="link2" class="nav-section2" href="#home"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Home</a></li>
            <li><a id="link3" class="nav-section3" href="#service"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Services</a></li>
            <li><a id="link4" class="nav-section4" href="#pages"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Pages</a></li>
            <li><a id="link5" class="nav-section5" href="#blog"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Blog</a></li>
            <li><a id="link6" class="nav-section6" href="#case_studies"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Case Studies</a></li>
            <li><a id="link7" class="nav-section7" href="#shop"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Shop</a></li>
            <li><a id="link8" class="nav-section8" href="#contact"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Contact Us</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "SideNav",
        data(){
            return {
                activeClass : 'active'
            }
        },
        computed:{
            currentPage(){
                return this.$route.fullPath;
            }
        }
    }
</script>

<style scoped>

</style>