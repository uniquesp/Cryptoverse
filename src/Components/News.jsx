import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card, Spin, Alert, Divider } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../Services/cryptoNewsApi';
import { useGetCryptosQuery } from '../Services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const [page, setPage] = useState(1);
  const count = simplified ? 6 : 12;

  const { data: cryptoNews, isLoading, error } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count,
    page,
  });
  console.log('News Data:', cryptoNews);

  const {data} = useGetCryptosQuery(100);
  if (isLoading) return <Spin size="large" />;
  if (error) return <Alert message="Error" description={error.message} type="error" />;

  return (
    <>
      <div>
        {!simplified && (
          <Divider><Title level={2} className='news-title'>Cryptocurrency News</Title></Divider>
        )}
      </div>
      
      <Row gutter={[10, 10]}>
          {/* {!simplified && (
              <Col span={20}>
                <Select
                  showSearch
                  className='select-news'
                  placeholder='Select a Crypto'
                  optionFilterProp='children'
                 onChange={(value) => {
                  console.log('Selected Category:', value);
                  setNewsCategory(value);
                  setPage(1); 
                }}
                  filterOption = {(input,option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  <Option value='Cryptocurrency'>Cryptocurrency</Option>
                  {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
                </Select>
              </Col>
          )}; */}
        {cryptoNews?.data?.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card
              hoverable
              cover={<img alt={news.title} src={news.thumbnail} style={{ height: 100, objectFit: 'cover' }} />}
              className='news-card'
              style={{ height: '100%' }}
            >
              <a href={news.url} target='_blank' rel='noreferrer'>
                <Title level={4}>{news.title}</Title>
                <p>
                  {news.excerpt.length > 100
                    ? `${news.excerpt.substring(0, 100)}...`
                    : news.excerpt}
                </p>
                <div className='provider-container'>
                  <Avatar src={news.thumbnail} alt="news" />
                  <Text className='provider-name'>{news.publisher?.name}</Text>
                  <Text>{moment(news.date).startOf('ss').fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>

      {!simplified && (
        <div style={{ marginTop: '20px' }}>
          <Select
            defaultValue={page}
            style={{ width: 120 }}
            onChange={(value) => setPage(value)}
          >
            {[...Array(Math.ceil(cryptoNews?.totalHits / count))].map((_, index) => (
              <Option key={index + 1} value={index + 1}>
                Page {index + 1}
              </Option>
            ))}
          </Select>
        </div>
      )}
    </>
  );
};

export default News;
