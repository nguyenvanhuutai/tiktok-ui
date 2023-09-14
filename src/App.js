import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import Home from '~/pages/Home';
import Following from '~/pages/Following';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>React App</h1>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
