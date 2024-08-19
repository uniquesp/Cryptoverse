import React from 'react';
import { Row, Typography, Divider } from 'antd';
import BgImage from '../Images/coming-soon.png';
const { Title } = Typography;

const Exchanges = () => {
  return (
    <>
     <div>
        <Divider> <Title level={2} className="news-title">Exchanges</Title> </Divider>
      </div>
    <Row gutter={[32, 32]} className="exchanges-card-container" justify="center" align="middle" style={{ textAlign: 'center' }}>
      <img
        src={BgImage}
        alt="Coming Soon"
        className="exchanges-image"
        style={{
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'contain',
        }}
        loading="lazy"
      />
      <Typography.Title level={1} className="exchanges-heading">
        Coming Soon
      </Typography.Title>
    </Row>

    </>
  );
}

export default Exchanges;
