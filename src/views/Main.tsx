import "./Main.css";
import Card from "../components/Card";
import Table from "../components/Table";

const Main: React.FC = () => {
    return (
        <>
            <div className="my-12">
                <h1>吟コン - 詩吟用コンダクターアプリ</h1>
                <p className="sub-text">詩吟の練習に使えるコンダクターアプリ！</p>
            </div>

            <div className="flex flex-col md:flex-row my-12">
                <Card message="本数は 水4本 〜 14本 まで対応" imageSrc="./img/lowest-pitch.jpeg" />
                <Card message="細かい音量調整や起動時の本数設定が可能" imageSrc="./img/settings.jpeg" />
                <Card message="暗い中でも練習が捗る！ダークモード機能" imageSrc="./img/dark-conductor.jpeg" />
            </div>

            <div className="my-12">
                <h2>
                    <span className="pe-2">⏰</span>バージョン履歴
                </h2>
                <Table
                    tableItems={[
                        {
                            date: "2025/06/04",
                            text1: "バージョン2.1.3：初回起動時に水4本で表示される問題、およびライトモード・ダークモードの切替ができない問題を解消。",
                            text2: "",
                        },
                        {
                            date: "2025/06/01",
                            text1: "バージョン2.1.2：ホームに戻る際に音がなってしまう問題を解消。動作要件をiOS15.6以上に変更。",
                            text2: "",
                        },
                        {
                            date: "2023/06/27",
                            text1: "バージョン2.1.1：サイレントモード時も音が鳴るように修正。",
                            text2: "",
                        },
                        {
                            date: "2023/06/27",
                            text1: "バージョン2.1.0：設定画面・録音機能・録音再生機能を追加。音色を調整。",
                            text2: "",
                        },
                        {
                            date: "2023/04/22",
                            text1: "バージョン2.0.2：アプリアイコン・UI変更。起動時の読み込み画面を追加。",
                            text2: "",
                        },
                        {
                            date: "2023/04/22",
                            text1: "バージョン2.01：タスクマネージャ表示の際に音が鳴り続ける問題を改善。",
                            text2: "",
                        },
                        {
                            date: "2023/04/11",
                            text1: "バージョン2.0：音の鳴り方を調整。",
                            text2: "",
                        },
                        {
                            date: "2023/04/04",
                            text1: "バージョン1.0：アプリリリース🎉",
                            text2: "",
                        },
                    ]}
                />
            </div>

            <div className="my-12">
                <h2>
                    <span className="pe-2">📱</span>動作要件
                </h2>
                <ul>
                    <li className="my-1">対応機種：iPhone</li>
                    <li className="my-1">対応OS：iOS 15.6〜</li>
                </ul>
            </div>

            <div className="my-12">
                <h2>
                    <span className="pe-2">👤</span>プライバシーポリシー
                </h2>
                <ul>
                    <li className="my-1">本アプリにはユーザーデータを収集する機能は含まれません。</li>
                </ul>
            </div>
        </>
    );
};

export default Main;
