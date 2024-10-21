import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />

      <div id="challenges">
        <TimerChallenge title="Baby Steps" targetTime={1}/>
        <TimerChallenge title="You Might Sweat a Little" targetTime={5}/>
        <TimerChallenge title="Send Help" targetTime={10}/>
        <TimerChallenge title="Therapist Not Included" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
