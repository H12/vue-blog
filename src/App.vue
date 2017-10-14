<template>
  <div id="app">
    <app-sidebar />
    <app-content />
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

.app-sidebar {
  flex: 1;
}

.app-content {
  flex: 4;
}

</style>
