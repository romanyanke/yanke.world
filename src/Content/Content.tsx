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
          Lead Frontend Engineer @<a href="https://simplinic.de/">simplinic</a>
        </>
      }
    />
    <Pencils />
    <Details label="Residence" value="Saint Petersburg, Russia 🇷🇺" />
    <Details label="Email" value={<a href="mailto:roman@yanke.ru">roman@yanke.ru</a>} />
  </dl>
)

export default Content
