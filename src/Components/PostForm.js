import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions';

export class PostForm extends Component
{
  constructor(props)
  {
    super(props);
    this.state=
    {
      title:'',
      body:''
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  };
/////////////////////////////////////////////////onChange
  onChange(e)
  {
    this.setState({[e.target.name]:e.target.value});
  };
  ///////////////////////////////////////////////onSubmit
  onSubmit(e)
  {
    e.preventDefault();
    const post =
    {
      title: this.state.title,
      body: this.state.body
    }
    // call action
    this.props.createPost(post);
    console.log(post);
  };
///////////////////////////////////////////////////renders
  render()
  {
    return(
      <div className="brtao">
        <h2>Add Form</h2>
        <form onSubmit={this.onSubmit}>
            <label>Title: </label> <br />
            <input type="text" name="title"
            onChange={this.onChange} value={this.state.title}/> <br />
            <label>Body: </label> <br />
            <input type="text" name="body"
             onChange={this.onChange} value={this.state.body}/>
          <br />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

PostForm.propTypes =
{
  createPost:PropTypes.func.isRequired
};

export default connect(null, {createPost})(PostForm);
