import Top from './components/Top';
import "./App.css";
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return(
    <>
      <div className='h-auto min-h-full pb-28'>
        <Top></Top>
        <Content></Content>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App;
