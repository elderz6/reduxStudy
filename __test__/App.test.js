import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
 // import App from '../src/App';
import postReducer from '../src/reducers/postReducer';
import * as action from '../src/actions/postActions';
import { FETCH_POSTS, NEW_POST } from '../src/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Post Reducer', ()=>
{
  it('should return default value', ()=>
  {
    expect(postReducer(undefined, {})).toEqual({
      items: [],
      item:{}
    });
  });

  it('should fetch posts', () =>
  {
    const fetchState = {type:action.FETCH_POSTS};
    expect(postReducer(fetchState, {})).toEqual({});
  });

  it('should handle NEW_POST', () =>
  {
    const newpost = {
      type:action.NEW_POST,
      post:{title:'123', body:'asd'}
    };
    expect(postReducer(newpost, {})).toEqual(
      {
        post:{title:'123', body:'asd'}
      });
  });
});


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


// describe('App renders', ()=>
// {
//   it('works',()=>
//   {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(App)).to.have.length(1);
//   });
// });
