import './app.css';

import Grid from '../../components/Competency_Page/grid';
import CircleAndBox from '../../components/Competency_Page/CircleAndBox';

function App() {
  return (
    
    <section className="app-section">
      <div className='top-bar'></div>
      <div className="app-container" >
        <h2>Competency</h2>
        <Grid rows={4}>
          <CircleAndBox title="Mechanical" detail="test" points="100" color="#A60202"></CircleAndBox>
          <CircleAndBox title="Programming" detail="test" points="100" color="#F23004"></CircleAndBox>
          <CircleAndBox title="Electrical" detail="test" points="100" color="#F27404"></CircleAndBox>
          <CircleAndBox title="Robotics" detail="test" points="100" color="#F29F04"></CircleAndBox>
        </Grid>
      </div>
    </section>
    
  );
}

export default App;