import logo from "./logo.svg";
import "./App.css";

// // 运行时错误
// setTimeout(function () {
//   console.log(index);
// }, 2000);

// 模拟一个长任务
const start = Date.now();
while (Date.now() - start < 1000) {}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
