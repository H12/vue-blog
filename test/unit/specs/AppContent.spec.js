import Vue from 'vue';
import AppContent from '@/components/AppContent';

describe('AppContent.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AppContent);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.app-content .title').textContent)
      .to.equal('This is the Content');
  });
});
