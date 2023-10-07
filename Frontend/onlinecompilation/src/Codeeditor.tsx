import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState } from "react";

function Codeeditor(
  {onCodeChange}: {onCodeChange: (code: string) => void}
) {
  const [code,setcode] = useState("print('hello mom')");



  return (

      <AceEditor
        value={code}
        mode="javascript"
        theme="monokai"
        fontSize="16px"
        highlightActiveLine={true}
        setOptions={{
          enableLiveAutocompletion: true,
          showLineNumbers: true,
          tabSize: 4
        }}
        style={{
          position: "absolute",
          top: 0,
          marginTop: "75px",
          bottom: 0,
          width: "50%",
          height: "88%", 
 
        }}
        onChange={(e) => {setcode(e) ;onCodeChange(e)} } 
      />
    
  );
}

export default Codeeditor;
