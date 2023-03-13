import "../../App.css";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { createClient } from "contentful";
import { SPACE_ID, ACCESS_TOKEN } from "../../credentials";


const PortfolioList = () => {
  const [completedProject, setProjectItems] = useState([]);
  const client = createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          setProjectItems(entries);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries();
  }, []);

  return (
    <div>
      <nav className="menu-bar-div-row">
        <NavLink
          to="/Home"
          className="fa fa-solid fa-bars"
          id="menubars"
        ></NavLink>
        <p>Portfolio</p>
      </nav>
      <br />
      <br />
      <div className="port-item">
        {completedProject?.items?.map((post) => (
          <section className="project-entry" key={post.sys.id}>
            <NavLink to={`/project/${post.sys.id}`}>
              <div className="port-images">
                <div>
                  <img
                    className="portimage"
                    src={post.fields.image1.fields.file.url}
                    alt={completedProject?.fields?.image1.fields?.description}
                  />
                </div>
                <div>
                  <img
                    className="portimage"
                    src={post.fields.image2.fields.file.url}
                    alt={completedProject?.fields?.image2.fields?.description}
                  />
                </div>
                <div>
                  <img
                    className="portimage "
                    src={post.fields.image3.fields.file.url}
                    alt={completedProject?.fields?.image3.fields?.description}
                  />
                </div>
                <div>
                  <img
                    className="portimage"
                    src={post.fields.image4.fields.file.url}
                    alt={completedProject?.fields?.image4.fields?.description}
                  />
                </div>
                </div>

              <div className="port-title">
                <div>
                  <h3>{post.fields.title}</h3>
                </div>
              </div>
              <div className="port-slug">
                <div>
                  <h5>{post.fields.slug}</h5>
                </div>
              </div>
            </NavLink>
          </section>
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
