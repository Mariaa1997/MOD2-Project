import { useState, useEffect } from "react";
import Characters from "../pages/Characters";
// Define a function
//that is our component, always make sure to declare the props parameter
// so you can use props in your component
function Form(props) {
  //add state to hold the data of the form
  //The component must return some JSX
  const [formData, setFormData] = useState({
    searchterm: "",
  });
  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to moviesearch prop (the method that will search)

    props.characterssearch(formData.searchterm);
  };
  return (
    <div>
      <p>type in the character to search for</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
export default Form;
