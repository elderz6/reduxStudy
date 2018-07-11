import {FETCH_POSTS, NEW_POST} from './types';

export const fetchPosts = () => dispatch =>
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json()) //transform into json
    .then(posts =>
      dispatch({
        type:FETCH_POSTS,
        payload:posts
    }));
};

export const createPost = (postData) => dispatch =>
{
  fetch('https://jsonplaceholder.typicode.com/posts',
  {
    method:'POST',
    headers:{'content-type':'application/json'},
    body: JSON.stringify(postData)
  })
  .then(res => res.json())//transform response to json
  .then(post => dispatch(
    {
      type:NEW_POST,
      payload:post
    }));
};
