import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive')

  return (
   <>

<div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2 m-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-md bg-white rounded-xl px-8 py-4'>
                  <button onClick={()=>{setColor('gray')} } className='py-2 px-8 rounded-xl text-white shadow-xl' style={{backgroundColor:'gray'}}>Gray</button>
                  <button onClick={()=>{setColor('yellow')} } className='py-2 px-8 rounded-xl text-black shadow-xl' style={{backgroundColor:'yellow'}}>Yellow</button>
                  <button onClick={()=>{setColor('Blue')} } className='py-2 px-8 rounded-xl text-white shadow-xl' style={{backgroundColor:'blue'}}>Blue</button>
                  <button onClick={()=>{setColor('green')} } className='py-2 px-8 rounded-xl text-white shadow-xl' style={{backgroundColor:'green'}}>Green</button>
                  <button onClick={()=>{setColor('orange')} } className='py-2 px-8 rounded-xl text-white shadow-xl' style={{backgroundColor:'orange'}}>Orange</button>
                  <button onClick={()=>{setColor('purple')} } className='py-2 px-8 rounded-xl text-white shadow-xl' style={{backgroundColor:'purple'}}>Purple</button>
                  <button onClick={()=>{setColor('black')} } className='py-2 px-8 rounded-xl text-white shadow-xl' style={{backgroundColor:'black'}}>Black</button>
                  <button onClick={()=>{setColor('brown')} } className='py-2 px-8 rounded-xl text-white shadow-xl' style={{backgroundColor:'brown'}}>Brown</button>
                  <button onClick={()=>{setColor('pink')} } className='py-2 px-8 rounded-xl text-black shadow-xl' style={{backgroundColor:'pink'}}>Pink</button>    
                  <button onClick={()=>{setColor('cyan')} } className='py-2 px-8 rounded-xl text-black shadow-xl' style={{backgroundColor:'cyan'}}>Cyan</button>
                  <button onClick={()=>{setColor('red')} } className='py-2 px-8 rounded-xl text-white shadow-xl' style={{backgroundColor:'red'}}>Red</button>
            </div>
        </div>
    </div> 
   </>
  )
}

export default App;


  // <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
  //   <h1 className='text-orange-500	font-bold	text-5xl text-center pt-6'>This is the Backround Color Piker...!</h1>
  //   <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2'>
  //     <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>

  //         <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>(setColor('red'))} style={{backgroundColor:"red"}}>Red</button>
  //         <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=> (setColor('green'))} style={{backgroundColor:"green"}}>Green</button>
  //         <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>(setColor('pink'))} style={{backgroundColor:"pink"}}>Red</button>
  //         <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>{setColor('blue')}} style={{backgroundColor:'blue'}}>Blue</button>
  //         <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={()=>{setColor('yellow')}} style={{backgroundColor:'yellow'}}>Yellow</button>
  //         <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={()=>{setColor('azure')}} style={{backgroundColor:'azure'}}>Azure</button>
  //         <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={()=>{setColor('cyan')}} style={{backgroundColor:'cyan'}}>Cyan</button>
  //         <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>{setColor('gray')}} style={{backgroundColor:'gray'}}>Gray</button>



  //       </div>
  //   </div>
  // </div>       

