import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MovingEye from "./MovingEye";

const CodeHighlighter = () => {
  const codeString = `class Noor Hesham {
    //"With great power comes great responsibility".
    // My vast variety of skills is continuously expanding.
    constructor() {
      this.name = 'Noor Hesham'
      this.dayOfBirth ='17/9/2004'
      this.email = 'noordragon2004@gmail.com'
    }
    workExperience() {
      return [
        {'Elmandoob Platform':'A platform that allows merchants to exchange products with next.js and typescript' },
        { 'Landing Page for a Designer': 'a portfolio for a graphic designer to show its work using vanilla javascript and sass' },
      ]
    }
    education() {
      return [
        { '2021-2025': 'Faculty of Computer Information SciencesMansoura University' },
      ]
    }
    skills() {
      return [
        'HTML/CSS/JS',  'Node.js','Express.js','Tailwind', 'React','Next.js'
        'SCSS', 'npm/yarn','SSR', 'SPA', 'GIT', 'Web Sockets', 'Supabase'
        'MySQL/MongoDB','TypeScript'
      ]
    }
}`;

  return (
    <div className="relative flex items-end justify-between rounded-xl z-10">
      <SyntaxHighlighter
        className="code-highlighter"
        customStyle={{ background: "#14121c" }}
        language="javascript"
        style={a11yDark}
        showLineNumbers
      >
        {codeString}
      </SyntaxHighlighter>
      <MovingEye />
    </div>
  );
};

export default CodeHighlighter;
