import React from 'react';
import NewsCard from './NewsCard';
import API_Key from './newsAPI.js';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const NewsRow = ({ topic }) => {
  return (
    <Row>
      <Col xs={6} lg={{span: 2, offset: 1}}>
        <NewsCard topic={topic} sources={'msnbc,the-huffington-post,vice-news,buzzfeed,new-york-magazine'} apiKey={API_Key}/>
      </Col>
      <Col xs={6} lg="2">
        <NewsCard topic={topic} sources={'cnn,independent,politico,the-verge,the-washington-posts,time,abc-news,al-jazeera-english,bloomberg,cbs-news,mtv-news'} apiKey={API_Key}/>
      </Col>
      <Col xs={6} lg="2">
        <NewsCard topic={topic} sources={'reuters,the-hill,the-wall-street-journal,usa-today,wired,associated-press,axios,business-insider,fortune,the-globe-and-mail'} apiKey={API_Key}/>
      </Col>
      <Col xs={6} lg="2">
        <NewsCard topic={topic} sources={'fox-news,the-american-conservative,the-washington-times'} apiKey={API_Key}/>
      </Col>
      <Col xs={6} lg="2">
        <NewsCard topic={topic} sources={'breitbart-news,national-review'} apiKey={API_Key}/>
      </Col>
    </Row>
  )
}

export default NewsRow;
