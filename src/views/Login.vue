<template>
    <div class="col-md-4 login col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2">
        <div class="login-wrapper text-center">
            <div class="box">
                <div class="content-wrap">
                    <h4>defestWestern 2019 Presentation</h4>
                    <h5>Login to Access the Presentation</h5>
                    <div id="firebaseui-auth-container"></div>
                    <br>
                    <p style="color: red;">NOTE: Only Google Auth is enabled for this Demo</p>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import firebase from './../services/Firebase.js';
    var firebaseui = require('firebaseui');
    import "../../node_modules/firebaseui/dist/firebaseui.css"
    export default {
        mounted() {
            let self = this
            let uiConfig = {
                signInOptions: [{
                    provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
                },
                    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                    firebase.auth.GithubAuthProvider.PROVIDER_ID
                ],
                callbacks: {
                    signInSuccessWithAuthResult() {
                        localStorage.setItem('DevWest_authenticated', true)
                        alert('Login successful');
                        self.$router.push('/')
                    }
                }
            }
            var ui = new firebaseui.auth.AuthUI(firebase.auth())
            ui.start("#firebaseui-auth-container", uiConfig)
        },
    }
</script>

<style lang="scss" scoped>
    .login{
        background: url(./../../public/assets/images/empty.png) no-repeat;
        background-size: cover;
    }
</style>

