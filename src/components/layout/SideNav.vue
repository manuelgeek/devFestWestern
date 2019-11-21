<template>
    <nav class="navbar navbar-inverse navbar-fixed-top nav" id="sidebar-wrapper">
        <div style="margin-top: -30px;" class="logo text-center">
            <a href="#"><img :src="user.photoURL" class="img-circle avatar" alt="logo" /></a>
            <p>{{user.displayName}}</p>
<!--            {{user}}-->
            <br>
        </div>
        <ul class="nav sidebar-nav">
            <li :class="currentPage.includes('welcome') ? 'active' : ''"><a id="link1" class="nav-section1" href="#welcome"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Welcome</a></li>

            <li :class="currentPage.includes('intro') ? 'active' : ''"><a id="link2" class="nav-section2" href="#intro"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Introduction</a></li>

            <li :class="currentPage.includes('title') ? 'active' : ''"><a id="link31" class="nav-section1" href="#title"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Title</a></li>

            <li :class="currentPage.includes('agenda') ? 'active' : ''"><a id="link3" class="nav-section3" href="#agenda"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Agenda</a></li>

            <li :class="currentPage.includes('firebase') ? 'active' : ''"><a id="link4" class="nav-section4" href="#firebase"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> What is Firebase ?</a></li>

            <li :class="currentPage.includes('storage') ? 'active' : ''"><a id="link5" class="nav-section5" href="#storage"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Cloud Storage</a></li>

            <li :class="currentPage.includes('database') ? 'active' : ''"><a id="link6" class="nav-section6" href="#database"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Realtime Database </a></li>

            <li :class="currentPage.includes('firestore') ? 'active' : ''"><a id="link7" class="nav-section7" href="#firestore"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Cloud Firestore</a></li>

            <li :class="currentPage.includes('firedemo') ? 'active' : ''"><a id="link79" class="nav-section7" href="#firedemo"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Cloud Firestore Demo</a></li>

            <li :class="currentPage.includes('auth') ? 'active' : ''"><a id="link8" class="nav-section8" href="#auth"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Authentication</a></li>

            <li :class="currentPage.includes('messaging') ? 'active' : ''"><a id="link9" class="nav-section8" href="#messaging"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Cloud Messaging</a></li>

            <li :class="currentPage.includes('demo') ? 'active' : ''"><a id="link10" class="nav-section8" href="#demo"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i>Send Cloud Messages</a></li>

            <li :class="currentPage.includes('hosting') ? 'active' : ''"><a id="link11" class="nav-section8" href="#hosting"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Hosting</a></li>

            <li :class="currentPage.includes('q_n_a') ? 'active' : ''"><a id="link12" class="nav-section8" href="#q_n_a"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Q and A</a></li>

            <li :class="currentPage.includes('ending') ? 'active' : ''"><a id="link13" class="nav-section8" href="#ending"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> End</a></li>

            <li :class="currentPage.includes('logout') ? 'active' : ''"><a id="link14" class="nav-section8" @click.prevent="logout" href="#logout"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i> Logout</a></li>
        </ul>
    </nav>
</template>

<script>
    import firebase from '@/services/Firebase'
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
            },
            user(){
                return firebase.auth().currentUser;
            },
        },
        methods: {
            logout(){
                var r = confirm("You are about to Log out");
                if (r == true) {
                    firebase.auth().signOut().then(() => {
                        localStorage.setItem('DevWest_authenticated', false)
                        // this.$router.push('/login')
                        window.location.href = '/login'
                    })
                } else {
                    console.log('Not logged out')
                }
            }
        },
        watch: {
            '$route'() {
                this.$root.$emit('closenav')
            }
        },
    }
</script>

<style lang="scss" scoped>
.avatar {
    width: 100px;
    @media (max-width: 1199px) {
        width: 90px;
    }
}
</style>
