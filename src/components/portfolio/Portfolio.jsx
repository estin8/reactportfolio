import './portfolio.scss';
import { webPortfolio } from '../../data.js';

import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import ModalData from '../modal/ModalData';

function Portfolio() {
  const [selected, setSelected] = useState('web');
  const [data, setData] = useState([]);

  const list = [
    {
      id: 'web',
      title: 'Web',
    },
    // {
    //   id: 'mobile',
    //   title: 'Mobile',
    // },
  ];

  useEffect(() => {
    switch (selected) {
      case 'web':
        setData(webPortfolio);
        break;
      // case 'mobile':
      //   setData(mobilePortfolio);
      //   break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio" key={3}>
      <h1>Portfolio</h1>

      <ul>
        {list.map((item, id) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, index) => (
          <div className="item" key={index}>
            <img src={d.img} alt="" />
            )} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      <div className="btnContainer">
        {data.map((d, index) => (
          <ModalData
            title={d.title}
            description={d.description}
            img={d.img}
            link={d.link}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
