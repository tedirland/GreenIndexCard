import React from 'react'

const PostCreate = () => {
  return (
    <div>
      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='false'
              aria-controls='collapseOne'
            >
              Prioritize the changes you will make
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse collapse'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <strong>Prioritize the changes you will make</strong>
              Plan the changes you will make. Don't let perfect be the enemy of
              good
              <button className='btn btn-success'>Get Involved Locally</button>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              Advance Renewable Power Generation
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
              <br></br>
              <button className='btn btn-success'>
                Renewable Power Resources
              </button>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              Reduce The Amount of Meat and Dairy In Your Diet
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <strong>Especially Beef</strong>
              <br></br>
              <button className='btn btn-secondary'>Where's The Beef?</button>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingFour'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFour'
              aria-expanded='false'
              aria-controls='collapseFour'
            >
              Make Your Living Space More Energy Efficient
            </button>
          </h2>
          <div
            id='collapseFour'
            className='accordion-collapse collapse'
            aria-labelledby='headingFour'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <strong>Learn More</strong>
              <br></br>
              <button className='btn btn-primary'>
                Living Space Optimizer
              </button>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingFive'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFive'
              aria-expanded='false'
              aria-controls='collapseFive'
            >
              Talk with your Friends and Family
            </button>
          </h2>
          <div
            id='collapseFive'
            className='accordion-collapse collapse'
            aria-labelledby='headingFive'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <strong>Talking Points</strong>
              <ol>
                <li>Talking Point 1</li>
                <li>Talking Point 2</li>
                <li>Talking Point 3</li>
                <li>Talking Point 4</li>
              </ol>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingSix'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseSix'
              aria-expanded='false'
              aria-controls='collapseSix'
            >
              Reduce your food waste, compost if possible
            </button>
          </h2>
          <div
            id='collapseSix'
            className='accordion-collapse collapse'
            aria-labelledby='headingSix'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <strong>Blurb about composting</strong>
              <br></br>
              <button className='btn btn-danger'>
                Local Compost Resources
              </button>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingSeven'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseSeven'
              aria-expanded='false'
              aria-controls='collapseSeven'
            >
              Help Create Stronger Markets for Sustainable Products and Services
            </button>
          </h2>
          <div
            id='collapseSeven'
            className='accordion-collapse collapse'
            aria-labelledby='headingSeven'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <div className='card' style={{ width: '18rem' }}>
                <img
                  src='data:image/jpeg;base64,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'
                  className='card-img-top'
                  alt='...'
                ></img>
                <div className='card-body'>
                  <h5 className='card-title'>Sustainable Product</h5>
                  <p className='card-text'>
                    Here are some sustainable products!
                  </p>
                  <a href='/sustainableProducts' className='btn btn-primary'>
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingEight'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseEight'
              aria-expanded='false'
              aria-controls='collapseEight'
            >
              Participate in government and civic life
            </button>
          </h2>
          <div
            id='collapseEight'
            className='accordion-collapse collapse'
            aria-labelledby='headingEight'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <strong>Government Overview</strong>
              <br></br>
              <button className='btn btn-info'>View my local government</button>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingNine'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseNine'
              aria-expanded='false'
              aria-controls='collapseNine'
            >
              Do what you can to create a more equitable present and future
            </button>
          </h2>
          <div
            id='collapseNine'
            className='accordion-collapse collapse'
            aria-labelledby='headingNine'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <div className='input-group mb-3'>
                <label className='input-group-text' for='inputGroupSelect01'>
                  Options
                </label>
                <select className='form-select' id='inputGroupSelect01'>
                  <option selected>Choose...</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCreate
