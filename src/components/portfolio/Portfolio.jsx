import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import { webPortfolio, mobilePortfolio } from '../../data.js';

function Portfolio() {
  const [selected, setSelected] = useState('web');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'web',
      title: 'Web',
    },
    {
      id: 'mobile',
      title: 'Mobile',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'web':
        setData(webPortfolio);
        break;
      case 'mobile':
        setData(mobilePortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {/* {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))} */}
        <h1>In progress</h1>
      </div>
    </div>
  );
}

export default Portfolio;
