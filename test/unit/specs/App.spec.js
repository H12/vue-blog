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
    expect(app.$children.length).to.equal(2);
    expect(app.$options.components).to.have.property('Bio');
    expect(app.$options.components).to.have.property('Blog');
  });

  describe('methods', () => {
    describe('toggleCollapsed', () => {
      it('should set isBioCollapsed to false when true', () => {
        app.$data.isBioCollapsed = true;
        app.toggleCollapsed();
        expect(app.$data.isBioCollapsed).to.be.false;
      });

      it('should set isBlogCollapsed to false when true', () => {
        app.$data.isBlogCollapsed = true;
        app.toggleCollapsed();
        expect(app.$data.isBlogCollapsed).to.be.false;
      });
    });
  });
});
