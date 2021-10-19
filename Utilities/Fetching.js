async function Fetch(url) {
  let res = await fetch(url);
  let res2 = await res.json();
  return res2;
}
export default Fetch;
