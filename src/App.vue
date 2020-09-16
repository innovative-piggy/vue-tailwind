<template>
  <div class="select-none">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/navication/Navbar'
import Footer from './components/navication/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>