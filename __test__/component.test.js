import React from 'react'
import Enzyme,{ shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
//for connected components use only the necessary class
// add an extra export before the class
import {Posts} from '../src/Components/Posts';

//SETUP
Enzyme.configure({ adapter: new Adapter() });
function setup() {
//THE PROPS HAVE TO BE MOCKED
  const props = {
    fetchPosts:jest.fn(),
    map:jest.fn(),
    posts:[]
  }
  const enzymeWrapper = shallow(<Posts {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

describe('Posts component', ()=>
{
  const { enzymeWrapper, props } = setup();

  it('should work', ()=>
  {
    expect(enzymeWrapper.find('div').hasClass('beirute')).toBe(true);
  });

  it('fetches the posts', ()=>
  {
      expect(props.fetchPosts).toBeCalled();
  });
});
