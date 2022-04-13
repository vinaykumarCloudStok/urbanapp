
import React,{useState} from 'react';
import swal from 'sweetalert';
async function loginUser(credentials){
    return fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(credentials)
    })
    .then(data=>data.json())
}

const SignIn=()=>{
   const [email, setEmail] = useState();
   const [password,
     setPassword] = useState();
 const handleSubmit= async e =>{
  e.preventDefault();
  const response = await loginUser({
      email,
      password
  });
  if('accessToken' in response){
      swal("Success", response.message, "success",{
          buttons:false,
          timer:2000,
      })
      .then((value)=>{
          localStorage.setItem('accessToken', response['accessToken']);
          localStorage.setItem('user',JSON.stringify(response['user']));
          window.location.href('/profile');
      });
  }
  else{
      swal("Failed",response.message,"error");
  }
 }
    return(
        <>
        <div className="text-2xl container-fluid bg-bgBlue px-32 py-20">
            <p></p>
            <h1 className='text-center text-3xl '>Sign In </h1>
            <div className="lg:w-1/2 mx-auto w-full bg-white shadow-md p-4 mt-5  ">
             <form action="" noValidate  onSubmit={handleSubmit}>
              
                  <div> 
                     <label htmlFor="email"> Email </label>
                     <input type="text" className='w-full px-4 py-3 border-2 ' onChange={(e)=>setEmail(e.target.value)} />
                  </div>
                  <div className='mt-5'> 
                     <label htmlFor="password"> Password </label>
                     <input type="text" className='w-full px-4 py-3 border-2 ' onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                  <div className='mt-10'> 
                    <button type='button' className='px-10 py-3 bg-blue-600 cursor-pointer rounded-md shadow-sm text-white text-lg'> Signin </button>
                  </div>
             </form>
            </div>
        </div>
        </>
    )
}
export default SignIn;