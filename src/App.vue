<template>
  <div id='app'>
    <Bio
      v-bind:is-collapsed='isSidebarCollapsed'
      v-bind:expand='expandSidebar'
    />
    <Content
      v-bind:is-collapsed='isContentCollapsed'
      v-bind:expand='expandContent'
    />
  </div>
</template>

<script>
import Bio from './components/Bio/Bio';
import Content from './components/Content';

export default {
  name: 'app',
  components: {
    Bio,
    Content,
  },
  data() {
    return {
      isContentCollapsed: false,
      isSidebarCollapsed: true,
    };
  },
  methods: {
    expandContent() {
      if (this.isContentCollapsed) {
        this.toggleCollapsed();
      }
    },
    expandSidebar() {
      if (this.isSidebarCollapsed) {
        this.toggleCollapsed();
      }
    },
    toggleCollapsed() {
      this.isContentCollapsed = !this.isContentCollapsed;
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    },
  },
};
</script>

<style>

html {
  background-color: #FFF0C6;
  color: #474747;
}

#app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
}

</style>
