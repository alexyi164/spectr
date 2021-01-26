import React, { useState, useEffect } from 'react';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ReactReadMoreReadLess from "react-read-more-read-less";



const NewsCard = ( { sources, topic, apiKey } ) => {

  const [news, setNews] = useState(null);

  // let config = {
  //   url: `http://newsapi.org/v2/${topic}?sources=${source}&apiKey=${apiKey}`,
  //   headers: {
  //     'x-api-key': 'eb00dbf83b7341a4b3b5eb12649d9167'
  //   }
  // }
  useEffect(() => {
    if (!news) {
      getNews();
    }
  }, [])

  //FIGURE OUT HOW TO CHANGE BY TOPIC!!!

  const getNews = async () => {
    const response = await axios.get(`http://newsapi.org/v2/everything?sources=${sources}&q=${topic}&apiKey=${apiKey}`)

    setNews(response.data.articles[0]);
  }

  // axios.get(`http://newsapi.org/v2/${topic}?sources=${source}&apiKey=${apiKey}`)
  //   .then((response) => {
  //     console.log(response)
  //     data = response.data.articles[0];
  //   })
  //   .catch(err => {console.log(err)})
  if (!news) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">{console.log(news)}</span>
      </Spinner>
    )
  }
  return (
    <Card style={{ width: '1fr' }}>
      <Card.Img variant="top" src={news.urlToImage} />
      <Card.Body>
        <Card.Title>{news.source.name}</Card.Title>
        <Card.Text>
          <ReactReadMoreReadLess
            charLimit={100}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
          >
            {news.description}
          </ReactReadMoreReadLess>
        </Card.Text>
        <a href={news.url}>View Article</a>
      </Card.Body>
    </Card>
  )


}

export default NewsCard;
