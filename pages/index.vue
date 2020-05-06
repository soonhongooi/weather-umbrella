<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full">
      <Header></Header>
      <Search></Search>
      <Forecast></Forecast>
    </div>
  </div>
</template>

<script>
import Search from '~/components/Search.vue'
import Header from '~/components/Header.vue'
import Forecast from '~/components/Forecast.vue'

export default {
  components: {
    Search,
    Header,
    Forecast
  }
}
</script>

<style></style>
