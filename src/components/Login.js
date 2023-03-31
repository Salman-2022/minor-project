import React,{useState} from 'react'
import './style.css'
import {MDBContainer, MDBCol, MDBRow} from 'mdb-react-ui-kit';


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if (username === 'teamAlpha' && password === 'hello') {
          window.location.href = '/home';
        } else {
          alert('Invalid credentials');
        }
      }
    
  return (
    <>
    <center>
    <div className='loginBox'>
        <MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
  </MDBCol>

<div>
<form onSubmit={handleSubmit}>
  <MDBCol col='4' md='6'>

<div className="d-flex flex-row align-items-center justify-content-center">

  <big><h2 className=" mb-0  my-5">Sign in</h2></big>

</div>

<div className="divider d-flex align-items-center my-4">
</div>
{/* 
<MDBInput wrapperClass='mb-4' label='User Id' id='formControlLg' type='email' size="lg"/>
<MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>


<div className='text-center text-md-start mt-4 pt-2'>
  <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
</div> */}
<label>
          Username:
          <input type="text"  value={username} onChange={(event) => setUsername(event.target.value)} />
        </label><br/>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit" className='my-3'>Log in</button>

</MDBCol>
  </form>
</div>

</MDBRow>



</MDBContainer>
    </div>
   </center>
    </>
  )
}

