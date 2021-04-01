<template>
  <div>
      I am Student Comp {{id}}

      <input type="button" value="ok" @click="goBack()" />
  </div>
</template>

<script>
export default {
    data () {
        return {
            id: ''
        }
    },
    methods: {
        goBack () {
            this.$router.push({
                name: 'com1'
            })
        }
    },
    mounted () {
        console.log(this.$route.query.name)
        this.id = this.$route.params.id
    }
 }
</script>

<style>

</style>