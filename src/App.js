import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Herosection } from './Herosection/Herosection';
import { Post } from './Posts/Post';
import { Feeds } from './Feeds/Feeds';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <Post />
      <Feeds />
    </div>
  );
}

export default App;
