<template>
  <div id='app'>
    <Bio
      v-bind:is-collapsed='isBioCollapsed'
      v-bind:expand='expandBio'
    />
    <Blog
      v-bind:is-collapsed='isBlogCollapsed'
      v-bind:expand='expandBlog'
    />
  </div>
</template>

<script>
import Bio from './components/Bio/Bio';
import Blog from './components/Blog';

export default {
  name: 'app',
  components: {
    Bio,
    Blog,
  },
  data() {
    return {
      isBlogCollapsed: false,
      isBioCollapsed: true,
    };
  },
  methods: {
    expandBlog() {
      if (this.isBlogCollapsed) {
        this.toggleCollapsed();
      }
    },
    expandBio() {
      if (this.isBioCollapsed) {
        this.toggleCollapsed();
      }
    },
    toggleCollapsed() {
      this.isBlogCollapsed = !this.isBlogCollapsed;
      this.isBioCollapsed = !this.isBioCollapsed;
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
