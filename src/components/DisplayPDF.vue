<template>
    <div class="post">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <!--<div class="titleBlock text-center">
            <div class="row justify-content-center" style="width:100%;">
                <div class="col-6">
                    Service Title for PDF Page
                </div>
            </div>
        </div>-->

        <div v-if="byteArrays" class="content">
            <!--<object data="byteArrayPDF" type="application/pdf" style="height:700px;width:1100px;"></object>-->
            <!--<img style="width:800px;height:700px;" :src="byteArrayPDF" />-->


            <div class="container">

                <iframe :src="byteArrayPDF" width="800px" height="800px"></iframe>

            </div>



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
                byteArrays: null,
                byteArrayPDF: null
            };
        },
        created() {
            this.fetchByteArray();
        }, 
        //watch: {

        //}
        methods: {
            fetchByteArray() {
                this.post = true;
                this.byteArrayPDF = true;
                this.loading = null;
                this.byteArrays = null;

                console.log("Inside PDF fetchByteArray()");
                
            //fetch('https://localhost:5001/api/Doc/Virtual-Visual-Service-2020.pdf')
                fetch('https://localhost:5001/api/Doc/GetFolder/Shipment')
                    .then(response => {
                        if (response.ok) {
                            this.byteArrays = true;
                            console.log("resp ok");
                            response.json().then(bytesPDF => {
                                bytesPDF.forEach((b) => {
                                    if (b.fileName === "pdfdoc01.pdf") {
                                        console.log(b.fileName + " exists!");
                                        if (b.byteArray !== "") {
                                            this.byteArrayPDF = "data:application/pdf;base64," + b.byteArray;
                                        }

                                    }
                                })
                            })
                        }
                    })

                    //.then(response => response.json())
                    //.then(bytespdf => {
                    //    this.byteArrayPDF = "data:application/pdf;base64," + bytespdf;
                    //    //this.byteArrayPDF = "data:image/png;base64," + bytespdf;

                    //    this.loading = false;
                    //    return;
                    //})
                    .catch(error => console.log(error.message + " : Error PDF View"));
            }
        }//,
        //computed: {
        //    createImage() {
        //        return `<object class="img-fluid" src="data:application/pdf;base64,` + this.byteArray + `" />`;
        //    },
        //    fetchByteArr2ay: async function () {
        //        // to see the "loading..." effect, I intentionally add a "setTimeout" code. that loads the pdf after "3s". You can remove it in your real app.
        //        await new Promise(resolve => setTimeout(resolve, 3000));
        //        fetch('https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf')
        //            .then(response => {
        //                console.log(response);
        //                // for this case "response.url" is what we need, but if you fetch data for example from a database ... you may need "response.json()" or other codes;
        //                this.srcData = response.url;
        //                this.byteArrayPDF = true;
        //            })
        //    }
        //}
    });
</script>
<style scoped>
    .content {
        background-color: #b9b9b9;
    }
</style>