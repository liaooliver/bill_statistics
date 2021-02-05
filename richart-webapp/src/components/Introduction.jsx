import React from 'react';
import IntroCard from './IntroCard';
import detail from '../assets/streamline-icon-businessman-giving-a-keynote-1@140x140.png';
import analysis from '../assets/streamline-icon-pie-and-charts-2@140x140.png';
import upload from '../assets/streamline-icon-uploading-3@140x140.png';
import rwd from '../assets/streamline-icon-coding-a-website-2@140x140.png';

const Introduction = () => {
    return (
        <div className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase">輕鬆了解信用卡帳單支出</h2>
                    <p className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl">功能介紹</p>
                </div>

                <div className="mt-4 md:mt-10">
                    <dl className="flex flex-wrap">
                        <IntroCard
                            img={detail}
                            alt={detail}
                            title={'帳單明細'}
                            content={'此功能可以讓使用者自由的調整帳單明細。'}
                        />
                        <IntroCard
                            img={analysis}
                            alt={analysis}
                            title={'帳單分析'}
                            content={'依據消費的月份以及消費的種類，使用長條圖以及圓餅圖輕鬆分析消費習慣。'}
                        />
                        <IntroCard
                            img={upload}
                            alt={upload}
                            title={'匯入功能'}
                            content={'此功能可以匯入 Excel 格式的檔案，並且會上傳到 Google Sheet 儲存資料。'}
                            extraContent={'目前僅接受由台新數位銀行 Richart 所匯出的信用卡帳單 excel 檔案。'}
                        />
                        <IntroCard
                            img={rwd}
                            alt={rwd}
                            title={'響應式網頁'}
                            content={'偵測使用者上網的裝置尺寸，針對不同螢幕的大小自動調整網頁排版，讓使用者在用不同裝置尺寸瀏覽網站時，給使用者最佳瀏覽畫面。'}
                        />
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Introduction;