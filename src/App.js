import React, { Component } from 'react';
import './App.css';
import './styleForm.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      nome:'',
      empresa:'',
      tel:'',
      obrs:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value,})
  }
  handleSubmit(event){
    alert('Seus dados: ' + this.state.email+'\n'+ this.state.nome +'\n' + this.state.empresa+ '\n' + this.state.tel + '\n' + this.state.obs);
  }
  render(){
  return (
    <div>
      <div id="mc_embed_signup">
        <form action="https://anadi.us14.list-manage.com/subscribe/post?u=336b3fc17ebf2dec937f03e07&amp;id=4be92f799c" onSubmit={this.handleSubmit} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email  <span className="asterisk">*</span></label>
              <input
                type="email" 
                value={this.state.value}
                name="EMAIL" 
                className="required email" 
                id="mce-EMAIL" 
                />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">Nome  <span className="asterisk">*</span></label>
              <input 
                type="text" 
                value={this.state.value} 
                name="FNAME" 
                className="required" 
                id="mce-FNAME" 
                />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Empresa  <span className="asterisk">*</span></label>
              <input 
              type="text" 
              value={this.state.value} 
              name="LNAME" 
              className="required" 
              id="mce-LNAME" 
              />
            </div>
            <div className="mc-field-group size1of2">
              <label htmlFor="mce-MMERGE6">Telefone com DDD </label>
              <input 
                type="text" 
                name="MMERGE6" 
                className="" 
                value={this.state.value}
                id="mce-MMERGE6" 
                />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-TEXT01">Observações. </label>
              <input 
                type="text" 
                value={this.state.value} 
                name="TEXT01" 
                className="" 
                id="mce-TEXT01"
                />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response"></div>
              <div className="response" id="mce-success-response" ></div>
            </div>
            <div aria-hidden="true">
              <input 
              type="text" 
              name="b_336b3fc17ebf2dec937f03e07_4be92f799c" 
              value=""
              />
            </div>
            <div className="clear">
              <input 
                type="submit" 
                value="Subscribe" 
                name="subscribe" 
                id="mc-embedded-subscribe" 
                className="button"
                />
            </div>
          </div>
        </form>
      </div>
    </div>
  )}
}
export default App;
