import { icons } from './icons'
import styles from './Links.module.css'

const Links = () => {
  const handle = 'romanyanke'
  const format = (domain: string) => `https://${domain}/${handle}`
  const list = [
    { url: format('twitter.com'), icon: icons.twitter, title: 'Twitter' },
    { url: format('instagram.com'), icon: icons.instagram, title: 'Instagram' },
    { url: format('t.me'), icon: icons.telegram, title: 'Telegram' },
    { url: format('github.com'), icon: icons.github, title: 'GitHub' },
    { url: format('linkedin.com/in'), icon: icons.linkedin, title: 'LinkedIn' },
  ]

  return (
    <div className={styles.root}>
      <span>{handle}</span>
      {list.map(({ url, icon: Icon, title }) => (
        <a href={url} key={url} className={styles.link} title={title}>
          <Icon />
        </a>
      ))}
    </div>
  )
}

export default Links
