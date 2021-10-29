import './portfolioList.scss';

export default function PortfolioList({
  title,
  active,
  setSelected,
  id,
  index,
}) {
  return (
    <li
      className={active ? 'portfolioList active' : 'portfolioList'}
      onClick={() => setSelected(id)}
      key={index}
    >
      <h2>{title}</h2>
    </li>
  );
}
