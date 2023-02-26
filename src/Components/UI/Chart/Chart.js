//import './Chart.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  //import faker from 'faker';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
const Chart=(props)=> {
  
    return (
       <div> 
        { props.chartType==='bar' &&
        <Bar options={props.options} data={props.data} /> }

       </div>
    )
}

export default Chart ;