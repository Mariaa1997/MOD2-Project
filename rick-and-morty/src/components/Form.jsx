import { useState } from 'react'

function Form(props) {

    const [formData, setFormData] = useState({
        searchTerm:"",
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData.searchTerm)
        props.getCharacters(formData.searchTerm);
    }
  return (
    <div>
        <p>Search Character Here</p>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            onChange={handleChange}
            value={formData.searchTerm}
            />
            <input type="submit" value="submit" />
            </form>
            <p>Character: {formData.searchTerm}</p>
    </div>
  )
}

export default Form