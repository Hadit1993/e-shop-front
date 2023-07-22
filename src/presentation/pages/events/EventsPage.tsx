import EventCard from "../../components/common/EventCard";
import Header from "../../components/layouts/Header";

const EventsPage = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <EventCard active />
      <EventCard active />
    </div>
  );
};

export default EventsPage;
