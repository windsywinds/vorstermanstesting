import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { createClient } from "contentful";
import { SPACE_ID, ACCESS_TOKEN } from "./credentials";



const clientMock = () => {
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

  return completedProject;
};
export default clientMock