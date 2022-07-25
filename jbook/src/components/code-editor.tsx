import MonacoEditor, { OnChange, OnMount } from '@monaco-editor/react';

interface CodeEditorProps {
  initialValue: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const onEditorDidChange: OnChange = (value, evd) => {
    if (value) {
      onChange(value);
    }
  };
  const onEditorDidMount: OnMount = (editor, monaco) => {
    editor.getModel()?.updateOptions({ tabSize: 2 });
  };
  return (
    <MonacoEditor
      onMount={onEditorDidMount}
      onChange={onEditorDidChange}
      height="100%"
      value={initialValue}
      language="javascript"
      theme="vs-dark"
      options={{
        wordWrap: 'on',
        minimap: { enabled: false },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  );
};

export default CodeEditor;
