<template>
    <div class="home">
        <div class="col-md-12" style="height: 520px;">
            <div class="col-md-6 col-md-offset-3 panel-primary">
                <div class="content-box-large">
                    <div class="panel-heading">
                        <div class="panel-title text-center"><h3 style="color: #465DBC; ">Send Push Notifications</h3></div>
                    </div>
                    <div class="panel-body">
                        <form class="form-horizontal" role="form" @submit.prevent="sendNotification()">
                            <div class="form-group">
                                <label for="inputEmail3" class="col-sm-2 control-label">Title</label>
                                <div class="col-sm-10">
                                    <input v-model="form.title" type="text" class="form-control" id="inputEmail3" placeholder="Title" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail3" class="col-sm-2 control-label">Target Url</label>
                                <div class="col-sm-10">
                                    <input v-validate="{url: {require_protocol: true }}" data-vv-name='url' data-vv-as="url" v-model="form.url" type="text" class="form-control" id="inputEmail32" placeholder="Url" required>
                                    <small class='text-danger'>{{ errors.first('url') }}</small>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputPassword3" class="col-sm-2 control-label">Topic</label>
                                <div class="col-sm-10">
                                    <select type="password" v-model="form.topic" class="form-control" id="inputPassword3" placeholder="Topic" required>
                                        <option value="">Select Topic</option>
                                        <option value="all">All</option>
                                        <option value="">Some Other topics</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">Message</label>
                                <div class="col-sm-10">
                                    <textarea v-model="form.message"  v-validate="'max:400'" data-vv-name='message' data-vv-as="message" class="form-control" placeholder="Textarea" rows="3" required></textarea>
                                    <small class='text-danger'>{{ errors.first('message') }}</small>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <button type="submit" class="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-unused-vars,no-undef */

    export default {
        data(){
            return {
                form: {
                    url : 'https://droidcon.co.ke',
                    message: '',
                    topic : '',
                    title : ''
                }
            }
        },
        methods: {
            sendNotification(){
                const jsonBody = {
                    "notification": {
                        "title": this.$data.form.title,
                        "body": this.$data.form.message,
                        "icon": "https://devfest-11a68.firebaseapp.com/assets/images/logo.png",
                        "click_action": this.$data.form.url
                    },
                    "data": {
                        "title": "devFest Western Kenya",
                        "body": "devFest"
                    },
                    "to": "/topics/"+this.$data.form.topic
                }
                const headers = {
                    'Authorization': 'key='+process.env.VUE_APP_SERVER_KEY,
                    'Content-Type' : 'application/json'
                };
                axios.post('https://fcm.googleapis.com/fcm/send',jsonBody,{headers})
                    .then(response => {
                        alert('Notifications sent')
                        this.$data.form.url = 'https://droidcon.co.ke'
                        this.$data.form.message = ''
                        this.$data.form.topic = ''
                        this.$data.form.title = ''
                        this.errors.clear()
                        return;
                        // console.log('Sent.:' ,response);
                    }).catch((err) => {
                    console.log('Unable to send ', err);
                });
            }
        }
    }
</script>

