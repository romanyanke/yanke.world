import { ReactNode } from 'react'
import Details from './Details'
import Links from './Links'
import Pencils from './Pencils'
import Position from './Position'
import Email from './Email'
import Residence from './Residence'

const info: [string, ReactNode][] = [
  ['Handle', <Links />],
  ['Position', <Position />],
  ['About', <Pencils />],
  ['Residence', <Residence />],
  ['Email', <Email />],
]

const Content = () => (
  <dl>
    {info.map(([label, value]) => (
      <Details label={label} value={value} key={label} />
    ))}
  </dl>
)

export default Content
