import { useState, useEffect } from "react";
import Characters from "../pages/Characters";

function Form(props) {
 
  const [formData, setFormData] = useState({
    searchterm: "",
  });
  
  const handleChange = (event) => {
    
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    
    event.preventDefault();
    

    props.characterssearch(formData.searchterm);
  };
  return (
    <div className="form">
      <p>type in the character name</p>
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
