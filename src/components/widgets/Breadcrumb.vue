<template>
  <span class="text-tb-primary-dark">
      <router-link to="/">Testbericht.com</router-link>
        <router-link v-for="(link, index) in linkArray" :key="index" :to="link.url" class="last:text-tb-black last:pointer-events-none"> <span class="text-tb-primary-dark"> ></span> {{link.label}}</router-link>
  </span>
</template>

<script>
export default {
    name: 'Breadcrumb',
    props: ['linkArray']
}
</script>

<style>

</style>