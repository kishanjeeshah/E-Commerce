import React from 'react'

const Sorting = ({Sort,setSort}) => {

    const changeHandler = (e) => {
        setSort(e.target.value);
      };
      
  return (
        <div>
            Price : 
            <select value={Sort} onChange={changeHandler}>
              <option className="hidden" value=""></option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
    </div>
  )
}

export default Sorting