import Details from './Details'
import Links from './Links'
import Pencils from './Pencils'

const Content = () => (
  <dl>
    <Details label="Handle" value={<Links />} />
    <Details
      label="Position"
      value={
        <>
          Lead Frontend Engineer at{' '}
          <a href="https://simplinic.de/">simplinic</a>
        </>
      }
    />
    <Details label="About" value={<Pencils />} />
    <Details label="Residence" value="Saint Petersburg, Russia 🇷🇺" />
    <Details
      label="Email"
      value={<a href="mailto:roman@yanke.ru">roman@yanke.ru</a>}
    />
  </dl>
)

export default Content
