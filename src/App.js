import './App.css';
import {TextBanner, Work, Footer} from './sections'
import {works} from './constants/works'

function App() {
  return (
    <div className="App px-6 lg:px-[120px] font-sans bg-beige text-black-100">
      <TextBanner />
      <div className="pb-7 lg:pb-[90px]">
        {works.map((work, index) => <Work key={index} {...work} />)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
