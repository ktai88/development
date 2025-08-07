import { Button } from "@astron-sdc/design-system";
import "@astron-sdc/design-system/styles.css";
import Image from "next/image";

export default function Home() {
  return (
<div className="font-inter flex min-h-screen">
      {/* Sidebar */}
      <aside className="bg-astronBg font-montserrat text-center w-16 text-white p-4 pl-5">
        <img className="object-center mt-3" src="sp-logo.svg"></img>
        <nav className="flex flex-col mt-12">
          <a href="#"><img src="btn-dashboard.svg"></img></a>
        </nav>
      </aside>


      {/* Main Content */}
      <main className="flex-1 px-6 md:px-16 py-6">
        <div className="grid grid-cols-12 gap-4">
         <a className="w-100" href="#"><img className="object-fill" src="sp-logo-text.svg"></img></a>
          
          <p className="text-xs font-montserrat col-span-12 rounded-lg"><a href="#" className="text-sky-500" >Science Platform</a> &gt; Dashboard</p>
          <div className="bg-astronPanel p-6 col-span-12 xl:col-span-8 rounded-lg">
            <h2 className="pl-2 pb-3 text-xl font-montserrat font-semibold">Overview</h2>
            <div className="grid grid-cols-12 gap-4">

              <div className="col-span-12 lg:col-span-6 py-2">
                  <a href="#" className="p-2 grid grid-cols-12 hover:bg-astronDarkBlue transition duration-200 ease-in-out hover:scale-102 rounded">
                    <img className="col-span-2" src="app-icon-tulp.svg"></img>
                    <div className="col-span-10">
                      <h3 className="font-montserrat text-base font-semibold">Tulp - Submit proposal</h3>
                      <p className="text-sm font-light">Astron proposal submission tool</p>
                    </div>
                  </a>
                </div>

              <div className="col-span-12 lg:col-span-6 py-2">
                  <a href="#" className="p-2 grid grid-cols-12 hover:bg-astronDarkBlue transition duration-200 ease-in-out hover:scale-102 rounded">
                    <img className="col-span-2" src="app-icon-stageit.svg"></img>
                    <div className="col-span-10">
                      <h3 className="font-montserrat text-base font-semibold">StageIT</h3>
                      <p className="text-sm font-light">Request creation to stage data</p>
                    </div>
                  </a>
                </div>

              <div className="col-span-12 lg:col-span-6 py-2">
                  <a href="#" className="p-2 grid grid-cols-12 hover:bg-astronDarkBlue transition duration-200 ease-in-out hover:scale-102 rounded">
                    <img className="col-span-2" src="app-icon-tmss.svg"></img>
                    <div className="col-span-10">
                     <h3 className="font-montserrat text-base font-semibold">TMSS</h3>
                     <p className="text-sm font-light">Telescope Manager Specification System</p>
                    </div>
                  </a>
              </div>

               <div className="col-span-12 lg:col-span-6 py-2">
                  <a href="#" className="p-2 grid grid-cols-12 hover:bg-astronDarkBlue transition duration-200 ease-in-out hover:scale-102 rounded">
                    <img className="col-span-2" src="app-icon-narcis.svg"></img>
                    <div className="col-span-10">
                     <h3 className="font-montserrat text-base font-semibold">Narcis</h3>
                     <p className="text-sm font-light">Application for Project and Resource Management</p>
                    </div>
                  </a>
              </div>

            </div>
          </div>

          <div className="bg-astronPanel p-6 col-span-12 xl:col-span-4 rounded-lg">
            <h2 className="pl-2 pb-3 text-xl font-montserrat font-semibold">Support</h2>
              
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 py-2">
                  <a href="#" className="p-2 grid grid-cols-12 hover:bg-astronDarkBlue transition duration-200 ease-in-out hover:scale-102 rounded">
                    <img className="col-span-2" src="app-icon-helpdesk.svg"></img>
                    <div className="col-span-10">
                      <h3 className="font-montserrat text-base font-semibold">SDC Helpdesk</h3>
                      <p className="text-sm font-light">Helpdesk ticket creation (JIRA)</p>
                    </div>
                  </a>

                <div className="col-span-12 py-2">
                   <a href="#" className="p-2 grid grid-cols-12 hover:bg-astronDarkBlue transition duration-200 ease-in-out hover:scale-102 rounded">
                    <img className="col-span-2" src="app-icon-docs.svg"></img>
                    <div className="col-span-10">
                      <h3 className="font-montserrat text-base font-semibold">Documentation</h3>
                      <p className="text-sm font-light">Get to know and use our applications</p>
                    </div>
                  </a>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
