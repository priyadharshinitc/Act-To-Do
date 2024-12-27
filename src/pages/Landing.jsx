import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from 'react-router-dom';

function Landing() {
    const data = useLocation();

    function getCurrentMonthYear() {
      const today = new Date();
      const options = {month: 'long', year: 'numeric'};
      return today.toLocaleDateString('en-US', options);
    }

    function getCurrentTime() {
      const now = new Date();
      const options = {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true};
      return now.toLocaleString('en-US', options);
    }

    const currentMonthYear = getCurrentMonthYear();
    const currentTime = getCurrentTime();

    return (
      <div className="bg-black p-10 md:p-16">
        <div className="bg-[#EFEFEF] p-5 md:p-10 border rounded-md">
          <Header name={data.state.user}/>
          <div className="flex justify-between gap-7 flex-wrap my-5">
            <Card bgcolor="#8272DA" title="23&deg;C" subtitle="Chennai" />
            <Card bgcolor="#FD6663" title={currentMonthYear} subtitle={currentTime} />
            <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"} />
          </div>
          <TodoContainer />
        </div>
      </div>
    );
  }
  
  export default Landing;