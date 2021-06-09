import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Main from '../../components/Mains/Main'
import Carousel from '../../components/Carousel'

const Home = () => {

  const [AsideProdutos, setAsideProdutos] = useState({
    produtos: []
  });

  useEffect(() => {
    const getAside = async () => {
      try {
        const response = await axios.get('/produtos/random');
        setAsideProdutos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAside();
  }, []);


  return (
    <>
      <Carousel produtos={AsideProdutos.produtos}/>
      <Main />
    </>
  );
};

export default Home;
