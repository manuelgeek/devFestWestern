<template>
    <nav class="navbar navbar-inverse navbar-fixed-top nav" id="sidebar-wrapper">
        <div style="margin-top: -30px;" class="logo text-center">
            <a href="#"><img src="/assets/images/logo.png" width="120" alt="logo" /></a>
        </div>
        <ul class="nav sidebar-nav">
            <li :class="currentPage.includes('welcome') ? 'active' : ''"><a id="link1" class="nav-section1" href="#welcome"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Welcome</a></li>

            <li :class="currentPage.includes('intro') ? 'active' : ''"><a id="link2" class="nav-section2" href="#intro"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Intro</a></li>

            <li :class="currentPage.includes('agenda') ? 'active' : ''"><a id="link3" class="nav-section3" href="#agenda"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Agenda</a></li>

            <li :class="currentPage.includes('firebase') ? 'active' : ''"><a id="link4" class="nav-section4" href="#firebase"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> What is Firebase ?</a></li>

            <li :class="currentPage.includes('storage') ? 'active' : ''"><a id="link5" class="nav-section5" href="#storage"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Cloud Storage</a></li>

            <li :class="currentPage.includes('database') ? 'active' : ''"><a id="link6" class="nav-section6" href="#database"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Realtime Database </a></li>

            <li :class="currentPage.includes('firestore') ? 'active' : ''"><a id="link7" class="nav-section7" href="#firestore"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Cloud Firestore</a></li>

            <li :class="currentPage.includes('auth') ? 'active' : ''"><a id="link8" class="nav-section8" href="#auth"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Authentication</a></li>

            <li :class="currentPage.includes('messaging') ? 'active' : ''"><a id="link9" class="nav-section8" href="#messaging"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Cloud Messaging</a></li>

            <li :class="currentPage.includes('demo') ? 'active' : ''"><a id="link10" class="nav-section8" href="#demo"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i>Send Cloud Messages</a></li>

            <li :class="currentPage.includes('hosting') ? 'active' : ''"><a id="link11" class="nav-section8" href="#hosting"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Hosting</a></li>

            <li :class="currentPage.includes('q_n_a') ? 'active' : ''"><a id="link12" class="nav-section8" href="#q_n_a"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Q and A</a></li>

            <li :class="currentPage.includes('end') ? 'active' : ''"><a id="link13" class="nav-section8" href="#end"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> End</a></li>
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