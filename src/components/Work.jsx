import React from 'react'
import { work } from '../alldata'
import Common from './common/Common'

const Work = () => {
    return (
        <>
            <section className="work educations creative">
                <div className="container">
                    <div className="itemContent">
                        <Common title='employee' />
                        <div className="content flex">
                        {work.map(val => {
                                    return (
                                        <>
                                        <div className="box flex">
                                            <button className="primary-btn">{val.years}</button>
                                            <h2>{val.compnay}</h2>
                                            <p>{val.desc}</p>
                                        </div>        
                                        </>
                                    )
                                })}
                        </div>
                        <div className="contentRight">
                            <img src="./images/employment-bg.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work