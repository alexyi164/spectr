import React, { useState, useEffect, useRef } from 'react';
import NewsCard from './NewsCard';
import NewsRow from './NewsRow';
import Navigation from './Navigation';


import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const App = () => {

  const [topic, setTopic] = useState('presidential election');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Navigation />
      <Container fluid>
        <div>SEARCH</div>
        {/* <Search>

        </Search> */}
        <Row>

        </Row>
        <NewsRow topic={topic}/>
      </Container>
    </div>
  )
}

export default App;