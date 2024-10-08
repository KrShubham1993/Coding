import logo from './logo.svg';
import './App.css';
import data from './data';

let level = 0;

let Accordian = ({title, key}) => {

  return (
    <div key={key}>
      {title}
    </div>
  )


  // console.log('child.children = ', child.children);
  // if (child.children && child.children.length > 0) {
  //   // level += 1;
  //   return <Accordian child={child.children} />
  // } else {
  //   return <div key={child.key}>{child.title}</div>
  // }
};

let generateBody = ({data}) => {

}


let AccordianBuilder = ({data}) => {

  // const generateSubmenu = (data) => {
  //   return data.map((v) => {
  //     return (
  //       <>
  //         <Accordian title={v.title} key={v.key}></Accordian>
  //         {generateSubmenu(v.children)}
  //       </>
  
  //     )
  //   })
  // }

  console.log('data = ', data);
  let jsx = 
    data.map((v,i) => {
    if (v.children && v.children.length > 0) {
        return (
          <>
            <Accordian title={v.title} key={v.key}></Accordian>
            <AccordianBuilder data={v.children}/>
            {/* {generateSubmenu(v.children)} */}
          </>

        )
      } else {
        return <Accordian title={v.title}></Accordian>
      }
  });
  return <div> {jsx} </div>; 
}

function App() {
  return (
    <div className="App">
        <AccordianBuilder data={data}/>
    </div>
  );
}

export default App;
