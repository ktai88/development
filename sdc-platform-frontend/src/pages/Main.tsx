import Panel from "src/components/Panel";
import Layout from "src/components/Layout";

const CRUMBS = [
  {
    name: "Science Platform",
    href: "/",
  },
];

const MainPage = () => {
  return (
    <Layout title="Science Platform" breadcrumbs={CRUMBS}>
    <Panel>
        <div className="grid grid-cols-12 gap-4">
          <div className="bg-lightGrey/30 dark:bg-background-panel p-4 col-span-12 xl:col-span-8 rounded-lg">
            <h2 className="pl-2 pb-3 text-xl font-semibold">Overview</h2>
            <div className="grid grid-cols-12">

              <div className="col-span-12 lg:col-span-6 py-2">
                  <a href="#" className="p-2 grid grid-cols-12 ease-in-out duration-75 hover:bg-blue rounded transition hover:transition scale-95 hover:scale-100">
                    <img className="col-span-2" src="sdc-platform/app-icon-tulp.svg"></img>
                    <div className="col-span-10">
                      <h3 className="text-base font-semibold">Tulp - Submit proposal</h3>
                      <p className="text-sm font-light">Astron proposal submission tool</p>
                    </div>
                  </a>
                </div>

              <div className="col-span-12 lg:col-span-6 py-2">
                  <a href="#" className="p-2 grid grid-cols-12 ease-in-out duration-75 hover:bg-blue rounded transition hover:transition scale-95 hover:scale-100">
                    <img className="col-span-2" src="sdc-platform/app-icon-stageit.svg"></img>
                    <div className="col-span-10">
                      <h3 className="text-base font-semibold">StageIT</h3>
                      <p className="text-sm font-light">Request creation to stage data</p>
                    </div>
                  </a>
                </div>

              <div className="col-span-12 lg:col-span-6 py-2">
                  <a href="#" className="p-2 grid grid-cols-12 ease-in-out duration-75 hover:bg-blue rounded transition hover:transition scale-95 hover:scale-100">
                    <img className="col-span-2" src="sdc-platform/app-icon-tmss.svg"></img>
                    <div className="col-span-10">
                     <h3 className="text-base font-semibold">TMSS</h3>
                     <p className="text-sm font-light">Telescope Manager Specification System</p>
                    </div>
                  </a>
              </div>

               <div className="col-span-12 lg:col-span-6 py-2">
                  <a href="#" className="p-2 grid grid-cols-12 ease-in-out duration-75 hover:bg-blue rounded transition hover:transition scale-95 hover:scale-100">
                    <img className="col-span-2" src="sdc-platform/app-icon-narcis.svg"></img>
                    <div className="col-span-10">
                     <h3 className="text-base font-semibold">Narcis</h3>
                     <p className="text-sm font-light">Application for Project and Resource Management</p>
                    </div>
                  </a>
              </div>

            </div>
          </div>

          <div className="bg-lightGrey/30 dark:bg-background-panel p-4 col-span-12 xl:col-span-4 rounded-lg">
            <h2 className="pl-2 pb-3 text-xl font-semibold">Support</h2>
              
              <div className="grid grid-cols-12">
                <div className="col-span-12 py-2">
                  <a href="#" className="p-2 grid grid-cols-12 ease-in-out duration-75 hover:bg-blue rounded transition hover:transition scale-95 hover:scale-100">
                    <img className="col-span-2" src="sdc-platform/app-icon-helpdesk.svg"></img>
                    <div className="col-span-10">
                      <h3 className="text-base font-semibold">SDC Helpdesk</h3>
                      <p className="text-sm font-light">Helpdesk ticket creation (JIRA)</p>
                    </div>
                  </a>

                <div className="col-span-12 py-2">
                   <a href="#" className="p-2 grid grid-cols-12 ease-in-out duration-75 hover:bg-blue rounded transition hover:transition scale-95 hover:scale-100">
                    <img className="col-span-2" src="sdc-platform/app-icon-docs.svg"></img>
                    <div className="col-span-10">
                      <h3 className="text-base font-semibold">Documentation</h3>
                      <p className="text-sm font-light">Get to know and use our applications</p>
                    </div>
                  </a>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </Layout>
    
  );
};

export default MainPage;
