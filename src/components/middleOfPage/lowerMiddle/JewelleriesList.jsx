import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import { Container } from 'react-bootstrap';
const footwareApi = import.meta.env.VITE_JEWELLERIES_API;

const JewelleriesList = () => {

  const [posts, setPosts] = useState([]); // Store fetched data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get(footwareApi) // API request
      .then((response) => {
        setPosts(response.data); // Store data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading on error
      });
  }, []); // Runs once when component mounts

  return (
    <Container fluid>
      <div className='d-flex flex-wrap gap-3 justify-content-center'>
        {loading ? <p>Loading...</p> : posts.slice(0,).map((post) => (
          <ProductCard postData={post}></ProductCard>
        ))}
      </div>
    </Container>
  )
}

export default JewelleriesList
