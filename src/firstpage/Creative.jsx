import React from 'react'
import Common from './common/Common'
import { creative } from '../alldata'

const Creative = () => {
  return (
    <>
        <section className="creative">
            <div className="container">
                <div className="itemContent">
                    <Common title='creative' />
                    {creative.map((val) => {
                        return (
                            <>
                            <div className="content flex">
                                <div className="contentLeft">
                                    <i className="fa fa-quote-left quote" />
                                    <h1>{val.heading}</h1>
                                    <h3>{val.title}</h3>
                                    <p>{val.desc}</p>
                                    <button className="primary-btn">
                                        DOWLOAD RESUME <i className="fa fa-long-alt-right"></i>
                                    </button>
                                </div>
                                <div className="contentRight">
                                    <img src={val.cover} alt="" />
                                </div>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Creative