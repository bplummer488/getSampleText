import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Output from './Components/Output';
import Select from './Components/Controls/Select';
import Text from './Components/Controls/Text';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      paras: 4,
      format: 'html',
      text: ''
    }
  }

  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    axios.get('https://baconipsum.com/api/?type=all-meat&paras='+this.state.paras+'&format='+this.state.format)
    
    .then((response) => {
      this.setState({text: response.data}, function(){
        console.log(this.state);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  showHTML(x){
    this.setState({format: x}, this.getSampleText);
  }

  changeParas(num){
    this.setState({paras: num}, this.getSampleText);
  }

  render() {
    return (
      <div className="topForm">
        <form>
          <div>
          <div className="header">
              <label>getSampleText</label>
            </div>
            <div className="titles">
              <label>HTML/Text:</label>
            </div>
            <Select value={this.state.format} onChange={this.showHTML.bind(this)} />
          </div>
          <div>
            <div className="titles">
              <label className="titles">Paragraphs:</label>
            </div>
            <Text value={this.state.paras} onChange={this.changeParas.bind(this)} />
          </div>
        </form>
        <Output value={this.state.text} />
      </div>
    )
  }
}

export default App;
