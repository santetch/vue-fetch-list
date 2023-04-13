<template>
  <div :key="planet.id" v-for="planet in planets.results">
    <Planet :planet="planet" />
  </div>
</template>

<script>
import Planet from "./Planet.vue";

export default {
  name: "Planets",
  props: {
    planets: Object,
  },
  components: {
    Planet,
  },
};
</script>
