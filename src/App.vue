<template>
    <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
        <!--<div v-if="toggleShow">
        <Display />
    </div>-->
        <!--<div @click="toggleShow">
        <Display />
    </div>-->
        <!--<div v-if="showProp">
        <span> IF </span>
        <Display />
    </div>
    <div v-else>
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>-->
        <div v-if="show">
            
            <DisplaySix></DisplaySix>
            <!--<DisplayFour></DisplayFour>-->

        </div>
        <div v-else-if="show2">

            <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->


            <DisplayFour></DisplayFour>
        </div>
        <div v-else>
            <DisplayPDF></DisplayPDF>
        </div>


        <!--<component :is="activeVue" />-->





        <!--<button class="btn btn-success" v-on:click="myVal = !myVal">toggle btn</button>-->

        <!--<button v-on:click="showProp = !showProp">toggle btn</button>-->
        <!--<button @click="toggleVue">Vue</button>-->

        <!--<button @click="newToggle = !newToggle">Test</button>
        <div v-if="newToggle">Test ARea</div>-->


        <!--<button @click="timerFunction">Method Btn</button>

        <div> {{ showProp }} </div>

        <div> {{ myVal }} </div>



        <button @click="show = !show">constant</button>

        <h1> {{ show }}</h1>-->
    </div>


</template>

<script>
    import { ref } from "vue"
    import HelloWorld from './components/HelloWorld.vue'
    import Display from './components/Display.vue'
    import DisplayPDF from './components/DisplayPDF.vue'
    import DisplaySix from './pages/DisplaySix.vue'
    import DisplayFour from './pages/DisplayFour.vue'
    //const hw = resolveComponent('HelloWorld')
    //const di = resolveComponent('Display')
    const show = ref(true)
    const show2 = ref(false)

export default {
    name: 'App',
    components: {
        HelloWorld,
        Display,
        DisplayPDF,
        DisplaySix,
        DisplayFour
    },
    data() {
        return {
            showProp: true,
            activeVue: 'Display',
            newToggle: true,
            myVal: true,
            show: true,
            show2: false
        }
    },
        created() {

            //setInterval(async () => {
            setInterval( () => {


                console.log("show " + this.show);
                console.log("show2 " + this.show2);
                if (this.show) {
                    console.log("inside show");
                    this.show = false;
                    this.show2 = true;
                } else if (this.show2) {
                    console.log("inside show2");
                    this.show = false;
                    this.show2 = false;
                } else if (this.show === false && this.show2 === false) {
                    console.log("inside last");
                    this.show = true;
                    this.show2 = false;
                }

            }, 6000);



            //setTimeout(() => {
            //    console.log("F");
            //    this.myVal = false, 5000
            //})

            //startVue() {
            //    let timer = timerFunction();
            //    //timer
            //    //    .then(function () {
            //    //    });
            //}
                //.then(this.myVal = true, 5000)
                //.then(this.myVal = false, 5000);
            //.catch(r => console.log(r))
        },
    methods: {
        //toggleDisplay() {
        //    show === true ? false : true;
        //    alert('test');
        //}
        toggleShow() {
            alert('test');
            if (showProp) {
                this.showProp = false;
            } else {
                this.showProp = true;
            }

        },
        method() {
            console.log("Inside a function named method");
            alert("method alert");
            console.log("After Alert");
        },

        timerFunction() {
            //setTimeout(() => {
            //    this.test();
            //    console.log("after test() call");
            //}, 4000);
                
        },
        checkFileType(file) {
            console.log('inside checkFileType');
        }

        //toggleVue() {
        //    //this.activeVue === "Display" ? this.activeVue = "Display" : this.activeVue = "HelloWorld";
        //},

    }
    //},
    //data: {
    //    return {
    //        selectedComp: "HelloWorld"
    //    }
    //},
    //methods: {
    //    toggleDisplay(comp: string) {
    //        this.selectedComp = comp;
    //    }
    //}
}
</script>

<style>
    body {
        background-color: #b9b9b9;
    }
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      /*margin-top: 60px;*/
    }

</style>
