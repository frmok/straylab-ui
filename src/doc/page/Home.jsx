import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
class Home extends Component {
  render() {
    return (
      <div className="main-content__doc">
        <h1>Straylab UI</h1>
        <h2>Introduction</h2>
        <p>Straylab UI is a simplistic React UI Framework, which is built for rapid prototyping.<br />The framework is still under active development. Watch out for breaking changes.</p>
        <h2>Installation</h2>
        <SyntaxHighlighter language="bash" style={github}>{`npm install straylab-ui --save`}</SyntaxHighlighter>
        <p>
          Once installed, you can use the framework by importing components.
        </p>
        <h2>CSS</h2>
        <p>CSS can be found in the <code>dist</code> folder. CDN link will be provided soon once available.</p>
        <h2>Recommend usage</h2>
        <p>It is recommended that instead directly using the framework, you can customize the framework to build your own one.</p>
        <h2>Contribution</h2>
        <p>You are welcomed to provide contribution by making a pull request or an issue.</p>
      </div>
    );
  }
}

export default Home;