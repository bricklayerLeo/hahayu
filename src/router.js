import VueRouter from 'vue-router'



import addblog from './components/adblog'
import showblog from './components/showblog'
import contentblog from './components/contentblog'





var  router = new VueRouter({
        routes:[
            {path:"/",component:showblog},
            {path:"/add",component:addblog},
            {path:"/content/:id",component:contentblog,name:'contentblog'},
           
        ]
    })
    
export default router