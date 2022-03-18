import logo from './logo.svg';
import './App.css';
import Posts from './Components/Posts';
import AddPost from './Components/Post/AddPost';

function App() {
  return (
    <div className='PostContainer' >
      
      <AddPost/>
      <Posts/>
    </div>
  );
}

export default App;
