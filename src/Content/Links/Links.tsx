import { icons } from './icons'
import styles from './Links.module.css'

const Links = () => {
  const handle = 'romanyanke'
  const list = [
    { url: `https://twitter.com/${handle}`, icon: icons.twitter, title: 'Twitter' },
    { url: `https://instagram.com/${handle}`, icon: icons.instagram, title: 'Instagram' },
    { url: `https://t.me/${handle}`, icon: icons.telegram, title: 'Telegram' },
    { url: `https://github.com/${handle}`, icon: icons.github, title: 'GitHub' },
    { url: `https://linkedin.com/in/${handle}`, icon: icons.linkedin, title: 'LinkedIn' },
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
