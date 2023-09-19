import React from 'react'
import {JobWrap, JobMain, JBody, JobRow} from '../../Styles/Careers';
import OpeningJobs from '../../data/careers'

function Jobs() {
  return (
    <>
        <JobWrap>
            <JobMain>
                <h1>Careers at Marivent</h1>
            </JobMain>

            <JBody>
                <JobRow>
                    {OpeningJobs.map((items, index) => (
                        <>
                            <p>{items.name}</p>
                        </>
                    ))}
                </JobRow>
            </JBody>
        </JobWrap>
    </>
  )
}

export default Jobs