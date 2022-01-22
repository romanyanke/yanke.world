import { FunctionComponent } from 'react'
import { icons } from './icons'
import styles from './Links.module.css'

const handle = 'romanyanke'
const format = (domain: string) => `https://${domain}/${handle}`
const list: [string, string, FunctionComponent][] = [
  ['Twitter', format('twitter.com'), icons.twitter],
  ['Instagram', format('instagram.com'), icons.instagram],
  ['Telegram', format('t.me'), icons.telegram],
  ['GitHub', format('github.com'), icons.github],
  ['LinkedIn', format('linkedin.com/in'), icons.linkedin],
]

const Links = () => (
  <div className={styles.root}>
    <span>{handle}</span>
    {list.map(([title, url, Icon]) => (
      <a href={url} key={url} className={styles.link} title={title}>
        <Icon />
      </a>
    ))}
  </div>
)

export default Links
