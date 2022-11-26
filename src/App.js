import './App.css';
import {TextBanner, Work, Footer} from './sections'
import {works} from './constants/works'

function App() {
  return (
    <div className="App px-6 md:px-[120px] font-sans bg-beige text-black-100">
      <TextBanner />
      <div className="pb-7 md:pb-[90px]">
        {works.map(work => <Work {...work} />)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
