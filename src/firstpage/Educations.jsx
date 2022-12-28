import React from 'react'
import { education } from '../alldata'
import Common from './common/Common'

const Educations = () => {
    return (
        <>
            <section className="educations creative">
                <div className="container">
                    <div className="itemContent">
                        <Common title='educations' />
                        <div className="content flex">
                            <div className="contentRight">
                                <img src="./images/education-bg.jpg" alt="" />
                            </div>
                            <div className="contentLeft">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde qui sit, placeat earum animi harum nisi officiis. Reiciendis repudiandae illum ipsa, a temporibus quidem, vitae sapiente assumenda voluptate quod laudantium.</p>
                                {education.map(val => {
                                    return (
                                        <>
                                        <div className="box flex">
                                            <h1>{val.id}</h1>
                                            <h2>
                                                {val.name} <br />
                                                <span>{val.program}</span>
                                                <br />
                                                <span>{val.year}</span>
                                            </h2>
                                        </div>        
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Educations