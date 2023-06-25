import profiles from '../data/berlin.json';
import { useState } from 'react';

const Facebook = () => {
  const [countrySelected, setCountrySelected] = useState('');
  const countries = [
    'England',
    'USA',
    'Malaysia',
    'Germany',
    'Sweden',
    'Nigeria',
    'Italy',
    'Scotland',
    'Kazakhstan',
    'Russia',
    'Catalonia',
    'France',
    'Israel',
    'Brazil',
    'Taiwan',
    'Turkey',
    'Norway',
  ];

  const filterHandler = (event) => {
    setCountrySelected(event.target.value);
  };

  return (
    <div>
      <span>
        {countries.map((country) => {
          const isActive = country === countrySelected ? 'blue' : '';

          return (
            <button
              value={country}
              onClick={filterHandler}
              style={{ backgroundColor: isActive }}
            >
              {country}
            </button>
          );
        })}
      </span>
      {profiles.map((profile) => {
        const isActive = profile.country === countrySelected ? 'blue' : '';
        return (
          <div
            style={{
              borderStyle: 'solid',
              width: '500px',
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: isActive,
            }}
          >
            <img src={profile.img} alt="" width="150px" />
            <div style={{ textAlign: 'start', paddingLeft: '10px' }}>
              <p>
                <b>First Name: </b> {profile.firstName}
              </p>
              <p>
                <b>Last Name: </b> {profile.lastName}
              </p>
              <p>
                <b>Country: </b> {profile.country}
              </p>
              <p>
                <b>Type: </b> {profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Facebook;
