<template>
  <div id="blog">
   <h3>添加博客</h3>
   <form action="" v-if="!submit">
       <label for="">主题</label>
       <input type="text" v-model="blog.title">

       <label for="">内容</label>
       <textarea v-model="blog.content"></textarea>

       <div id="checkboxs">
           <label for="">vue</label>
         <input type="checkbox" value="vue"  v-model="blog.categggg">

         <label for="">vuejj</label>
         <input type="checkbox" value="vuejj"  v-model="blog.categggg">

         <label for="">vuejjg</label>
         <input type="checkbox" value="vuejjg" v-model="blog.categggg">
         

         <label for="">vuejjhg</label>
         <input type="checkbox" value="vuejjhg"  v-model="blog.categggg">

       </div>

       <label for="">作者:</label>
       <select v-model="blog.author">
           <option v-for="item in authors" :key="item.name">{{item}}</option>
       </select>
       <button @click.prevent="postinfo">添加博客</button>
   </form>

   <div id="preview" v-if="submit">
       <h1>你丫的波尔克还添加成功了小子666</h1>
       <h3>博客总览</h3>
       <p>博客标题:{{blog.title}}</p>
       <p>博客内容:{{blog.content}}</p>
       <p>博客分类:
       <ul>
           <li v-for="categ in blog.categggg" :key="categ.title">{{categ}}</li>
       </ul></p>
     <p>作者:{{blog.author}}</p>
   </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
        blog:{
            title:"",
            content:"",
            author:"",
            categggg:[]
        },
        authors:["煞笔","dsa","面试牛逼"],
        submit:false
      }
  },
  methods:{
      postinfo(){
          this.$http.post("http://jsonplaceholder.typicode.com/posts",{
              title:this.blog.title,
              content:this.blog.content,
            
          }).then(data=>{
              console.log(data)
              this.submit=true;
          })
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#blog{box-sizing: border-box}
#blog{margin:20px auto;
      max-width: 600px;
         padding:20px;}
label{ display: block;margin: 20px 0 10px;}

input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}

textarea{
  height: 200px;
}

#checkboxs label{
  display: inline-block;
  margin-top: 0;
}

#checkboxs input{
  display: inline-block;
  margin-right: 10px;
}

button{
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3{
  margin-top: 10px;
}
</style>
