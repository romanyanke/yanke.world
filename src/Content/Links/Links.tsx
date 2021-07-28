import { icons } from './icons'
import styles from './Links.module.css'

const Links = () => {
  const handle = 'romanyanke'
  const urlize = (domain: string) => `https://${domain}/${handle}`
  const list = [
    { url: urlize('twitter.com'), icon: icons.twitter, title: 'Twitter' },
    { url: urlize('instagram.com'), icon: icons.instagram, title: 'Instagram' },
    { url: urlize('t.me'), icon: icons.telegram, title: 'Telegram' },
    { url: urlize('github.com'), icon: icons.github, title: 'GitHub' },
    { url: urlize('linkedin.com/in'), icon: icons.linkedin, title: 'LinkedIn' },
  ]

  return (
    <div className={styles.links}>
      <span className={styles.handle}>{handle}</span>
      {list.map(({ url, icon: Icon, title }) => (
        <a href={url} key={url} className={styles.link} title={title}>
          <Icon />
        </a>
      ))}
    </div>
  )
}

export default Links
