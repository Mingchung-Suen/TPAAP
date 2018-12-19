<template>
  <div id="tip">Verifying User's Authority...</div>
</template>

<script>
export default {
  name: 'Passport',
  data() {
    return {
      token: ''
    }
  },
  created() {
    // this.getuserToken()
    this.$store.dispatch('getInfoUser').then(() => {
      this.$router.push({ path: '/' })
    })
  },
  methods: {
    getuserToken() {
      console.log(this.$route.query.token)
    }
  }
}
</script>

<style lang="scss" scoped>
#tip{
  // color: #888888;
  margin-left: 10px;
  margin-top: 10px;
}
</style>

