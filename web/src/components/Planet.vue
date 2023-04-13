<template>
  <div :class="'planet'">
    <h3>
      {{ planet.name }}
    </h3>
    <p>
      Population: <span>{{ planet.population }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Planet",
  props: {
    planet: Object,
  },
};
</script>

<style scope>
.planet {
  background: #2e2c2c;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.planet h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.3rem;
  font-weight: 700;
}

.planet p span {
  font-weight: 500;
}
</style>
