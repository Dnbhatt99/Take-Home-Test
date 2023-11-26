const url =
  "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

const fetchblogs = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default fetchblogs;
