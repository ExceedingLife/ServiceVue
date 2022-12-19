<template>
    <div class="post">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <!--<div class="titleBlock text-center">
            <div class="row justify-content-center" style="width:100%;">
                <div class="col-6">
                    Messer Service Department
                </div>
            </div>
        </div>-->

        <div v-if="byteArrays" class="displayContent container-fluid">


            <div class="row mb-1">
                <!--<span class="col-12">Image1</span>-->
                <!--<img :src="byteArrayOne" width="200px" length="200px" />-->
                <!--<img :src="imagePath" width="200px" length="200px" />-->
                <!--<img :src="byteArrayOne" style='width="200px";length="200px"' "  />-->

                <span class="col-4">
                    <img :src="byteArrayOne" width="600px" height="500px" />

                </span>


                <span class="col-4">
                    <img :src="byteArrayTwo" width="600px" height="500px" />

                </span>

                <span class="col-4 ">
                    <img :src="byteArrayThree" width="600px" height="500px" />

                </span>
            </div>
            <div class="row mt-3">
                <span class="col-4">
                    <img :src="byteArrayFour" width="600px" height="500px" />

                </span>


                <span class="col-4">
                    <img :src="byteArrayFive" width="600px" height="500px" />

                </span>

                <span class="col-4 ">
                    <img :src="byteArraySix" width="600px" height="500px" />

                </span>
            </div>

            <!--{{ byteArrays }}-->
        </div>

    </div>
</template>
<script lang="js">
    import { ref } from 'vue'
    import Vue from 'vue'
    import Display from '.././components/Display.vue'
    //import { forEach } from 'core-js/core/dict'

    export default {
        data() {
            return {
                loading: false,
                post: false,
                byteArrays: false,
                byteArrayOne: null,
                byteArrayTwo: null,
                byteArrayThree: null,
                byteArrayFour: null,
                byteArrayFive: null,
                byteArraySix: null
            }
        },
        created() {
            this.fetchByteArray();
        },
        methods: {
            fetchByteArray() {
                this.post = true;
                this.loading = false;
                //Docs\003
                console.log("inside FetchByteArray");
                fetch('https://localhost:5001/api/Doc/GetFolder/Shipment')
                    .then(response => {
                        this.byteArrays = true;
                        this.byteArrayOne = "";
                        this.byteArrayTwo = "";
                        this.byteArrayThree = "";
                        this.byteArrayFour = "";
                        this.byteArrayFive = "";
                        this.byteArraySix = "";
                        //let result = Promise.resolve(response);
                        //result.then(val => console.log(val));

                        if (response.ok) {
                            response.json().then(bytes => {
                                bytes.forEach((b) => {
                                    //console.log(b.fileName);
                                    let extension = this.checkFileType(b.fileName);

                                    if (b.fileName.startsWith("image00")) {
                                        console.log(b.fileName + " exists");
                                        if (b.byteArray !== "") {
                                            if (extension === "png") {
                                                this.byteArrayOne = "data:image/png;base64," + b.byteArray;
                                            } else if (extension === "pdf") {
                                                this.byteArrayOne = "data:application/pdf;base64, " + b.byteArray;
                                            } else if (extension === "jpg") {
                                                this.byteArrayOne = "data:image/jpeg;base64, " + b.byteArray;
                                            }
                                        }
                                    } else if (b.fileName.startsWith("image01")) {
                                        console.log(b.fileName + " exists");
                                        if (b.byteArray !== "") {
                                            if (extension === "png") {
                                                this.byteArrayTwo = "data:image/png;base64," + b.byteArray;
                                            } else if (extension === "pdf") {
                                                this.byteArrayTwo = "data:application/pdf;base64, " + b.byteArray;
                                            } else if (extension === "jpg") {
                                                this.byteArrayTwo = "data:image/jpeg;base64, " + b.byteArray;
                                            }
                                        }
                                    } else if (b.fileName.startsWith("image02")) {
                                        console.log(b.fileName + " exists");
                                        if (b.byteArray !== "") {
                                            if (extension === "png") {
                                                this.byteArrayThree = "data:image/png;base64," + b.byteArray;
                                            } else if (extension === "pdf") {
                                                this.byteArrayThree = "data:application/pdf;base64, " + b.byteArray;
                                            } else if (extension === "jpg") {
                                                this.byteArrayThree = "data:image/jpeg;base64, " + b.byteArray;
                                            }
                                        }
                                    } else if (b.fileName.startsWith("image03")) {
                                        console.log(b.fileName + " exists");
                                        if (b.byteArray !== "") {
                                            if (extension === "png") {
                                                this.byteArrayFour = "data:image/png;base64," + b.byteArray;
                                            } else if (extension === "pdf") {
                                                this.byteArrayFour = "data:application/pdf;base64, " + b.byteArray;
                                            } else if (extension === "jpg") {
                                                this.byteArrayFour = "data:image/jpeg;base64, " + b.byteArray;
                                            }
                                        }
                                    } else if (b.fileName.startsWith("image04")) {
                                        console.log(b.fileName + " exists");
                                        if (b.byteArray !== "") {
                                            if (extension === "png") {
                                                this.byteArrayFive = "data:image/png;base64," + b.byteArray;
                                            } else if (extension === "pdf") {
                                                this.byteArrayFive = "data:application/pdf;base64, " + b.byteArray;
                                            } else if (extension === "jpg") {
                                                this.byteArrayFive = "data:image/jpeg;base64, " + b.byteArray;
                                            }
                                        }
                                    } else if (b.fileName.startsWith("image05")) {
                                        console.log(b.fileName + " exists");
                                        if (b.byteArray !== "") {
                                            if (extension === "png") {
                                                this.byteArraySix = "data:image/png;base64," + b.byteArray;
                                            } else if (extension === "pdf") {
                                                this.byteArraySix = "data:application/pdf;base64, " + b.byteArray;
                                            } else if (extension === "jpg") {
                                                this.byteArraySix = "data:image/jpeg;base64, " + b.byteArray;
                                            }
                                        }
                                    }

                                });
                            });
                        }
                    })

                    //.then(bytes => {
                    //    //console.log(bytes);

                    //    //this.byteArrays = bytes;
                    //    //console.log(bytes.fileName);
                    //})
                    .catch(error => console.log("E " +error.message));


            },
            checkFileType(file) {
                return file.split('.').pop().toLowerCase();
            }
        }
    }
</script>
<style scoped>
    .displayContent {
        background-color: #b9b9b9;
    }
</style>