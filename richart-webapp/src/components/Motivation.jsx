import React from 'react';

const Motivation = () => {
    return ( 
        <div className="max-w-4xl mx-auto py-8 lg:py-20 px-6 lg:px-0">
            <h1 className="font-bold text-2xl mb-6">關於 Credit Card Bill in Your Hand</h1>
            <p className="mb-3 tracking-wide">一開始從銀行 APP 下載 Excel 要做自己的信用卡消費統計，但是有很多重複的動作要手動執行，因此起心動念將這些行為轉為程式，自動產生圖表，節省時間。</p>
            <p className="mb-3 tracking-wide">
                原本只是想將資料餵入程式內自動產生圖表，但在撰寫程式的過程中又產生了一些想法，因此才逐漸形成這個有
                    <span className="font-bold">形象首頁</span>、
                    <span className="font-bold">帳單明細</span>、
                    <span className="font-bold">帳單分析</span>、
                    <span className="font-bold">匯入帳單</span>、
                    <span className="font-bold">設定功能</span>
                等功能的 demo APP。<br />
            </p>
            <p className="mb-3 tracking-wide">
                並且在專案上<span className="font-bold">使用自動化佈署(CI/CD)</span>，
                使 APP 的完整度提高，從原本自己使用的小工具轉型成為一個前端+後端搭配 CI/CD 的 side project。
            </p>
        </div>
    );
}
 
export default Motivation;