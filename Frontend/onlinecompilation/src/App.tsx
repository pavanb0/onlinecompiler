import React from 'react';
import Codeeditor from './Codeeditor';
import Header from './Header';
import  './Header.css';
import Terminal from './Terminal';

function App() {
    const [language, setLanguage] = React.useState('python');
    const [runButtonState, setRunButtonState] = React.useState(false);
    const [code, setCode] = React.useState("print('hello mom')");
    const [output, setOutput] = React.useState("click run to see output");
    const [runnning, setRunning] = React.useState(false);

    if (runButtonState) {
        const url = "http://localhost:8080/compiler"
        const data = {
            language: language,
            code: code
        }
        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => res.json()).then(data => {
            setOutput(data.output);
            setRunButtonState(false);
        }).catch(err => console.log(err));
        
    
    }

    return (
    <div className="App" style={
        {
            backgroundColor: "#282c34",
            height: "100vh"
        }
    }>
        <Header 
        language={language}
        setLanguage={setLanguage} 
        setRunButtonState={setRunButtonState}
         />
        <div className="bottom">
        <Codeeditor onCodeChange={setCode} />
        <Terminal output={output}/>
        </div>
    </div>
  );
}

export default App;