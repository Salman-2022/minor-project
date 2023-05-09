import React,{useState} from 'react'
import '../App.css'
import Navbar from './Navbar'
import { useParams,redirect } from 'react-router-dom';

export const Datainput = (props) => {
  const {id} = useParams()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    option: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = localStorage.getItem("tableData")
    data = JSON.parse(data)
    const ind = data.findIndex(el=>el.tableNo==id)
    data[ind].name=formData.name
    data[ind].phone=formData.phone
    data[ind].countdown=parseInt(formData.option)
    localStorage.setItem("tableData",JSON.stringify(data)) 
    console.log(formData,id);
    console.log(data)
    window.location.href = '/home';

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let data = localStorage.getItem("tableData")
    data = JSON.parse(data)
    data[0].name=formData.name
    console.log(data)

    // if(!formData.name || !formData.option || formData.phone){
    //   alert('Name , phoneNo or time Option cannot be empty')
    // }
  }
  
  return (
    <>
    <Navbar/>
   
      <div className="position-absolute top-50 start-50 translate-middle inputsection my-5 .align-items-end">

    <form onSubmit={handleSubmit}>
      <div className="mb-3 mx-2">
      <label>
        Name:
        <input
          className="form-label my-5"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone number:
        <input
          className="form-label my-5"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Time Duration:
        <select className='form-label' name="option" value={formData.option} onChange={handleChange}>
          <option value=""></option>
          <option value="30">30 Min</option>
          <option value="60">1 Hr</option>
          <option value="90">1 Hr 30 Min</option>
          <option value="120">2 Hrs</option>

        </select>
      </label>
      <br />
      <button className='btn btn-primary my-5' type="submit">Submit</button>
      </div>
    </form>
    </div>
  
    </>
  )
  }
