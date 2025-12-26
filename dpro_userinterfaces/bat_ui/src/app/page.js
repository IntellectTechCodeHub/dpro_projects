import Header from "../pages/components/header.js";
import Register from "../pages/components/register.js";
import Intake from "../pages/components/intake.js";
import Review from "../pages/components/review.js";
import Section from "../pages/components/elements/section.js"
import Footer from "../pages/components/footer.js";
import DataValues from "../pages/components/data retrieval/datavalues.js";
import SaveDataValues from "../pages/components/data save/savedatavalues.js";
import Analysis from "../pages/components/features/analysis/analysis.js";
import InterviewModule from "../pages/components/features/analysis/interview/interviewModule.js";

export default function Home() {

  //const userPriviledges = {userId: "000-000", role: "analyst", processes: ["analysis", "architecture"] };

  let user = 1;
  let intake = null;
  let review = null;
  let dataRetrieval = null;
  let dataSave = null;
  let analysis = null;
  let analysisInterview = 1;
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
  else if (analysisInterview != null) {
    pageContent = <InterviewModule />;
    footerContent = <Footer />;
  }

  return (
    <div className="block flex flex-col">
      <div className="flex flex-col w-full">
        <Header></Header>
        <div className="flex flex-col mt-[60] w-full items-center justify-evenly">      
            {
              pageContent
            }
        </div>
      </div>
      <div className="flex flex-col w-full"> 
        <footer className="flex flex-col w-full my-[2.5%] gap-[1px] text-xs font-bold items-center justify-center">
            <Section className="m-[2.5%] opacity-50 shadow-cyan-600" ></Section>
              {
                footerContent
              }
          </footer>
      </div>
    </div>
  );
}