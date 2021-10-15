import './portfolioList.scss';

export default function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? 'portfolioList active' : 'portfolioList'}
      onClick={() => setSelected(id)}
    >
      <h2>{title}</h2>
    </li>
  );
}
