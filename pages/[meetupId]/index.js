import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient } from "mongodb";
import Head from "next/head";

const MeetupDetails = ({ meetupData }) => {
  console.log(meetupData);

  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <MeetupDetail
        image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://harsha3997:9gUOjL42ggP7D2Tx@cluster0.spc5qyk.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => {
      return {
        params: {
          meetupId: meetup._id.toString(),
        },
      };
    }),
  };
};

export const getStaticProps = async (context) => {
  const { meetupId } = context.params;

  const client = await MongoClient.connect(
    "mongodb+srv://harsha3997:9gUOjL42ggP7D2Tx@cluster0.spc5qyk.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  const meetup = await meetups.find(
    (meetup) => meetup._id.toString() === meetupId
  );

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
