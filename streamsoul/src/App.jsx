// src/App.jsx
import './styles/style.css';
import MovieUploader from './components/MovieUploader';
import WatchTogether from './components/WatchTogether';

function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <h1 className="title">StreamSoul</h1>
        <p className="subtitle">Stream Movies Together with Ease</p>
        <button className="cta-button">Get Started</button>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h2>Easy Movie Upload</h2>
          <p>Upload your favorite movies effortlessly by dragging and dropping.</p>
          <MovieUploader />
        </div>
        <div className="feature">
          <h2>Watch Together</h2>
          <p>Generate a link to watch movies with friends instantly.</p>
          <WatchTogether />
        </div>
        <div className="feature">
          <h2>Video Call & Chat</h2>
          <p>Enjoy seamless video calls and chat while streaming together.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 StreamSoul. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
