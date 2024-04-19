import Clock from "../components/Clock"
import InteriorLayout from "../components/layouts/InteriorLayout"
import { usePomodoro } from "../hooks/usePomodoro";


const Home = () => {

  const [progress, time] = usePomodoro();
  return (
    <InteriorLayout>
        <Clock progress={progress} time={time} />
    </InteriorLayout>
  )
}

export default Home