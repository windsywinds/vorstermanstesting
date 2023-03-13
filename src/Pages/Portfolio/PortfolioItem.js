import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { NavLink, useParams } from "react-router-dom";
import { SPACE_ID, ACCESS_TOKEN } from "../../credentials";

const ProjectItem = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".scroll-effect");
  hiddenElements.forEach((el) => observer.observe(el));

  const [completedProject, setSingleProjectItem] = useState([]);
  let { id } = useParams();
  const client = createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN });

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          setSingleProjectItem(entries);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getEntryById();
  }, [id]);

  return (
    <div>
      <div className="posts">
        <nav className="menu-bar-div-col">
          <div className="menu-bar-div-row">
            <NavLink
              to="/Home"
              className="fa fa-solid fa-bars"
              id="menubars"
            ></NavLink>
            <NavLink
              to="/PortfolioList"
              className="fa fa-arrow-left"
              aria-hidden="true"
            ></NavLink>
          </div>
        </nav>

        <section className="project-card">
          <h1 className="scroll-effect">{completedProject?.fields?.title}</h1>
          <div className="port-images">
            <img
              className="project-card-image scroll-effect"
              src={completedProject?.fields?.image1.fields?.file?.url}
              alt={completedProject?.fields?.image1.fields?.description}
            />
          </div>

          <div className="project-card-desc scroll-effect">
            <p>{completedProject?.fields?.description}</p>
          </div>

          <div className="project-card-images scroll-effect">
            <img
              className="project-card-image scroll-effect"
              src={completedProject?.fields?.image2.fields?.file?.url}
              alt={completedProject?.fields?.image2.fields?.description}
            />
            <img
              className="project-card-image scroll-effect"
              src={completedProject?.fields?.image3.fields?.file?.url}
              alt={completedProject?.fields?.image3.fields?.description}
            />
            <img
              className="project-card-image scroll-effect"
              src={completedProject?.fields?.image4.fields?.file?.url}
              alt={completedProject?.fields?.image4.fields?.description}
            />
          </div>

          <br />
          <br />
        </section>
      </div>
    </div>
  );

  //////
};
export default ProjectItem;
