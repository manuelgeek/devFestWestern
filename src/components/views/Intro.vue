<template>
    <div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 margin_bottom_30_all">
            <div class="center">
                <img :src="detail.avatar" width="200" class="img-circle" alt="me" />
            </div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div class="row margin_bottom_20_all">
                <div class="full">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <h3 class="margin_bottom_0">{{detail.name}}</h3> <br>
                        <p class="large_2 theme_color">{{detail.bio}}</p>
                        <a :href="'https://'+detail.website">{{detail.website}}</a>
                    </div>
                </div>
            </div>
            <div class="row margin_bottom_30_all">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p class="large_2" > {{detail.company}} <br> {{detail.organization}} - Organizer
                    </p>
                    <br><br>
                    <p class="large_2">@{{detail.twitter}}</p>
                    <br><br><br>
                    <div class="social_icon_style_2 pull-left">
                        <ul>
                            <li><a target="_blank" :href="'https://github.com/'+detail.github"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                            <li><a target="_blank" :href="'https://twitter.com/'+detail.twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import db from "@/services/Database";
    export default {
        name: "Intro",
        data(){
            return {
                detail: [],
            }
        },
        mounted(){
            this.getDetails();
        },
        methods: {
            getDetails(){
                let items = []
                // console.log(params)
                db.collection('details').where('github','==','manuelgeek').onSnapshot((snapshot) => {
                    items = []
                    snapshot.forEach((doc) => {
                        // ? we will not use the id so we ingore it, when its a logn array, we will need it
                        // items.push({ id: doc.id, details: doc.data() })
                        items.push(  doc.data() )
                    })
                    // console.log(items[0])
                    this.detail = items[0]
                })
            }
        }
    }
</script>

<style scoped>

</style>