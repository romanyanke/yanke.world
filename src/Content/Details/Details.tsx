import { ReactNode } from 'react'

export interface Props {
  label: ReactNode
  value: ReactNode
}

const Details = ({ label, value }: Props) => (
  <>
    <dt>{label}</dt>
    <dd>{value}</dd>
  </>
)

export default Details
