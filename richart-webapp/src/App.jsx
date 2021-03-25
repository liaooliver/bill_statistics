import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import EditWindow from './components/EditWindow';
import routes from './router/index';
import { v4 as uuidv4 } from 'uuid';

// import context provider
import { BillListContextProvider } from './context/BillListContext';
import { InteractiveContextProvider } from './context/InteractiveContext';


function App() {

  return (
    <div className="relative bg-white">
      <Router>
        <InteractiveContextProvider>
          <BillListContextProvider>
            <EditWindow />
            <Navigation />
            <main>
              {/* 使用 Suspense 在 lazy loading 完成前渲染 並等待 lazy loading 完成 */}
              <Suspense fallback={<div></div>}>
                <Switch>
                  {/* 透過 react config 渲染 component */}
                  {
                    routes.map(route => (
                      <Route
                        path={route.path}
                        key={uuidv4()}
                        render={(props) => <route.component {...props} />}
                      />
                    ))
                  }
                </Switch>
              </Suspense>
            </main>
            <Footer />
          </BillListContextProvider>
        </InteractiveContextProvider>
      </Router>
    </div>
  );
};

export default App;
