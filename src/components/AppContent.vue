<template>
  <div
    class='app-content'
    v-bind:class='{ collapsed: isCollapsed }'
    v-on:click='expand'
  >
    <div class='title'>{{ title }}</div>
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
  props: ['isCollapsed', 'expand'],
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.app-content {
  flex: 4;

  display: flex;
  justify-content: center;

  padding: 1em;

  transition: flex-grow 0.5s ease;
}

.collapsed {
  flex: 1;
}

.title {
  font-size: 2em;
  font-weight: bold;
}
</style>
