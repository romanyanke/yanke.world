import React, { SFC } from 'react'
import { IDetailsProps } from './Details.interface'

const Details: SFC<IDetailsProps> = ({ label, value }) => {
  return (
    <>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </>
  )
}

export default Details
