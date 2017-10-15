import Vue from 'vue';
import AppSidebar from '@/components/AppSidebar';

describe('AppSidebar.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AppSidebar);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.app-sidebar .title').textContent)
      .to.equal('Sidebar');
  });
});
