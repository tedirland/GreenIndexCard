import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJpLTBrnRZ8W3eFplcQmbOxgzhr3mycx_DPd7E4l9-pUXKc85UORfrvS1Pl3djRRIndpP0olA&usqp=CAc'
              alt='green index card'
              width='30'
              height='24'
            />
            My Green Index Card
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
