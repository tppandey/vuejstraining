<template>
    <div>
      <h1>I am Com1</h1>
      <input type="button" value="homepagetostudent" @click="goBack()" />

      <ChildCom></ChildCom>
    </div>
</template>

<script>
import ChildCom1 from "./ChildCom1.vue"
export default {
    props:['title'],
    methods: {
      goBack () {
          this.$router.push({
              name: 'stud',
              params: {
                id: 1000
              },
              query: {
                age: 1900
              }
          })
      }
    },
  components: {
    ChildCom: ChildCom1
  }  

}
</script>

<style>

</style>