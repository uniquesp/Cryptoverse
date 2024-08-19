import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Spin, Alert, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../Services/cryptoApi';
import { Cryptocurrenecies, News } from '../Components/imports';

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching, error } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Spin size="large" />;
  if (error) return <Alert message="Error" description={error.message} type="error" />;

  return (
    <>
      <Divider><Title level={2} className='heading'>Global Crypto Status</Title></Divider>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Statistic title='Total Cryptocurrencies' value={globalStats.total} />
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} />
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Statistic title='Total Market' value={millify(globalStats.totalMarkets)} />
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
        </Col>
      </Row>

      <div className='home-heading-container'>
        <Divider><Title level={2} className='home-title'>Top 10 Cryptocurrencies in the World</Title></Divider>
      </div>
      <Divider orientation="right">
        <Title level={3} className='show-more'>
          <Link to='/cryptocurrenecies'>Show More</Link>
        </Title>
      </Divider>          
      <Cryptocurrenecies simplified />

      <div className='home-heading-container'>
        <Divider><Title level={2} className='home-title'>Latest Crypto News</Title></Divider>        
      </div>
      <Divider orientation="right">
        <Title level={3} className='show-more'>
          <Link to='/news'>Show More</Link>
        </Title>
      </Divider>
      <News simplified />
    </>
  );
}

export default HomePage;
