import './App.css';
import "../Link/Link.css";
import "../Title/Title.css";

import Header from '../Header/Header.jsx';

function App(props) {
  return (
    <div class="page">
      <Header />
      <main class="main">
        {props.children}
      </main>
    </div>
  );
}

export default App;
