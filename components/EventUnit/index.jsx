import React from 'react';
import PropTypes from 'prop-types';

import EventLinks from '../EventLinks';
import * as S from './styles';

const EventUnit = ({
  i,
  id,
  eventTitle,
  eventDate,
  eventDescription,
  firstName,
  lastName,
  profilePicture,
  twitterHandle,
  meetupLink,
  slidesLink,
  eventPictures,
  setImageArr,
  handleOpen,
}) => (
  <div key={id}>
    <S.Event isFirst={i === 0}>
      <S.EventSpeaker>
        <S.EventSpeakerImage image={profilePicture} />
        <S.EventSpeakerName>
          {`${firstName} ${lastName}`}
        </S.EventSpeakerName>
        <S.EventSpeakerTwitter href={`https://twitter.com/${twitterHandle}`} target="_blank">
          {`@${twitterHandle}`}
        </S.EventSpeakerTwitter>
      </S.EventSpeaker>
      <S.EventName>
        {eventTitle[0].text}
        <span>
          {` • ${eventDate}`}
        </span>
      </S.EventName>
      <S.EventDesc>
        {eventDescription[0].text}
      </S.EventDesc>
      <EventLinks
        {...{
          meetupLink,
          slidesLink,
          eventPictures,
          setImageArr,
          handleOpen,
        }}
      />
    </S.Event>
  </div>
);

EventUnit.propTypes = {
  i: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  eventTitle: PropTypes.oneOfType([PropTypes.array]).isRequired,
  eventDate: PropTypes.string.isRequired,
  eventDescription: PropTypes.oneOfType([PropTypes.array]).isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string.isRequired,
  meetupLink: PropTypes.oneOfType([PropTypes.object]).isRequired,
  slidesLink: PropTypes.oneOfType([PropTypes.object]).isRequired,
  eventPictures: PropTypes.oneOfType([PropTypes.array]).isRequired,
  setImageArr: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default EventUnit;