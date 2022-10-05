import { Route } from "react-router-dom";


const CalenderActivityOverview = () => {
  return ( 
    <div
      id="overviewPage"
      className="h-full w-full flex flex-col items-center bg-primary px-6 pt-10"
    >
      <div className="w-full h-full">
        <p className="text-4xl pb-6 text-themewhite">Holdnavn</p>
        <ul className="text-themewhite text-lg">
          <li>langt navn1</li>
          <li>langt navn2</li>
          <li>langt navn3</li>
        </ul>
      </div>
    </div>
   );
}
 
export default CalenderActivityOverview;