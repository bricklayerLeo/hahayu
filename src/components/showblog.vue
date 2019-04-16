<template>
  <div id="showblog" v-theme="'wide'">
      <h2>博客总览</h2>
      <input type="search" v-model="search" placeholder="搜索" >

  <div id="singleblog">
      <div id="single1" v-for="item in filtersearch"
       :key="item.title" @click="getmoreinfo(item.id)">
      <h3 v-rainbow>{{item.title | to-uppercase}}</h3>
      <p>{{item.body | snippet}}</p>
      </div>

    
</div>

  </div>
</template>

<script>
export default {
data(){
    return{
        blogs:[],
        search:""
      
    }
},
created(){
  this.$http.get("https://jsonplaceholder.typicode.com/posts")
  .then(data=>{
         this.blogs = data.body.slice(0,10);
  })
},
computed:{
     filtersearch(){
        return this.blogs.filter((item)=>{
            return item.title.match(this.search)
        })
     }
},
methods:{
    getmoreinfo(id){
        this.$router.push({ name: 'contentblog', params: {  id }})
    }
}
}
</script>

<style>
#showblog{
    margin: 0 auto;
}

#showblog input{
   display: block;
    width: 100%;
    padding: 8px;
}
#singleblog{
    margin-top: 20px;
}

#single1,#single2{ 
    padding:20px;
    background-color: #eee;
    box-sizing: border-box;
    margin-bottom: 20px;
}
#single1 p{
    font-size: 16px;
}
</style>
