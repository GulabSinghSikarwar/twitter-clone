import logo from './logo.svg';
import './App.css';
import Posts from './Components/Posts';
import AddPost from './Components/Post/AddPost';
import Sidebar from './Components/Sidebar/sidebar';
import News from './Components/News/News';
import {Routes ,Route} from 'react-router-dom'
import Signup from './Components/Screens/signup_Screens/Signup';

function App() {
  return (
    <div className='app-container'>

      {/* <Sidebar />
      <div className='PostContainer' >
        <AddPost />
        <Posts />
      </div>
      <News /> */}
  
      <Routes>
        
        <Route path='/signup' element={<Signup/>}/>
        
      </Routes>



    </div>


  );
}

export default App;
