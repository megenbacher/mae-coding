import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss";
import { featuredPortfolio,
          htmlPortfolio,
          flexboxPortfolio,
          javascriptPortfolio,
          reactPortfolio,
          gitPortfolio,
        } from "../../data"; 


export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
      link: "",

    },
    {
      id: "html and css",
      title: "STAY",
      link: "",

    },
    {
      id: "flexbox",
      title: "VISIT",
      link: "",

    },
    {
      id: "javascript",
      title: "EAT & DRINK",
      link: "",

    },
    
  ];

useEffect(()=>{

  switch(selected){
    case "featured":
      setData(featuredPortfolio);
      break;
      case "html and css":
        setData(htmlPortfolio);
        break;
        case "flexbox":
          setData(flexboxPortfolio);
          break;
          case "javascript":
            setData(javascriptPortfolio);
            break;
            case "react":
              setData(reactPortfolio);
              break;
              case "git and github":
                setData(gitPortfolio);
                break;
                default:
                  setData(featuredPortfolio);
  }

},[selected])

return (
    <div className="portfolio" id="portfolio">
      <h1>Mexico City and Oaxaca City </h1>
      <ul>
        {list.map((item => (
          <PortfolioList title={item.title} 
          active={selected === item.id} 
          setSelected={setSelected}
          id={item.id}
          link={item.link}
          />
        )))}
      </ul>

      <div className="container">
        {data.map((d) => (
        <div className="item">
          <img src={d.img} alt=""/>
          <h3><a href={d.link} target="_blank" rel="noreferrer">{d.title}</a></h3>
           </div>
        ))}
           
           </div>
         </div>
     
        
        
  );
}
