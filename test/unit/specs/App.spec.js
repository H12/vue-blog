import Vue from 'vue';
import App from '@/App';

describe('App.vue', () => {
  let app;

  beforeEach(() => {
    app = new Vue(App).$mount();
  });

  afterEach(() => {
    app = null;
  });

  it('should render correct contents', () => {
    expect(app.$options.components).to.have.property('Bio');
    expect(app.$options.components).to.have.property('Content');
  });
});
