<template>
  <div
    class='bio'
    v-bind:class='{ collapsed: isCollapsed }'
    v-on:click='expand'
  >
    <div class='title'>{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Bio',
  data() {
    return {
      title: 'Bio',
    };
  },
  props: ['isCollapsed', 'expand'],
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.bio {
  flex: 5;
  background-color: rgba(0,0,0,0.2);

  display: flex;
  justify-content: center;

  padding: 1em;

  transition: flex-grow 0.5s ease;
}

.collapsed {
  flex: 1;

  &:hover {
    flex: 1.2;
  }
}

.title {
  font-size: 2em;
  font-weight: bold;
}
</style>
