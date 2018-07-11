import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('App renders', ()=>
// {
//   it('works',()=>
//   {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(App)).to.have.length(1);
//   });
// });
