import "./styles.css";
import { Panel } from "primereact/panel";

const ListWithExpandableButton = (props) => {
  return (
    <>
      <Panel header={props.data.country} toggleable collapsed="true">
        <p className="m-0">
          <p>
            {" "}
            <span>continent : {props.data.continent}</span>
          </p>
          <p>
            <span>population : {props.data.population}</span>
          </p>
          <p>
            {" "}
            <span>TotalDeaths : {props.data.deaths.total}</span>
          </p>
          <p>
            {" "}
            <span>TotalTest : {props.data.tests.total}</span>
          </p>
        </p>
      </Panel>
    </>
  );
};

export default ListWithExpandableButton;
