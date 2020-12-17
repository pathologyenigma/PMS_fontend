<template>
<Header :title="title"/>
<Content />
<Footer />
</template>

<script>
import Header from "./components/Header/Header.vue"
import Footer from "./components/Footer/Footer.vue"
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return{
      title: this.$store.state.title
    }
    
  },
  mounted(){
    this.axios.post("http://127.0.0.1:8000",{
      usertype: 0
    }).then(res=>{
      this.$store.commit("setTitle",res.data)
      console.log(this.title)
    })
    
  }
}
</script>

<style>

</style>
