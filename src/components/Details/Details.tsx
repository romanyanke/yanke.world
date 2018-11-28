import React, { SFC } from 'react'

import { IDetailsProps } from './Details.interface'

const Details: SFC<IDetailsProps> = ({ label, value }) => {
  return (
    <>
      <div className="Details-label">{label}</div>
      {value}
      <hr className="Details-delimeter" />
    </>
  )
}

export default Details
