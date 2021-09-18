import './index.css';
import CsvReader from './CsvReader'

function Home() {
  return (
    <div id = "home">
      <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
        <button className='btn'>Upload</button>
      </ReactFileReader>
      <p>hello there 222</p>
      <script async src="https://cse.google.com/cse.js?cx=a86591325a0f2c784%22%3E"></script>
      <div class="gcse-searchboc-only"></div>
      <output id="out">
          file contents will appear here
      </output>
    </div>
  );
}

export default Home;