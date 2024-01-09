import './App.css';
import '../src/StyleCompo/style.scss';
import HeadingCompo from './HeadingCompo/HeadingCompo';
import FooterComp from './FooterCompo/FooterComp';

function App() {
  return (
    <div className="App">
      <HeadingCompo />
      <FooterComp />
    </div>
  );
}

export default App;
