<template>
  <div class="container">
    <i
      @click="$emit('previous', planets.previous)"
      class="fas fa-square-caret-left icon"
    ></i>
    <i
      @click="$emit('next', planets.next)"
      class="fas fa-square-caret-right icon"
    ></i>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    planets: Object,
  },
  emits: ["next", "previous"],
};
</script>

<style scope>
.container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 1rem;
}

.icon {
  font-size: 1.5rem;
}

.icon:hover {
  cursor: pointer;
}
</style>
