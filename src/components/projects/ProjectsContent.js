import { ContentItems } from "./ContentItems";

const PortfolioContent = () => {
  return (
    <div className="p-content">
      <div className="p-tile">
        {ContentItems.map((item, index) => {
          return (
            <div key={index}>
              <div className="tile-title">{item.title}</div>
              <div className={item.cName}>
                <div className="background">
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <i className="fas fa-eye"></i>
                    {item.live}
                  </a>
                </div>
                <div className="background">
                  <a href={item.codeUrl} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                    {item.code}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioContent;
