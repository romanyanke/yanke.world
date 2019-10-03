import React from 'react'
import { IDetailsProps } from './Details.interface'

const Details = ({ label, value }: IDetailsProps) => (
  <>
    <dt>{label}</dt>
    <dd>{value}</dd>
  </>
)

export default Details
