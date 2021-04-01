<template>
  <div>
      <h1>=====I am ChildCom1.vue</h1>


      <button type="button"  @click="sendData(100)" value="mango">mango</button>

      <button type="button"  @click="sendData(200)" value="rice">rice</button>






  </div>
</template>

<script>
import { eventBus } from '../eventBus.js'
console.log(eventBus)
export default {
    methods: {
        sendData (value) {
            eventBus.$emit('cart', value)
        }
    }
}
</script>

<style>

</style>