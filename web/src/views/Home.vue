<template>
  <Planets :planets="planets" />
  <Pagination :planets="planets" @next="changePage" @previous="changePage" />
</template>

<script>
import Planets from "../components/Planets.vue";
import Pagination from "../components/Pagination.vue";
import ActionsFactory from "../../../core/builders/ActionsFactory.js";

export default {
  name: "Home",
  props: {},
  components: {
    Planets,
    Pagination,
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
  methods: {
    async changePage(path) {
      const getPlanets = ActionsFactory.getPlanets();
      this.planets = await getPlanets.execute(path);
    },
  },
};
</script>
