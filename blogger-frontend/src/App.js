import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BlogList from './components/BlogList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/all-posts" element={<BlogList filter="all-posts" />} />
          <Route path="/my-posts" element={<BlogList filter="my-posts" />} />
          <Route exact path="/" element={<h1> Welcome to Blogger</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
