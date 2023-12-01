import { useState, useEffect } from "react";
import ListDisplay from "../components/ListDisplay";
const Locations = () => {
  const [chars, setChars] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const [locationName, setLocationName] = useState();
  const [options, setOptions] = useState([]);
  const [dimension, setDimension] = useState();
  const [type, setType] = useState();
  const [locationsFetched, setLocationsFetched] = useState(false);
  useEffect(() => {
    //we update the selection option everytime the "selectedOption" state changes
    updateSelectedOption();
  }, [selectedOption]);
  //fetch all locations
  const getLocations = async () => {
    let results = [];
    let url = `https://rickandmortyapi.com/api/location`;
    try {
      if (!locationsFetched) {
        let res = await fetch(url);
        let data = await res.json();
        let numberOfPages = data.info.pages;
        //loop through each page and grab the data
        for (let i = 1; i <= numberOfPages; i++) {
          res = await fetch(`${url}?page=${i}`);
          data = await res.json();
          results.push(...data.results);
        }
        //now that we've fetched all the locations from the API, lets set them & create the dropdown
        setLocationsFetched(true);
        createLocationList(results);
      }
    } catch (e) {
      console.error(e);
    }
  };
  async function updateSelectedOption() {
    //if a valid location option was selected (anything other than "choose..."), update the selectedOption
    if (selectedOption && selectedOption > 0) {
      let url = `https://rickandmortyapi.com/api/location/${selectedOption}`;
      let response = await fetch(url);
      let data = await response.json();
      //now that we have the exact location needed, lets update the variables needed (name, dimension & type)
      setLocationName(data.name);
      setDimension(data.dimension);
      setType(data.type);
      //if the location does have residents, lets grab each resident Id from the residents url string
      if (data?.residents?.length) {
        let residentIds = [];
        const residents = data.residents;
        residents.map((resident) => {
          const res = resident.split("/");
          const resId = res[res.length - 1];
          //add each resident Id to an array, and then fetch all the residents at once.
          residentIds.push(resId);
        });
        //fetch all the residents at once.
        url = `https://rickandmortyapi.com/api/character/${residentIds}`;
        response = await fetch(url);
        data = await response.json();
        //if residents were returned from the API call, update the setChars variable
        data.length ? setChars(data) : setChars(null);
      }
    }
  }
  function createLocationList(data) {
    let list = [];
    list.push({ value: 0, label: "Choose..." });
    let i = 1;
    //build each dropdown option for the user to select
    data?.map((location) => {
      let obj = { value: i, label: `Location - ${location.id}` };
      list.push(obj);
      i++;
    });
    //create the dropdown
    setOptions(list);
  }
  //trigger this function when the page loads to fetch all locations
  getLocations();

  return (
    <div className="location-style">
      <div>
        <h1>Location: {locationName}</h1>
        <h3>Dimension: {dimension}</h3>
        <h4>Type: {type}</h4>
      </div>
      <div>
        <h3>Pick Location</h3>
        <select onChange={(e) => setSelectedOption(e.target.value)}>
          {options?.map(({ value, label }, index) => (
            <option key={index} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <ListDisplay characters1={chars} />
      </div>
    </div>
  );
};
export default Locations;
