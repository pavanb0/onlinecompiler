import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import React from "react";

function Editor({ setEditorText }) {
  return (
    <CodeEditor
      style={{
        fontSize: 20,
        inputLineHeight: 26,
        highlighterLineHeight: 26,
      }}
      language="python"
      syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
      showLineNumbers
      initialValue='print("Hello mom")'
      onChange={(code) => setEditorText(code)}
    />
  );
}

export default Editor;
