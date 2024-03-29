

var sideNav = new Vue({
    el: '#sideNav',
    data: {
        slide:[{
            main:'受理申請作業',
            icon:'../img/referring/icon1.svg',
            subs:['一般檢查申請作業','型式檢查申請作業','其他申請作業','資料審查作業','通知繳費作業','收費作業(含收據列印)','退補件作業','退費作業','繳款書作業','型式檢查人員、檢查設備變更報備','型式廠商查核作業','機械設備批次停用作業','繳款書作業_新','明細變更處理作業','多元繳費線上申請匯入'],
            sublink:['InspectAdd.html','InspectAdd.html']
        },
        {
            main:'排程作業',
            icon:'../img/referring/icon2.svg',
            subs:['各項檢查排程作業','第2次以上檢查排程作業','檢查員檢查時間維護作業','主管內稽行程維護','主管內稽稽核結果維護作業','行事曆排程清單','跨轄區維護作業','跨轄區排程作業','訪查行程維護作業','公差行程維護作業','電腦輔助排程','排程申請案清單列印']
        },
        {
            main:'檢查結果判定作業',
            icon:'../img/referring/icon3.svg',
            subs:['檢查結果輸入及判定作業(含報表作業)','延後判定作業','檢查工時維護作業','發文日期維護作業','歸檔日期維護作業','退件退費發文歸檔日期維護作業']
        },
        {
            main:'差旅費報支作業',
            icon:'../img/referring/icon4.svg',
            subs:['差旅費報支作業','檢查行程里程明細表','新差旅費報支作業']
        },
        {
            main:'列印報表作業',
            icon:'../img/referring/icon5.svg',
            subs:['繳款書列印作業','收據列印作業','收文/收款/發票報表列印','定期檢查到期通知書列印','逾期檢查通知書列印']
        },
        {
            main:'排程作業及列印',
            icon:'../img/referring/icon6.svg',
            subs:['檢查日期通知書列印','工作指派及指派單列印','簡便檢查結果記錄/卷宗調閱單列印','出差請示單列印','會談紀錄表列印','簡訊檔案下載作業','出差旅費報告表列印','檢查結果報表列印','合格證列印作業']
        },
        {
            main:'名冊列印',
            icon:'../img/referring/icon7.svg',
            subs:['危險性機械設備到期/逾期名冊','已申請未判定/未檢查名冊','檢查結果名冊','已申請未排程名冊','危險性設備檢查局限空間作業事業單位名冊','定期檢查結果判定不合格名冊','已完成構造檢查名冊','已完成檢查發證名冊','竣工檢查結果報告表名冊','名條列印','設備機械名冊','已判定未發文/已發文名冊','已發文未歸檔名冊','替代方案到期名冊','合格證發證數統計表','線上機械設備停用清單列印','已完成構造檢查尚未竣工合格名冊','自行申請/委託代辦/理監事管理名冊','流程管制表維護/列印','受理案件查詢作業','定期檢查通知書多筆清單列印','歲入繳款書明細列印作業','合格證領用及列印作業','公文系統轉入申請名冊','多元繳費報表列印作業','多元繳費收件清單']
        },
        {
            main:'統計分析作業',
            icon:'../img/referring/icon8.svg',
            subs:['檢查別座數統計/檢查員座數統計','檢查別/行業別統計','檢查所-初複別統計表','定期檢查座數統計表','定期檢查不合格事項分析表','定期檢查統計表','事前檢查統計表','機械及設備年報','檢查量座次統計表','交叉分析表','人員節約率計算表','人員節約率檢查當量','內部稽核報告表','內部稽核統計表','危險性機械及設備使用年限及設置地區統計表','檢查座數統計表(已判定)','線上申請座數統計表']
        },
        {
            main:'新代檢業務督導及報表',
            icon:'../img/referring/icon9.svg',
            subs:['督導座數統計表','石化業危險性機械設備歲修通報清單']
        },
        {
            main:'勞動部職業安全衛生署管理報表',
            icon:'../img/referring/icon10.svg',
            subs:['績效統計表','流程管制總表','每月檢查機械設備清冊報表']
        },
        {
            main:'檢查機構管理功能及報表',
            icon:'../img/referring/icon11.svg',
            subs:['流程管制表維護/列印','轄區逾期危險性機械及設備名冊列印','設置危險性機械或設備之事業單位名冊查詢/列印','轄區危險性機械及設備統計表','危險性機械竣工及使用檢查辦理情形統計表','代檢業務督導查核紀錄維護']
        },
        {
            main:'新代檢業務督導及報表',
            icon:'../img/referring/icon12.svg',
            subs:['(舊)代檢業務督導查核紀錄維護','代檢業務現場查核總表','代檢業務審查統計表','代檢員被抽查場次量統計表(現場查核紀錄)','代檢業務逐案審查統計表(統計不合格案件) ','代檢業務督導工作日誌統計表','(新)代檢業務督導查核紀錄維護']
        },
        {
            main:'檔案管理作業',
            icon:'../img/referring/icon13.svg',
            subs:['圖檔資料維護作業','分類號及案次號維護','圖檔資料查詢作業']
        },
        {
            main:'基本資料維護作業',
            icon:'../img/referring/icon14.svg',
            subs:['事業單位資料維護','機械名冊維護','設備名冊維護','機械設備種類維護','機械設備型式維護','機械設備分類維護','檢查收費標準維護','基本代碼維護','縣市代碼維護','郵遞區號維護','行業別維護','假日資料維護','延長開放檢查審查委員資料','NDT協力廠商資料','問題類型維護','請假資料維護作業','刷卡資料查詢作業','督導預估值上傳作業','代辦商資料維護','搭乘設備資料維護','簽認專業機構維護','電腦輔助排程群組資料維護']
        },
        {
            main:'我的最愛',
            icon:'../img/referring/icon15.svg',
            subs:['常用檢查結果判定']
        },
        {
            main:'系統管理作業',
            icon:'../img/referring/icon16.svg',
            subs:['功能項目維護','樹狀目錄維護','使用者群組維護','群組權限維護','使用者資料維護','事業單位帳號維護','檢查機構資料維護','最新公告維護','使用情形排行查詢','異動情形記錄查詢','問題回覆作業','定期檢查判定取消作業','路徑規劃','路徑規劃2','文件庫維護','QRCode產生作業','人員節約率計算資料維護','人員節約率維護','合格證紙本編號維護','里程計算','刷卡資料轉入作業','工作點數維護作業','多元繳費取消作業']
        },
        {
            main:'相關文件下載',
            icon:'../img/referring/icon17.svg',
            subs:['100年新增功能操作手冊','101年新增功能操作手冊','OfficeOpen.CAB下載','手動安裝OfficeOpen步驟','使用者操作手冊','102年新增功能操作手冊','103年新增功能操作手冊','104年新增功能操作手冊','收據列印元件下載','CertActiveX元件下載','105年新增功能操作手冊']
        },
        {
            main:'平板相關作業_代檢機構',
            icon:'../img/referring/icon18.svg',
            subs:['歷史檢查記錄與原始掃描資料調卷作業']
        },
        {
            main:'安裝檔案及手冊下載',
            icon:'../img/referring/icon19.svg',
            subs:['平板操作手冊','平板安裝檔案']
        },
        {
            main:'平板相關作業_檢查機構',
            icon:'../img/referring/icon20.svg',
            subs:['代檢督導查核資料下載作業']
        },
        {
            main:'安裝檔案及手冊下載',
            icon:'../img/referring/icon19.svg',
            subs:['平板操作手冊','平板安裝檔案']
        },
        {
            main:'新合格證流程控管',
            icon:'../img/referring/icon21.svg',
            subs:['空白合格證領用及作廢作業','合格證領用清冊']
        }
    ]
    },
});