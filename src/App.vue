<template>
  <div id="app">
    
 <headertop></headertop>
    <router-view></router-view>
  </div>
</template>

<script>
import addblog from './components/adblog'
import headertop from './components/headertop'
import showblog from './components/showblog'

export default {
  name: 'App',
  components: {
    addblog,
    headertop,
    showblog
  }
}
</script>

<style>

</style>
