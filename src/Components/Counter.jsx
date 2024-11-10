import React, { useEffect, useState } from 'react'

function Counter() {
    //Declare state for the counter value
  const [count, setCount] = useState(0);

  // Use useEffect to create an interval that updates the counter every second
  useEffect(() => {
    const interval= setInterval(() => {
      setCount(prevCount=>prevCount + 1); // Increment the count by 1
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  function stop(){
    

  }
  function reset(){
    setCount(0);
  }
    
  return (
    <>
      
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4  rounded mt-5"style={{height:"300px",backgroundColor:"darkblue",boxShadow:"2px 2px 6px black"}}>
            <h1 style={{padding:"20px",color:"white",textAlign:"center"}}>Automatic Counter</h1>

            <p style={{padding:"5px",color:"white",textAlign:"center"}}>Let the counter do the work for you</p>

            <div className="result border border-dark rounded"style={{backgroundColor:"pink",marginTop:"50px",width:"200px",marginLeft:"140px"}}>
                <p className='text-center '>{count}</p>
                

            </div>
            <div className="buttonDiv ">
            <button onClick={stop}  className='btn btn-danger'style={{marginLeft:"120px",marginTop:"20px"}}>STOP</button>
            <button onClick={reset} className='btn btn-warning'style={{marginLeft:"60px",marginTop:"20px"}}>RESET</button>
            </div>
        </div>
        <div className="col-4"></div>
      </div>
    </>
  )
}

export default Counter
