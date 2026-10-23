import React from 'react'

const Info = () => {
  return (
    <div id='infoFilter'>
      <div id='infoStones'>
        <div className='stones s1'><p>All</p> <span>10</span> </div>
        <div className='stones s2'><p>Completed</p> <span>6</span> </div>
        <div className='stones s3'><p>Pending</p> <span>4</span> </div>
      </div>

 
      <div id='filter'>
        <select name='' defaultValue="newest">
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
        </select></div>
 
      <div id='filter'></div>
 
    </div>
  )
}

export default Info
