import { FunctionComponent } from 'react'
import { icons } from './icons'
import styles from './Links.module.css'

const handle = 'romanyanke'
const format = (domain: string) => `https://${domain}/${handle}`
const list: [FunctionComponent, string, string][] = [
  [icons.twitter, 'Twitter', 'twitter.com'],
  [icons.instagram, 'Instagram', 'instagram.com'],
  [icons.telegram, 'Telegram', 't.me'],
  [icons.github, 'GitHub', 'github.com'],
  [icons.linkedin, 'LinkedIn', 'linkedin.com/in'],
]
const Links = () => (
  <div className={styles.root}>
    <span>{handle}</span>
    {list.map(([Icon, title, url]) => (
      <a href={format(url)} key={url} className={styles.link} title={title}>
        <Icon />
      </a>
    ))}
  </div>
)

export default Links
