import Table from "../components/Table";

const Problems: React.FC = () => {
    return (
        <>
            <h1 className="my-12">不具合情報</h1>
            <div className="my-12">
                <Table
                    tableItems={[
                        {
                            date: "2025/06/18",
                            text1: "1つのキーを長押ししている状態で別のキーを押すと、最初に押したキーの音が鳴り続けてしまう。指をキーから離しても鳴り続ける。",
                            text2: "対応中",
                        },
                        {
                            date: "2025/06/18",
                            text1: "コンダクター画面で本数切替時、複数本の変更に時間がかかってしまう。",
                            text2: "対応中",
                        },
                        {
                            date: "2025/06/18",
                            text1: "録音ができない問題を確認。録音データが常に28バイトとなり再生できない。",
                            text2: "対応中",
                        },
                    ]}
                />
            </div>
        </>
    );
};

export default Problems;
