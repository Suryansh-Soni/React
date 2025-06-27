import { useState ,useCallback , useEffect, useRef} from 'react'



function App() {
const [lenght,setlength] = useState(8);
const [number,setnumber] = useState(false);
const [char,setchar] = useState(false);
const [Password,setPassword] = useState('');

const passwordGenerator = useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(number) str += "0123456789";
  if(char) str += "!@#$%^&*()_+";
  for(let i=0;i<lenght;i++){
    pass += str.charAt(Math.floor(Math.random() * str.length+1));
  }
  setPassword(pass);

},[lenght,number,char,setPassword]);

const passref=useRef  (null);

const copy = useCallback(() => {
  passref.current?.select();
  window.navigator.clipboard.writeText(Password)
},[Password]);


useEffect(() => {
  passwordGenerator();
}, [lenght, number, char, passwordGenerator]);

  return (
    <>
    <h1>Password Generator </h1>
  <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-5 py-3 my-8 bg-gray-800 '>
    <div className='flex shadow rounded-lg'>
      <input ref={passref} type="text" value={Password} className='outline-none w-full py-1 px-3 rounded-lg mr-2' placeholder ="password" readOnly />
      <button onClick={copy} className='text-black bg-blue '> COPY</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={8} max={20} value={lenght} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}/>
        <label className='text-white'>Length: {lenght}</label>
        <input type="checkbox" defaultChecked={number} id='numberinput'  onChange={()=>{setnumber((prev)=>!prev)}}/>
        <label className='text-white' > Numbers</label>
        <input type="checkbox" defaultChecked={char} id='charinput'  onChange={()=>{setchar((prev)=>!prev)}}/>
        <label className='text-white' > Character</label>


      
      </div>
    </div>
  </div>  
    </>
  )
}

export default App
