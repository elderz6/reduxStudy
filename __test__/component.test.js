import React from 'react'
import Enzyme,{ shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
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
  it('should work', ()=>
  {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('div').hasClass('beirute')).toBe(true);
  });

  it('fetches the posts', ()=>
  {
      const { enzymeWrapper, props } = setup();
      expect(props.fetchPosts).toBeCalled();
  });
});
