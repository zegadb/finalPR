import React from 'react'

const Common = ({ title }) => {
  return (
    <>
        <div className="sideHeading">
            <h1>
                <i className="fas fa-minus" />
                {title}
            </h1>
        </div>
    </>
  )
}

export default Common