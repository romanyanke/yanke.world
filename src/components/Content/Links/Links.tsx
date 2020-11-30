import { icons } from './icons'
import styles from './Links.module.css'

const Links = () => {
  const handle = 'romanyanke'
  const list = [
    { url: `https://github.com/${handle}`, icon: icons.github, title: 'GitHub' },
    { url: `https://www.instagram.com/${handle}`, icon: icons.instagram, title: 'Instagram' },
    { url: `https://www.linkedin.com/in/${handle}`, icon: icons.linkedin, title: 'LinkedIn' },
    { url: `https://t.me/${handle}`, icon: icons.telegram, title: 'Telegram' },
    { url: `https://twitter.com/${handle}`, icon: icons.twitter, title: 'Twitter' },
  ]

  return (
    <div className={styles.links}>
      <div className={styles.handle}>{handle}</div>
      {list.map(({ url, icon: Icon, title }) => (
        <a href={url} key={url} className={styles.link} title={title}>
          <Icon />
        </a>
      ))}
    </div>
  )
}

export default Links
