import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Exchanges, HomePage, Cryptocurrenecies, CryptoDetails, News } from './Components/imports' 

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar/>
      </div>

      <div className='main'>
        <Layout>
          <div className='main'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/exchanges' element={<Exchanges />} />
              <Route path='/cryptocurrenecies' element={<Cryptocurrenecies />} />
              <Route path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>


      <div className='footer'>
        <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}} >
          Cryptoverse <br />
          All rights reserverd
        </Typography.Title>
        <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
        </Space>
      </div>
    </div>
  </div>
    
  );
}

export default App;
