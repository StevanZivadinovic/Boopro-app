import React from 'react';
import Row from '../components/Row/Row.js';

// @ts-ignore
// import Row from '../../components/Row/Row.js';
// @ts-ignore
import requests from './../helperFunctions/requests.js';


const HomePage = () => {
  return (
    <>
      <Row IDRow='1' title={'UpComing'} requestURL={requests.requestUpcoming}></Row>
      <Row IDRow='2' title={'Popular'} requestURL={requests.requestPopular}></Row>
      <Row IDRow='3' title={'Trending'} requestURL={requests.requestTrending}></Row>
      <Row IDRow='4' title={'Horor'} requestURL={requests.requestHoror}></Row>
      <Row IDRow='5' title={'TopRated'} requestURL={requests.requestTopRated}></Row>
  </>
  )
}

export default HomePage