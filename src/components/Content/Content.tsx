import Details from './Details'
import Links from './Links'
import Pencils from './Pencils'

const Content = () => (
  <article>
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
      <Details label="Email" value={<a href="mailto:roman@yanke.ru">roman@yanke.ru</a>} />
      <Details label="Residence" value="Saint Petersburg, Russia 🇷🇺" />
      <Pencils />
    </dl>
  </article>
)

export default Content
