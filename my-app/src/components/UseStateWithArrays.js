import React, {useState} from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1,2,3]);
    const addNums = ()=>{
        setNums([...nums, nums.length + 1])
    }
    const reduceNums = ()=>{
        setNums(nums.filter((item, idx) => {
            return idx !== nums.length - 1;
        })
        )
    }
  return (
    <div>
        <button onClick={addNums}>
                Add Item
        </button>
        <button onClick={reduceNums}>
                Remove Item
        </button>
        <ul>
        {nums.map(num=> <li key={num}>{num}</li>)}
        </ul>
        
    </div>
  )
}

export default UseStateWithArrays