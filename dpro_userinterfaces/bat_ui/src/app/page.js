import Header from "../pages/components/header.js";
import Register from "../pages/components/register.js";
import Section from "../pages/components/elements/section.js"
import Footer from "../pages/components/footer.js";
import DiscoverPro from '../pages/components/features/discover pro/discoverpro.js';

export default function Home() {

  //const userPriviledges = {userId: "000-000", role: "analyst", processes: ["analysis", "architecture"] };

  let user = 1;
  let discoverpro = 1;
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
  else if(discoverpro != null) {
    pageContent = <DiscoverPro />;
    footerContent = <Footer />;
  }

  return (
    <div className="block flex flex-col">
      <div className="flex flex-col w-full">
        <Header></Header>
        <div className="flex flex-col mt-[90] w-full items-center justify-evenly">      
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