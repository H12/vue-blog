<template>
  <div class="app-sidebar">
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
  data() {
    return {
      title: 'This is the Sidebar',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-sidebar {
  background-color: rgba(0,0,0,0.2);

  display: flex;
  justify-content: center;

  padding: 1em;
}

.title {
  font-size: 2em;
  font-weight: bold;
}
</style>
