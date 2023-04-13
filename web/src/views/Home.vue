<template>
  <Planets :planets="planets" />
</template>

<script>
import Planets from "../components/Planets.vue";
import ActionsFactory from "../../../core/builders/ActionsFactory.js";

export default {
  name: "Home",
  props: {},
  components: {
    Planets,
  },
  data() {
    return {
      planets: [],
    };
  },
  async created() {
    const getPlanets = ActionsFactory.getPlanets();
    this.planets = await getPlanets.execute();
  },
};
</script>
