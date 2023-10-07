import React from 'react';

interface HeaderProps {
  language: string;
  setLanguage: (language: string) => void;
  setRunButtonState: (runButtonState: boolean) => void;
}

function Header({ language, setLanguage, setRunButtonState }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <h4 style={{ paddingLeft: '20px' }}>Online {language} Compiler</h4>
      </div>
      <div className="languages">
        <button onClick={() => setLanguage('python')}>Python</button>
        <button onClick={() => setLanguage('javascript')}>Javascript</button>
        <button onClick={()=>{
            setRunButtonState(true);
        }} >Run</button> {/* Display button state */}
      </div>
    </header>
  );
}

export default Header;
