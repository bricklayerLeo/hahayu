<template>
<div id="everyblog">
    <h1>{{blogdesc.title}}</h1>
    <article>{{blogdesc.body}}</article>
  </div>
</template>

<script>
export default {
    name:'contentblog',
     data() {
      return {
          id:this.$route.params.id,
          blogdesc:{}
      }
  },
  created() {
      this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
      .then(data=>{
          
         this.blogdesc =data.body;
  
      })
  }
}
</script>

<style>
#everyblog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background:#eee;
    border: 1px dotted #aaa;
}
</style>
