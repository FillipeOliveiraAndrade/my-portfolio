import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';

function Works() {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      return setProjects(projectsData);
    }
      
    const newProjects = projectsData.filter((project) => project.category.toLowerCase() === item.name);
    return setProjects(newProjects);
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  }; 

  return (
    <div>
      <div className="work__filters">
        {
          projectsNav.map((item, index) => (
              <span
                onClick={ (e) => handleClick(e, index) }
                className={`${active === index ? "active-work" : ""} work__item`} 
                key={ index }
              >
                { item.name 
              }</span>
            )
          )
        }
      </div>

      <div className="work__container container grid">
        {
          projects.map((item) => <WorkItems item={ item } key={ item.id } />)
        }
      </div>
    </div>
  );
}

export default Works;