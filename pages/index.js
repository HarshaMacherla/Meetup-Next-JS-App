import MeetupList from "@/components/meetups/MeetupList";

export const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 9, 12345 Some city",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Lehesten_2012_x14.JPG",
    address: "Some address 19, 67890 Some city",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Pfullendorf_003.jpg",
    address: "Some address 99, 99999 Some city",
    description: "This is a third meetup!",
  },
];

const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;

  return {
    props: { meetups: DUMMY_MEETUPS },
  };
};

// export const getStaticProps = async () => {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export default HomePage;
