<template>
    <div class="post">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div class="titleBlock text-center">
            <div class="row justify-content-center" style="width:100%;">
                <div class="col-6">
                    Service Title for Page
                </div>
            </div>
        </div>

        <div v-if="byteArray" class="content">

            <img :src="byteArray" />

            <!--<div>{{ createImage }}</div>
            <p>{{ byteArray }}</p>--> 
        </div>

    </div>

</template>
<script lang="js">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                loading: false,
                post: null,
                byteArray: null
            };
        },
        created() {
            this.fetchByteArray();

            // Hide DisplayVue after 5 seconds
            //setTimeout(() => this.byteArray = false, 5000)
            //.then(
            //    setTimeout(() => this.byteArray = true, 2000)
            //    );

            //setTimeout(() => this.img = false, 5000)
            //    .then(
            //        setTimeout(() => this.img = true, 2000)
            //    );
        },
        //watch: {

        //}
        methods: {
            fetchByteArray() {
                this.post = true;
                this.byteArray = true;
                this.loading = null;

                
                fetch('https://localhost:5001/api/Doc/image01.png')
                    .then(response => response.json())
                    .then(bytes => {
                        this.byteArray = "data:image/png;base64," + bytes;
                        this.loading = false;
                        return;
                    })
                    .catch(console.log("Error"));
            }
        },
        computed: {
            createImage() {
                return `<img class="img-fluid" src="data:image/png;base64,` + this.byteArray + `" />`;
            }
        }
    });
</script>