<template>
  <div class="app-content">
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'AppContent',
  data() {
    return {
      title: 'This is the Content',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-content {
  display: flex;
  justify-content: center;

  padding: 1em;
}

.title {
  font-size: 2em;
  font-weight: bold;
}
</style>
