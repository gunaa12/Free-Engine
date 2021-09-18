import './index.css';
import CsvReader from './CsvReader'

function Home() {
  return (
    <div id = "home">
      <div className="App">
        <header className="App-header">
          <CsvReader />
        </header>
      </div>
    </div>
  );
}

export default Home;