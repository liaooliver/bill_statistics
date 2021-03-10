import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router"
import RenderAnalysis from '../components/statistics/RenderAnalysis';
import LoadingComponent from '../components/Loading';
import { StatisticsContextProvider, StatisticsContext } from '../context/StatisticsContext';

// Context Provider
const FetchStatisticsData = () => {

    const { getFilterByCategory, getFilterByMonthly, scatteredBymonthly } = useContext(StatisticsContext);
    const [category, setCategory] = useState();
    const [monthly, setMonthly] = useState();
    const [loading, setLoading] = useState(false);
    const [scattered, setScattered] = useState();
    const history = useHistory();

    useEffect(() => {
        const category = getFilterByCategory;
        const monthly = getFilterByMonthly;
        const scatter = scatteredBymonthly;
        const cache = JSON.parse(sessionStorage.getItem("StatisticsData"))

        if (cache) {
            setCategory(cache[0])
            setMonthly(cache[1])
            setScattered(cache[2])
            setLoading(true)
        } else {
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1;
            console.log(year, month)
            Promise.all([category(), monthly(), scatter()]).then(res => {
                setCategory(res[0])
                setMonthly(res[1])
                setScattered(res[2])
                setLoading(true)
                sessionStorage.setItem("StatisticsData", JSON.stringify(res))
            }).catch(error => history.push('/500'))
        }
    }, [])

    return (
        <>
            {
                loading ? <RenderAnalysis
                    scattered={scattered}
                    monthly={monthly}
                    category={category} /> : <LoadingComponent />
            }
        </>
    )
}


const Analysis = () => {
    return (
        <StatisticsContextProvider>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 sm:px-0">
                    <FetchStatisticsData />
                </div>
            </div>
        </StatisticsContextProvider>
    );
}

export default Analysis;