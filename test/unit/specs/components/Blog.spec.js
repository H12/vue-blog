import Vue from 'vue';
import Blog from '@/components/Blog';

describe('Blog.vue', () => {
  let blog;

  beforeEach(() => {
    blog = new Vue(Blog).$mount();
  });

  afterEach(() => {
    blog = null;
  });

  it('should render correct contents', () => {
    expect(blog.$el.querySelector('.blog .title').textContent).to.equal('Blog');
  });

  describe('methods', () => {
    beforeEach(() => {
      blog.toggleCollapsed = sinon.spy();
    });

    describe('expand', () => {
      it('should call toggleCollapsed when isCollapsed is true', () => {
        blog.isCollapsed = true;
        blog.expand();
        expect(blog.toggleCollapsed).to.be.called;
      });

      it('should not call toggleCollapsed when isCollapsed is false', () => {
        blog.$data.isCollapsed = false;
        blog.expand();
        expect(blog.toggleCollapsed).to.not.be.called;
      });
    });
  });
});
