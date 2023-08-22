import { useRouter } from "next/router";
import { DUMMY_MEETUPS } from "..";

const MeetupDetails = () => {
  const router = useRouter();

  console.log(DUMMY_MEETUPS);

  const { meetupId } = router.query;

  const meetup = DUMMY_MEETUPS.find((meetup) => meetup.id === meetupId);

  console.log(meetup);

  return (
    <>
      <div>
        <h1>{meetup.title}</h1>
        <img
          src={meetup.image}
          alt={meetup.title}
          width="640px"
          height="480px"
        />
        <h3>Address:</h3>
        <p>{meetup.address}</p>
        <h3>Description:</h3>
        <p>{meetup.description}</p>
      </div>
    </>
  );
};

export default MeetupDetails;
