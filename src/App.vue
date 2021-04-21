<template>
  <div id="app">
     ================
    <subs></subs>
    ================
    <add></add>
    <input type="text" v-model="json"/>

<p id="abcd">Resize the browser window to see how the text size scales.</p>




    <h1> current price: {{price}}</h1>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
        <router-view></router-view>

  </div>
</template>

<script>
import subs from './components/Com2.vue'
import add from './components/Com3.vue'
import { eventBus } from './eventBus.js'


export default {

  data() {
    return {
      altbalaji: "mobiotics",
      counter: 0,
      json: 0,
      arr : [12, 30,155],
      price: 0
    }
  },
  watch: {
    counter(val) {
      if (val === 100) {
        // alert(1);
      }
    },
    json (val) {
    console.log(val)
    }
  },
  methods: {

  },
  components: {
    subs,
    add
  },
  mounted() {
    setTimeout (() => {
      this.counter = 100;
    },2000)


    eventBus.$on('cart', (data) => {
      this.price += data;
    })
  }

}
</script>
<style>

</style>
