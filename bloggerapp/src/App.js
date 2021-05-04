import logo from './logo.svg';
import './App.css';
//import Bookdetails from '../src/Components/Bookdetails';
import { Blog,posts,courses,books } from './Components/blogkey'


function App() {
  return (
    <div>
      <Blog posts={posts} courses={courses} books={books}/> 
    </div>
  );
}
export default App;

/*function App() {
  return (

        <div className="st2">
          <h1> Book Details</h1>
          <Bookdetails/>
        </div>
  );
}

export default App;*/
