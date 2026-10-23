import React from 'react'

const Info = () => {
  return (
    <div id='infoFilter'>
      <div id='infoStones'>
        <div className='stones s1'><p>All</p> <span>10</span> </div>
        <div className='stones s2'><p>Completed</p> <span>6</span> </div>
        <div className='stones s3'><p>Pending</p> <span>4</span> </div>
      </div>

<<<<<<< HEAD
      <div id='filter'>
        <select name='' defaultValue="newest">
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
        </select></div>
=======
      <div id='filter'></div>
>>>>>>> 4319811773aed4a45c723b2dc2f6a3661fdb7e46
    </div>
  )
}

export default Info
