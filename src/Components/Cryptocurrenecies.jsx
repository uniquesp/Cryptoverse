import React , {useState,useEffect} from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import { Card,Row,Col,Input,Typography,Divider} from 'antd'
const { Title } = Typography;
import { useGetCryptosQuery } from '../Services/cryptoApi'

const Cryptocurrenecies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data: cryptoList , isFecthing} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins)
  const [searchTerm,setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData);
  },[cryptoList,searchTerm]);

  if(isFecthing) return 'Loading...';

  return (
    <>
      {!simplified && (
          <>
            <div>
             <Divider> <Title level={2} className="news-title">Cryptocurrencies</Title> </Divider>
            </div>
            <div className='search-crypto'>
              <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)}></Input>
            </div>
         </>
      )}
     
     <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >

            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    
    </>
  );
};

export default Cryptocurrenecies
