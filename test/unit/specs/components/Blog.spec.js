import Vue from 'vue';
import Blog from '@/components/Blog';

describe('Blog.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Blog);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.blog .title').textContent).to.equal('Blog');
  });
});
