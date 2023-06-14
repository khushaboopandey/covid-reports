import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import ListWithExpandableButton from "./TableRow";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";

const CovidReports = () => {
  const stylesearch = {
    margin: "2rem 0",
  };
  const [continents, setContinents] = useState([]);
  const [originalObject, setOriginalObject] = useState([]);

  const handleChange = (e) => {
    if (e.target.value.trim() === "") {
      setContinents(originalObject);
    } else {
      const result = originalObject.filter((continent) =>
        continent.country
          .trim()
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase())
      );
      setContinents(result);
    }
  };

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/statistics",
      headers: {
        "X-RapidAPI-Key": "9c9a9facbdmsh8bd236166ef1c6cp1ad986jsn603e2b30f146",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setContinents(response.data.response);
      setOriginalObject(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>COVID Reports of {continents.length} Countries</h1>
      <p>
        Click on the + icon to know more about the COVID cases among the
        countries.
      </p>
      <div style={stylesearch}>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText placeholder="Search" onChange={handleChange} />
        </span>
      </div>
      <div>
        {continents.map((data, i) => {
          return <ListWithExpandableButton data={data} i={i} />;
        })}
      </div>
    </div>
  );
};

export default CovidReports;
