import Header from "./components/header.js";
import Register from "./components/register.js";
import Intake from "./components/intake.js";
import Review from "./components/review.js";
import Section from "./components/elements/section.js"
import Footer from "./components/footer.js";
import DataValues from "./components/data retrieval/datavalues.js";
import SaveDataValues from "./components/data save/savedatavalues.js";
import Analysis from "./components/features/analysis/analysis.js";

export default function Home() {

  //const userPriviledges = {userId: "000-000", role: "analyst", processes: ["analysis", "architecture"] };

  let user = 1;
  let intake = null;
  let review = null;
  let dataRetrieval = null;
  let dataSave = null;
  let analysis = 1;
  let pageContent, footerContent;

  // User types represent three roles: business analyst (reviewer, interviewer), requestor (team member or lead), workflow designer (process diagram creator)  
  // Each type is represented by a number:
  // 1 - analyst, 2 - requestor, 3 - workflow

  let userType = 1;
  let isAnalyst = userType == 1 ? true : false;
  let isRequestor = userType == 2 ? true : false;
  let isWorkflow = userType == 3 ? true : false;

  if (user == null) {  
    pageContent = <Register />;
    footerContent = <p> Disclaimer: User information is used responsibly according with all privacy, safety, and security regulations. </p>;
  }
  else if (intake != null) {
    pageContent = <Intake />;
    footerContent = <Footer />;
  }
  else if (review != null){
    pageContent = <Review />;
    footerContent = <Footer />;
  }
  else if (dataRetrieval != null){
    pageContent =  <DataValues />;
    footerContent = <Footer />;
  }
  else if (dataSave != null){
    pageContent = <SaveDataValues />;
    footerContent = <Footer />;
  }
  else if (analysis != null) {
    pageContent = <Analysis />;
    footerContent = <Footer />;
  }

  return (
    <div className="block flex-col">
      <Header></Header>
      <div className="flex flex-col mt-[60] w-full h-screen items-center justify-evenly">      
            {
              pageContent
            }
        <footer className="gap-[1px] items-center justify-center">
          <Section className="m-[10%] opacity-50 shadow-cyan-600" ></Section>
            {
              footerContent
            }
        </footer>
      </div>
    </div>
  );
}
