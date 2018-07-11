import React from 'react'
import Enzyme,{ shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import {PostForm} from '../src/Components/PostForm';




Enzyme.configure({ adapter: new Adapter() });
function setup() {
//THE PROPS HAVE TO BE MOCKED
  const props = {
    createPost:jest.fn()
  }
  const enzymeWrapper = shallow(<PostForm {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

describe('PostForm Component', ()=>
{
  it('Renders',()=>
  {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('div').hasClass('brtao')).toBe(true);
  });

});
