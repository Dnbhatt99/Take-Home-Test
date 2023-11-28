import "./style.scss";
import { useState, useEffect } from "react";
import Blogs from "./components/Blogs";
import fetchblogs from "./WordpressAPI/api";
import Loader from "./components/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchblogs().then((res) => {
      setIsLoading(false);
      setPosts(res);
    });
  }, []);

  return (
    <div>
      <div className="row">
        {isLoading ? (
          <div
            style={{
              width: "100px",
              margin: "auto",
            }}
          >
            <Loader />
          </div>
        ) : (
          posts.map((p) => <Blogs post={p} key={p.id} />)
        )}
      </div>
    </div>
  );
}

export default App;
