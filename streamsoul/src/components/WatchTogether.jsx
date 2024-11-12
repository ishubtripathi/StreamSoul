// src/components/WatchTogether.jsx
const WatchTogether = () => {
    const generateLink = () => {
      // Simulate a unique link generation
      return `https://streamsoul.com/watch/${Math.random().toString(36).substring(7)}`;
    };
  
    return (
      <div className="watch-together">
        <h2>Watch Together</h2>
        <button onClick={() => alert(`Share this link: ${generateLink()}`)}>
          Generate Link
        </button>
      </div>
    );
  };
  
  export default WatchTogether;
  