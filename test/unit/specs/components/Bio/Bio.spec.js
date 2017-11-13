import Vue from 'vue';
import Bio from '@/components/Bio/Bio';

describe('Bio.vue', () => {
  let bio;

  beforeEach(() => {
    bio = new Vue(Bio).$mount();
  });

  afterEach(() => {
    bio = null;
  });

  it('should render correct contents', () => {
    expect(bio.$el.querySelector('.bio .title').textContent).to.equal('Bio');
  });

  describe('methods', () => {
    beforeEach(() => {
      bio.toggleCollapsed = sinon.spy();
    });

    describe('expand', () => {
      it('should call toggleCollapsed when isCollapsed is true', () => {
        bio.isCollapsed = true;
        bio.expand();
        expect(bio.toggleCollapsed).to.be.called;
      });

      it('should not call toggleCollapsed when isCollapsed is false', () => {
        bio.$data.isCollapsed = false;
        bio.expand();
        expect(bio.toggleCollapsed).to.not.be.called;
      });
    });
  });
});
