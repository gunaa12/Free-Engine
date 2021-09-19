import './index.css';
import ReadInput from './ReadInput';

function Home() {
  return (
    <div id = "home">
      <div id = "searchBar">
        <div className="gcse-search"/>
      </div>
      <ReadInput />
    </div>
  );
}

export default Home;