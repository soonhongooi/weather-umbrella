<template>
  <div v-if="forecast !== null" class="mt-4 bg-gray-300 h-auto p-2 rounded-md">
    <div v-if="forecast.RESULT === 'NOT_FOUND'">
      <p id="not-found">NOT FOUND</p>
    </div>
    <div v-else>
      <p>City:</p>
      <p id="city">{{ forecast.name }}</p>
      <p>Temperature:</p>
      <p id="temp">{{ forecast.main.temp }}°C</p>
      <p>Min. Temperature:</p>
      <p id="min-temp">{{ forecast.main.temp_min }}°C</p>
      <p>Max. Temperature:</p>
      <p id="max-temp">{{ forecast.main.temp_max }}°C</p>
      <p>Weather:</p>
      <p>
        <span id="weather-main">{{ forecast.weather[0].main }}</span>
        <span id="weather-desc">{{ forecast.weather[0].description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters({
    forecast: 'get'
  })
}
</script>

<style></style>
