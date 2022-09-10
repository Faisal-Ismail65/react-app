// import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <TextForm heading="Enter Your Text To Analyze" />
    </>
  );
}


export default App;
