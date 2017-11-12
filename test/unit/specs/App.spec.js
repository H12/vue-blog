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
    describe('expandBio', () => {
      it('should expand the blog when isBioCollapsed is true', () => {
        app.$data.isBioCollapsed = true;
        app.expandBio();
        expect(app.$data.isBioCollapsed).to.be.false;
      });

      it('should do nothing when isBioCollapsed is false', () => {
        app.$data.isBioCollapsed = false;
        app.expandBio();
        expect(app.$data.isBioCollapsed).to.be.false;
      });
    });

    describe('expandBlog', () => {
      it('should expand the blog when isBlogCollapsed is true', () => {
        app.$data.isBlogCollapsed = true;
        app.expandBlog();
        expect(app.$data.isBlogCollapsed).to.be.false;
      });

      it('should do nothing when isBlogCollapsed is false', () => {
        app.$data.isBlogCollapsed = false;
        app.expandBlog();
        expect(app.$data.isBlogCollapsed).to.be.false;
      });
    });
  });
});
