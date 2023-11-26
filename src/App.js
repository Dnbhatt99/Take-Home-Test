import './style.scss';
import { useState, useEffect } from 'react';
import Blogs from './components/Blogs';
import fetchblogs from './WordpressAPI/api';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchblogs().then((res) => {
      setPosts(res);
    });
  }, []);

  return (
    <div >
      <div className='row'>
        {posts.map((p) => <Blogs post={p} key={p.id}/>)}
      </div>
    </div>
  );
}

export default App;
