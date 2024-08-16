import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../Services/cryptoApi';
import {Cryptocurrenecies,News} from '../Components/imports'

const {Title} = Typography


const HomePage = () => {

  const { data, isFetching, error } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Status</Title>
      <Row>
        <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total} > </Statistic></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} > </Statistic></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} > </Statistic></Col>
        <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)} > </Statistic></Col>
        <Col span={12}><Statistic title='Total Market' value={millify(globalStats.totalMarkets)}> </Statistic></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to ='/cryptocurrencies'>Show More</Link></Title>        
      </div>
      <Cryptocurrenecies simplified/>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to ='/cryptocurrencies'>Show More</Link></Title>        
      </div>
      <News simplified/>
    </>
  )
}

export default HomePage
