import logo from './logo.svg';
import './App.css';
import Posts from './Components/Posts';
import AddPost from './Components/Post/AddPost';
import Sidebar from './Components/Sidebar/sidebar';
import News from './Components/News/News';

function App() {
  return (
    <div className='app-container'>

      <Sidebar />
      <div className='PostContainer' >
        <AddPost />
        <Posts />
      </div>
      <News />


    </div>


  );
}

export default App;
