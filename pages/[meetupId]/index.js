import MeetupDetail from "@/components/meetups/MeetupDetail";
import { DUMMY_MEETUPS } from "..";

const MeetupDetails = ({ meetupData }) => {
  console.log(meetupData);

  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const { meetupId } = context.params;

  const meetup = await DUMMY_MEETUPS.find((meetup) => meetup.id === meetupId);

  return {
    props: {
      meetupData: {
        image: meetup.image,
        id: meetupId,
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
};

export default MeetupDetails;
