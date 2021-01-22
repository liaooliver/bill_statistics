import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Import from './pages/Import';
import List from './pages/List';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">首頁</Link>
                    <Link to="/list" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">帳單明細</Link>
                    <Link to="/analysis" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">帳單分析</Link>
                    <Link to="/import" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">匯入功能</Link>
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                {/* <!-- Mobile menu button --> */}
                <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>

                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>

                  <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!--
            Mobile menu, toggle classNamees based on menu state.

            Open: "block", closed: "hidden"
          --> */}
          <div className="hidden md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">首頁</Link>
              <Link to="/list" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">帳單明細</Link>
              <Link to="/analysis" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">帳單分析</Link>
              <Link to="/import" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">匯入功能</Link>
            </div>
          </div>
        </nav>

        <Header />
        
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <Switch>
                <Route path="/list">                  
                  <List />
                </Route>
                <Route path="/analysis">
                    <div className="">帳單分析</div>
                </Route>
                <Route path="/import">
                  <Import />
                </Route>
                <Route path="/">
                    <div className=""></div>
                </Route>
              </Switch>
            </div>
          </div>
        </main>

      </div>
    </Router>
  );
};

export default App;
