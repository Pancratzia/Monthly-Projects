import Clock from "../components/Clock"
import InteriorLayout from "../components/layouts/InteriorLayout"
import { usePomodoro } from "../hooks/usePomodoro";


const Home = () => {

  const [progress, time, activity] = usePomodoro();
  return (
    <InteriorLayout>
        <Clock progress={progress} time={time} activity={activity} />
    </InteriorLayout>
  )
}

export default Home