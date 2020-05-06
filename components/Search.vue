<template>
  <form class="mt-8" @submit.prevent="search">
    <input type="hidden" name="remember" value="true" />
    <div class="rounded-md shadow-sm">
      <div>
        <input
          id="city"
          v-model="city"
          :disabled="useLocation"
          aria-label="Your Destination"
          type="text"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
          placeholder="City/Town"
        />
      </div>
      <!-- <div class="-mt-px">
            <input
              aria-label="Password"
              name="password"
              type="password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Password"
            />
          </div> -->
    </div>

    <div class="mt-6 flex items-center justify-between">
      <div class="flex items-center">
        <input
          id="use-location"
          v-model="useLocation"
          type="checkbox"
          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        />
        <label
          for="use-location"
          class="ml-2 block text-sm leading-5 text-gray-900"
        >
          Use my current location
        </label>
      </div>
    </div>

    <div class="mt-6">
      <button
        type="submit"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
      >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="umbrella"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
            fill="currentColor"
          >
            <path
              fill="currentColor"
              d="M575.7 280.8C547.1 144.5 437.3 62.6 320 49.9V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v17.9C138.3 62.6 29.5 144.5.3 280.8c-2.2 10.1 8.5 21.3 18.7 11.4 52-55 107.7-52.4 158.6 37 5.3 9.5 14.9 8.6 19.7 0 20.2-35.4 44.9-73.2 90.7-73.2 58.5 0 88.2 68.8 90.7 73.2 4.8 8.6 14.4 9.5 19.7 0 51-89.5 107.1-91.4 158.6-37 10.3 10 20.9-1.3 18.7-11.4zM256 301.7V432c0 8.8-7.2 16-16 16-7.8 0-13.2-5.3-15.1-10.7-5.9-16.7-24.1-25.4-40.8-19.5-16.7 5.9-25.4 24.2-19.5 40.8 11.2 31.9 41.6 53.3 75.4 53.3 44.1 0 80-35.9 80-80V301.6c-9.1-7.9-19.8-13.6-32-13.6-12.3.1-22.4 4.8-32 13.7z"
              class=""
            ></path>
          </svg>
        </span>
        GET FORECAST
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    city: '',
    useLocation: false
  }),
  methods: {
    async search() {
      const store = this.$store
      if (!this.useLocation) {
        await store.dispatch('search', { city: this.city })
      } else if (navigator.geolocation) {
        this.city = ''
        navigator.geolocation.getCurrentPosition(
          geolocationFound,
          geolocationError
        )
      } else {
        alert('Geolocation is not supported by this browser.')
      }

      async function geolocationFound(position) {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        await store.dispatch('search', { city: '', lat, lon })
      }

      function geolocationError() {}
    }
  }
}
</script>

<style></style>
