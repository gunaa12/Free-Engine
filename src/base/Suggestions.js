import './index.css';

function Suggestions() {
  return (
    <div id = "suggest">
      <div className = "iframeContainer">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfehSvtuIqD3tTTmA0arMaZapVWc7No6ElNOgZDBo8uFIpHeQ/viewform?usp=pp_url" className = "iframe" title="Iframe Example"></iframe>
      </div>
    </div>
  );
}

export default Suggestions;