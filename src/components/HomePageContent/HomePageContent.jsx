import { Link } from 'react-router-dom';
import css from './index.module.css';

const HomePageContent = () => {
  return (
    <div>
      <h1 className={css.homeTitle}>CAMPER FOR OUTDOOR ACTIVITIES</h1>
      <div className={css.homeContainer}>
        <img
          className={css.homePicture}
          src="https://storage.mycamper.com/assets/vehicle/motorhome/7615/x699xY8muMqbpBPJoA2Rpy3ZYnACKX0NiyO7vjvk.jpg"
          alt="Camper"
        />

        <div>
          <p className={css.homeText}>
            Buying a camper is an important decision. Among the many options, it
            is easy to get confused when choosing the perfect house on wheels.
          </p>
          <p className={css.homeText}>
            If you choose a house on wheels and look at different trailers, you
            can arrange a test drive by
            <Link to="/catalog" className={css.homeLink}>
              {' '}
              renting a camper.{' '}
            </Link>
            This is an ideal option in the conditions of such a variety of
            campers on the market. We offer the option of short-term rentals
            (from 2 days to several weeks) and are ready to offer long-term
            rentals from several weeks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
