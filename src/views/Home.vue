<template>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <article v-if="currentPage.includes('welcome') || currentPage === '/' " class="wow fadeInDown" id="welcome">
            </article>
            <article v-show="currentPage.includes('title') " class="wow fadeInDown" id="title">
                <div class="row ">
                    <div class="col-md-12">
                        <div class="padd text-center vertical-center content-center">
                            <h2 class="h2">Build your Web with Firebase</h2>
                            <br>
                        </div>
                    </div>
                </div>
            </article>
            <article v-if="currentPage.includes('intro') || currentPage === '/' " class="wow fadeInDown" id="intro">
            </article>
            <article v-show="currentPage.includes('agenda') " class="wow fadeInDown" id="agenda">
                <div class="row ">
                    <div class="col-md-6">
                        <div style="margin-left: 100px;" class="padd  vertical-center content-center">
                            <h2>Agenda</h2>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="agenda ">
                            <h3>What is Firebase 1</h3> <br> <br>
                            <h3>Storage 2</h3> <br><br>
                            <h3>Realtime DB & Firestore 3</h3><br> <br>
                            <h3>Authentication 4</h3> <br><br>
                            <h3>Cloud Messaging 5</h3> <br><br>
                            <h3>Hosting 6</h3>
                        </div>
                    </div>
                </div>
            </article>
            <article v-if="currentPage.includes('firebase') " class="wow fadeInDown" id="firebase">
                <div class="row ">
                    <div class="col-md-12">
                        <div class="padd text-center vertical-center content-center">
                            <h2 class="yellow">A comprehensive app
                                development platform</h2>
                            <br>
<!--                            <h2 class="yellow">Firebase helps-->
<!--                                mobile and web-->
<!--                                app teams succeed</h2>-->
                        </div>
                    </div>
                </div>
            </article>
            <article v-if="currentPage.includes('storage') " class="wow fadeInDown" id="storage">
                <div class="row ">
                    <div class="col-md-12">
                        <div class=" text-center">
                            <h2 >Cloud Storage</h2>
                        </div>
                        <div class="text-left">
                            <div class="row">
                                <div class="container">
                                    <div class="col-md-10 col-md-offset-1">
                                        <h3 class="text-center" >Cloud Storage for Firebase is a powerful, simple, and cost-effective object storage service built for Google scale.</h3>
                                    </div>
                                    <div class="margin-50 margin_bottom_30"></div>
                                    <div class="col-md-12">
                                        <div class="list col-md-10 col-md-offset-1 ">
                                            <h3>Key Capabilities</h3>
                                            <ul>
                                                <li>Robust operations</li>
                                                <li>Strong Security</li>
                                                <li>High Scalability</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article v-if="currentPage.includes('database') " class="wow fadeInDown" id="database">
                <div class="row ">
                    <div class="col-md-12">
                        <div class=" text-center">
                            <h2>Realtime Database</h2>
                        </div>
                        <div class="text-left">
                            <div class="row">
                                <div class="container">
                                    <div class="col-md-10 col-md-offset-1">
                                        <h3 class="" >Cloud Storage for Firebase is a powerful, simple, and cost-effective object storage service built for Google scale.Cloud Storage for Firebase is a powerful, simple, and cost-effective object storage service built for Google scale.</h3>
                                    </div>
                                    <div class="margin-50 margin_bottom_30"></div>
                                    <div class="list col-md-10 col-md-offset-1 ">
                                        <h3>Key Capabilities</h3>
                                        <ul>
                                            <li>Realtime</li>
                                            <li>Offline support for mobile and web</li>
                                            <li>Accessible from your mobile or web applications</li>
                                            <li>Scale across multiple databases</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article v-show="currentPage.includes('firedemo') " class="wow fadeInDown" id="firedemo">
                <div class="row">
                    <div class="col-md-5">
                        <!--                        this is empty-->
                    </div>
                    <div class="col-md-7">
                        <!--                        Firestore Demo-->
                        <firestore/>
                    </div>
                </div>
            </article>
            <article v-if="currentPage.includes('firestore') " class="wow fadeInDown" id="firestore">
                <div class="row ">
                    <div class="col-md-12">
                        <div class=" text-center">
                            <h2>Cloud Firestore</h2>
                        </div>
                        <div class="text-left">
                            <div class="row">
                                <div class="container">
                                    <div class="col-md-10 col-md-offset-1">
                                        <h3 class="" >Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform.
                                            Firestore database functions with data models by storing your data in documents. Those documents are stored inside of collections</h3>
                                    </div>
                                    <div class="margin-50 margin_bottom_30"></div>
                                    <div class="col-md-12">
                                        <div class="list col-md-10 col-md-offset-1 ">
                                            <h3>Key Capabilities</h3>
                                            <ul>
                                                <li>Flexibility</li>
                                                <li>Offline support</li>
                                                <li>Realtime updates</li>
                                                <li>Scale across multiple databases</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article v-if="currentPage.includes('auth') " class="wow fadeInDown" id="auth">
                <div class="row ">
                    <div class="col-md-12">
                        <div class=" text-center">
                            <h2>Firebase Authentication</h2>
                        </div>
                        <div class="text-left">
                            <div class="row">
                                <div class="container">
                                    <div class="col-md-10 col-md-offset-1">
                                        <h3 class="" >Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</h3>
                                    </div>
                                    <div class="margin-50 margin_bottom_30"></div>
                                    <div class="list col-md-10 col-md-offset-1 ">
                                        <h3>Key Capabilities</h3>
                                        <div class="col-md-6">
                                            <ul>
                                                <li>Drop-in authentication solution</li>
                                                <li>Email and password based authentication</li>
                                                <li>Federated identity provider integration</li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6">
                                            <ul>
                                                <li>Phone number authentication</li>
                                                <li>Custom auth system integration</li>
                                                <li>Anonymous auth</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article v-if="currentPage.includes('messaging') " class="wow fadeInDown" id="messaging">
                <div class="row ">
                    <div class="col-md-12">
                        <div class=" text-center">
                            <h2>Firebase Cloud  Messaging</h2>
                        </div>
                        <div class="text-left">
                            <div class="row">
                                <div class="container">
                                    <div class="col-md-10 col-md-offset-1">
                                        <h3 class="" >Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably deliver messages at no cost.
                                            <br>
                                            Using FCM, you can notify a client app that new email or other data is available to sync. You can send notification messages to drive user re-engagement and retention.</h3>
                                    </div>
                                    <div class="margin-50 margin_bottom_30"></div>
                                    <div class="list col-md-10 col-md-offset-1 ">
                                        <h3>Key Capabilities</h3>
                                        <div class="col-md-12">
                                            <ul>
                                                <li>Send notification messages or data messages</li>
                                                <li>Versatile message targeting</li>
                                                <li>Send messages from client apps</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article v-if="currentPage.includes('demo') " class="wow fadeInDown" id="demo">
                <notification/>
            </article>
            <article v-if="currentPage.includes('hosting') " class="wow fadeInDown" id="hosting">
                <div class="row ">
                    <div class="col-md-12">
                        <div class=" text-center">
                            <h2>Firebase Hosting</h2>
                        </div>
                        <div class="text-left">
                            <div class="row">
                                <div class="container">
                                    <div class="col-md-10 col-md-offset-1">
                                        <h3 class="" >Firebase Hosting provides fast and secure hosting for your web app, static and dynamic content, and microservices.
                                            <br>
                                            Firebase Hosting is production-grade web content hosting for developers. With a single command, you can quickly deploy web apps and serve both static and dynamic content to a global CDN (content delivery network)</h3>
                                    </div>
                                    <div class="margin-50 margin_bottom_30"></div>
                                    <div class="list col-md-10 col-md-offset-1 ">
                                        <h3>Key Capabilities</h3>
                                        <div class="col-md-12">
                                            <ul>
                                                <li>Serve content over a secure connection</li>
                                                <li>Host static and dynamic content plus microservices</li>
                                                <li>Deploy new versions with one command</li>
                                                <li>Rollback with one click</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article v-if="currentPage.includes('q_n_a') " class="wow fadeInDown" id="q_n_a">
                <div class="row ">
                    <div class="col-md-12">
                        <div class="text-center q vertical-center content-center">
                            <h2 style="font-size: 100px; color: #5dbe4b;">Q and A</h2>
                        </div>
                    </div>
                </div>
            </article>
            <article v-if="currentPage.includes('ending') " class="wow fadeInDown" id="ending">
                <div class="row ">
                    <div class="col-md-12">
                        <div class="text-center q vertical-center content-center">
                            <h2 class="h2">Thank you</h2> <br>
                        </div>
                        <div class="text-info text-center links" >
                            <p style="color: #f24129">github.com/manuelgeek/devFestWestern</p>
                            <p style="color: #f24129">github.com/droidconKE/droidcon19Web</p>
                        </div>
                    </div>
                </div>
            </article>

        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Notification from "@/components/views/Notification";
    import Firestore from "@/components/views/Firestore";
    export default {
        name: 'home',
        components: {
            Notification, Firestore,
        },
        computed:{
            currentPage(){
                return this.$route.fullPath;
            },
        }
    }
</script>

<style lang="scss" scoped>
    article {
        height: 100%;
        h2 {
            color: #465DBC;
        }
        .h2 {
            color: #465DBC;
            font-size: 80px;
            @media (max-width: 1199px) {
                font-size: 50px;
            }
        }
    }
    #welcome{
        background: url(./../../public/assets/images/fulll.jpg) no-repeat;
        background-size: contain;
        @media (max-width: 1199px) {
            background: url(./../../public/assets/images/fulll.jpg) no-repeat;
            background-size: contain;
        }
    }
    #intro{
        background: url(./../../public/assets/images/manu.jpeg) no-repeat;
        background-size: contain;
        @media (max-width: 1199px) {
            background: url(./../../public/assets/images/manu.jpeg) no-repeat;
            background-size: cover;
        }
    }
    #firedemo{
        background: url(./../../public/assets/images/side.png) no-repeat;
        background-size: contain;
        @media (max-width: 1199px) {
            background: url(./../../public/assets/images/empty.png) no-repeat;
            background-size: cover;
        }
    }
    #agenda, #title, #firebase, #storage, #database, #firestore, #auth, #messaging, #demo, #hosting, #q_n_a, #end{
        background: url(./../../public/assets/images/empty.png) no-repeat;
        background-size: contain;
        @media (max-width: 1199px) {
            background: url(./../../public/assets/images/empty.png) no-repeat;
            background-size: cover;
        }
    }
    .vertical-center {
        min-height: 70%;  /* Fallback for browsers do NOT support vh unit */
        min-height: 70vh; /* These two lines are counted as one :-)       */

        display: flex;
        /*flex-direction: column;*/
        align-items: center;
        @media (max-width: 1199px) {
            min-height: 20%;  /* Fallback for browsers do NOT support vh unit */
            min-height: 20vh; /* These two lines are counted as one :-)       */
        }
    }
    .padd{
        padding: 100px;
    }
    .agenda {
        display: flex;
        flex-direction: column;
        padding: 30px 30px 50px;
        border-left: 3px solid #465DBC;
        min-height: 100%;
        @media (max-width: 1199px) {
           margin-bottom: 20px;
        }
    }
    .q {
        margin-left: 300px;
        @media (max-width: 1199px) {
            margin-left: 90px;
            margin-top: 180px;
        }
    }
    .links{
        margin-top: -70px;
        @media (max-width: 1199px) {
            margin-top: 50px;
        }
        text-align: center;
        p{
            font-size: 25px;
            text-align: center;
            @media (max-width: 1199px) {
                font-size: 20px;
            }
        }
    }
    h2{
        line-height: normal;
    }
    .yellow{
        color: #f4cf44;
    }
    .blue {

    }
    .list{
        ul{
            list-style: square;
            li{
                margin-bottom: 20px!important;
                font-size: 20px;
            }
        }
        h3{
            color: #465DBC;
        }
        padding: 30px 20px;
        margin-top: 20px;
        @media (max-width: 1199px) {
            margin-bottom: 20px;
        }
    }
</style>
