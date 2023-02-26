import Chart from "../UI/Chart/Chart";
//error import faker from 'faker';

const BookChart=(props)=>{
 
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' , // as const,
          },
          title: {
            display: true,
            text: 'Data Book Bar Chart',//'Chart.js Bar Chart',
          },
        },
      };

      const labels = // ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      props.dataBook.map((book)=>book.name );   
     const data = {
        labels,
        datasets: [
        {
            label: ' Book price ',
            data: //labels.map(()=>Math.floor( Math.random()*2000) ) 
                  //  labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                  props.dataBook.map((book)=>book.price ),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset  1',
          data://  labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          labels.map(()=>Math.floor( Math.random()*1000) ) ,
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        } 

         
        ],
      };
      
      
return (

    <Chart chartType={'bar'} options={options} data={data} />
)

}

export default BookChart; 