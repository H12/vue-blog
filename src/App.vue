<template>
  <div id='app'>
    <app-sidebar
      v-bind:is-collapsed='isSidebarCollapsed'
      v-bind:expand='expandSidebar'
    />
    <app-content
      v-bind:is-collapsed='isContentCollapsed'
      v-bind:expand='expandContent'
    />
  </div>
</template>

<script>
import AppContent from './components/AppContent';
import AppSidebar from './components/AppSidebar';

export default {
  name: 'app',
  components: {
    AppContent,
    AppSidebar,
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
