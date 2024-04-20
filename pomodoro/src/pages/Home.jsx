import Clock from "../components/Clock";
import InteriorLayout from "../components/layouts/InteriorLayout";
import { usePomodoro } from "../hooks/usePomodoro";

const Home = () => {
  const [time, activity, percentage] = usePomodoro();
  return (
    <InteriorLayout>
      <Clock percentage={percentage} time={time} activity={activity} />
    </InteriorLayout>
  );
};

export default Home;
