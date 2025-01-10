import EventCardImg from "../EventCard/EventCardImg";
import SectionTitle from "../shared/SectionTitle";
import springcity from "../../assets/springcity.jpg";
import riverfront from "../../assets/riverfront.jpg";
import mountain from "../../assets/mountaintrail.jpeg";
import coastal from "../../assets/coastal.jpg";
import desert from "../../assets/desert.jpg";
import citylights from "../../assets/citylights.jpg";

const UpcomingMarathons = () => {
    const marathons = [
        {
            _id: "1",
            image: springcity,
            title: "Spring City Marathon",
            description: "Experience the scenic routes of Spring City.",
            location: "Spring City, CA",
            marathonStartDate: "2025-03-15T00:00:00.000Z",
            startRegistrationDate: "2025-01-01T00:00:00.000Z",
            endRegistrationDate: "2025-03-01T00:00:00.000Z",
            runningDistance: "10km",
            totalRegistrationCount: 200,
        },
        {
            _id: "2",
            image: riverfront,
            title: "Riverfront Run",
            description: "Run along the beautiful riverfront trails.",
            location: "Riverfront, NY",
            marathonStartDate: "2025-04-10T00:00:00.000Z",
            startRegistrationDate: "2025-02-01T00:00:00.000Z",
            endRegistrationDate: "2025-04-01T00:00:00.000Z",
            runningDistance: "5km",
            totalRegistrationCount: 150,
        },
        {
            _id: "3",
            image: mountain,
            title: "Mountain Trail Challenge",
            description: "Conquer the rugged mountain trails.",
            location: "Aspen, CO",
            marathonStartDate: "2025-05-05T00:00:00.000Z",
            startRegistrationDate: "2025-03-01T00:00:00.000Z",
            endRegistrationDate: "2025-04-20T00:00:00.000Z",
            runningDistance: "15km",
            totalRegistrationCount: 180,
        },
        {
            _id: "4",
            image: coastal,
            title: "Coastal Breeze Marathon",
            description: "Feel the ocean breeze as you run.",
            location: "Santa Monica, CA",
            marathonStartDate: "2025-06-12T00:00:00.000Z",
            startRegistrationDate: "2025-04-01T00:00:00.000Z",
            endRegistrationDate: "2025-06-01T00:00:00.000Z",
            runningDistance: "20km",
            totalRegistrationCount: 220,
        },
        {
            _id: "5",
            image: desert,
            title: "Desert Dash",
            description: "Challenge yourself in the arid desert.",
            location: "Phoenix, AZ",
            marathonStartDate: "2025-07-20T00:00:00.000Z",
            startRegistrationDate: "2025-05-01T00:00:00.000Z",
            endRegistrationDate: "2025-07-01T00:00:00.000Z",
            runningDistance: "25km",
            totalRegistrationCount: 300,
        },
        {
            _id: "6",
            image: citylights,
            title: "City Lights Run",
            description: "Run under the sparkling city lights.",
            location: "New York, NY",
            marathonStartDate: "2025-08-15T00:00:00.000Z",
            startRegistrationDate: "2025-06-01T00:00:00.000Z",
            endRegistrationDate: "2025-08-01T00:00:00.000Z",
            runningDistance: "12km",
            totalRegistrationCount: 250,
        },
    ];

    return (
        <section className="mt-10 md:mt-16 max-w-[1920px] mx-auto px-4">
            <SectionTitle title="Upcoming Marathons" subtitle="Join Our Upcoming Marathon Events" />
            <EventCardImg marathons={marathons} />
        </section>
    );
};

export default UpcomingMarathons;
