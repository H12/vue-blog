import Vue from 'vue';
import Bio from '@/components/Bio';

describe('Bio.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Bio);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.bio .title').textContent)
      .to.equal('Bio');
  });
});
