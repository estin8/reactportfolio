import './portfolio.scss';
import { webPortfolio } from '../../data.js';
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import ModalData from '../modal/ModalData';

function Portfolio() {
  // Data pulled from data.js; optional "mobile" section for when I have any mobile projects in the future

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

  //Top: "Web" option mapped from data.js -- optional 'mobile' not currently active
  //Middle: Images and description mapped based on objects from data.js
  //Bottom: Modal button mapped out
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
            <a href={d.link} rel="noreferrer" target="_blank">
              <img className="rounded" src={d.img} alt="" />
            </a>
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
            tech={d.tech.map((item) => (
              <li>{item}</li>
            ))}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
