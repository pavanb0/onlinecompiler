import "./Header.css";

interface TerminalProps {
  output: string;
}

function Terminal({ output }: TerminalProps) {
  return (
    <>
      <div className="terminal">
      <h1 style={{color:"white"}}>{output}</h1>
      </div>
    </>
  );
}

export default Terminal;
