import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router"
import RenderAnalysis from '../components/statistics/RenderAnalysis';
import ScaleLoading from '../components/loadingStyle/ScaleLoading';
import { StatisticsContextProvider, StatisticsContext } from '../context/StatisticsContext';

const CheckingData = ({ haveData, scattered, monthly, category }) => {
    return (
        <>
            {
                haveData ? <RenderAnalysis scattered={scattered} monthly={monthly} category={category} /> : <div className="font-bold text-center text-md text-red-600 mb-3">Oops! 無資料！請先上傳檔案</div>
            }
        </>
    )
}

// Context Provider
const FetchStatisticsData = () => {

    const { getFilterByCategory, getFilterByMonthly, scatteredBymonthly } = useContext(StatisticsContext);
    const [category, setCategory] = useState();
    const [monthly, setMonthly] = useState();
    const [loading, setLoading] = useState(false);
    const [scattered, setScattered] = useState();
    const [haveData, setHaveData] = useState(true)
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
            Promise.all([category(), monthly(), scatter()]).then(res => {
                const verification = res.every(item => item.length === 0 ? false : true)
                if (verification) {
                    setCategory(res[0])
                    setMonthly(res[1])
                    setScattered(res[2])
                    setHaveData(true)
                    setLoading(true)
                    sessionStorage.setItem("StatisticsData", JSON.stringify(res))
                } else {
                    setHaveData(false)
                    setLoading(true)
                }
            }).catch(error => history.push('/500'))
        }
    }, [])

    return (
        <>
            {
                loading ? <CheckingData
                    haveData={haveData}
                    scattered={scattered}
                    monthly={monthly}
                    category={category} /> : <ScaleLoading />
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