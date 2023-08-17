import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api/geodbcities";

import classes from "./search.module.css";

const Search = (props) => {
  const [data, setData] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.city} ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));

    // try {
    //     const response = await axios.request(options);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
  };

  const handleOnChange = (searchData) => {
    setData(searchData);
    props.onSearchChange(searchData);
  };

  return (
    <div className={classes.input}>
      <AsyncPaginate
        placeholder="Search for City"
        debounceTimeout={600}
        value={data}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
