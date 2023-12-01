import { useState, useEffect } from "react";
import Form from "../components/Form";
import ListDisplay from "../components/ListDisplay";
function Episodes() {
  const [chars, setChars] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const [options, setOptions] = useState();
  const [episodeName, setEpisodeName] = useState();
  const [airDate, setAirDate] = useState();
  const [episodesFetched, setEpisodesFetched] = useState(false);
  let i = 1;
  useEffect(() => {
    //we update the selection option everytime the "selectedOption" state changes
    updateSelectedOption();
  }, [selectedOption]);
  //fetch all episodes
  const getEpisodes = async () => {
    let results = [];
    let url = `https://rickandmortyapi.com/api/episode`;
    try {
      if (!episodesFetched) {
        let res = await fetch(url);
        let data = await res.json();
        let numberOfEpisodes = data.info.pages;
        //loop through each page and grab the data
        for (let i = 1; i <= numberOfEpisodes; i++) {
          res = await fetch(`${url}?page=${i}`);
          data = await res.json();
          results.push(...data.results);
        }
        //now that we've fetched all the episodes from the API, lets set them & create the dropdown
        setEpisodesFetched(true);
        createEpisodeList(results);
      }
    } catch (e) {
      console.error(e);
    }
  };
  async function updateSelectedOption() {
    //if a valid location option was selected (anything other than "choose..."), update the selectedOption
    if (selectedOption && selectedOption > 0) {
      let url = `https://rickandmortyapi.com/api/episode/${selectedOption}`;
      let response = await fetch(url);
      let data = await response.json();
      //now that we have the exact episode needed, lets update the variables needed (name & air date)
      setEpisodeName(data.name);
      setAirDate(data.air_date);
      //if the episode does have characters, lets grab each character Id from the characters url string
      if (data?.characters?.length) {
        let characterIds = [];
        const characters = data.characters;
        characters.map((character) => {
          const char = character.split("/");
          const charId = char[char.length - 1];
          //add each character Id to an array, and then fetch all the characters at once.
          characterIds.push(charId);
        });
        //fetch all the characters at once.
        url = `https://rickandmortyapi.com/api/character/${characterIds}`;
        response = await fetch(url);
        data = await response.json();
        //if characters were returned from the API call, update the setChars variable
        data.length ? setChars(data) : setChars(null);
        setChars(data);
      }
    }
  }
  function createEpisodeList(data) {
    let list = [];
    list.push({ value: 0, label: "Choose..." });
    let i = 1;
    //build each dropdown option for the user to select
    data?.map((episode) => {
      let obj = { value: i, label: `Episode - ${episode.id}` };
      list.push(obj);
      i++;
    });
    //create the dropdown
    setOptions(list);
  }
  //trigger this function when the page loads to fetch all episodes
  getEpisodes();

  return (
    <div className="episode-style">
      <div>
        <h1>Episode name: {episodeName}</h1>
        <h4>Air Date: {airDate}</h4>
      </div>
      <div>
        <h3>Pick Episode</h3>
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
}
export default Episodes;
