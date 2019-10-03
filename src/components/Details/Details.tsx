import React from 'react'
import { DetailsProps } from './Details.interface'

const Details = ({ label, value }: DetailsProps) => (
  <>
    <dt>{label}</dt>
    <dd>{value}</dd>
  </>
)

export default Details
