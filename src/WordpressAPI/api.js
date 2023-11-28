const url =
  "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

const fetchblogs = async () => {
  try{
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
  catch (err) {
    console.log('There was an error', err);
  }
};

export default fetchblogs;
