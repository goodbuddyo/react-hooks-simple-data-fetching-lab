import React,{useState,useEffect} from 'react'

const API_URL="https://dog.ceo/api/breeds/image/random";

function App() {
  const [image,setImage]=useState(null)

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setImage(data.message))
  },[])
  if(!image) {
    return <p className="cooldog">Loading...</p>
  }

  return (
    <div>
      <p className="cooldog">Here's a cool pup for you:</p>
      <img src={image} alt="A Random Dog" />
    </div>
  );
}


export default App
