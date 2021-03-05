import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router"
import BarCahrtComponent from '../components/statistics/BarChart';
import PieChartComponent from '../components/statistics/PieChart';
import LoadingComponent from '../components/Loading';
import Category from '../components/statistics/Category';
import { StatisticsContextProvider, StatisticsContext } from '../context/StatisticsContext';


const RenderAnalysis = ({ monthly, category }) => {
    return (
        <div className="md:grid grid-cols-4 row gap-4">

            <div className="col-span-full md:col-span-1 md:mb-0 mb-4 p-4">
                <p>最高消費類別</p>
                <span>114</span>
            </div>
            <div className="col-span-full md:col-span-1 md:mb-0 mb-4 p-4">
                
            </div>
            <div className="col-span-full md:col-span-1 md:mb-0 mb-4 p-4">
                
            </div>
            <div className="col-span-full md:col-span-1 md:mb-0 mb-4 p-4">
                
            </div>
            <div className="col-span-full md:col-span-1 md:row-span-3 relative md:mb-0 mb-4">
                {
                    category && <Category categories={category} />
                }
            </div>
            <div className="col-span-full md:col-span-3 md:mb-0 mb-4">
                {
                    monthly && <div className="p-3 border rounded shadow">
                        <BarCahrtComponent dataSet={monthly} />
                    </div>
                }
            </div>
            <div className="col-span-full md:col-span-3">
                {
                    category && <div className="p-3 border rounded shadow flex justify-center">
                        <PieChartComponent dataSet={category.value} />
                    </div>
                }
            </div>
        </div>
    )
}

// Context Provider
const FetchStatisticsData = ({ children }) => {

    const { getFilterByCategory, getFilterByMonthly } = useContext(StatisticsContext);
    const [category, setCategory] = useState();
    const [monthly, setMonthly] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const category = getFilterByCategory;
        const monthly = getFilterByMonthly;
        const cache = JSON.parse(sessionStorage.getItem("StatisticsData"))

        if (cache) {
            setCategory(cache[0])
            setMonthly(cache[1])
            setLoading(true)
        } else {
            Promise.all([category(), monthly()]).then(res => {
                setCategory(res[0])
                setMonthly(res[1])
                setLoading(true)
                sessionStorage.setItem("StatisticsData", JSON.stringify(res))
            }).catch(error => history.push('/500'))
        }

    }, [])

    return (
        <>
            {
                loading ? <RenderAnalysis
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