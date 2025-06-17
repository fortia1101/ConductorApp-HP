import "./Table.css";

type TableItem = {
    date: string;
    text1: string;
    text2: string;
};

const Table: React.FC<{ tableItems: TableItem[] }> = ({ tableItems }) => {
    return (
        <table className="mx-auto">
            {tableItems.map((item) => (
                <tr>
                    <td className="p-3 md:p-4">{item.date}</td>
                    <td className="p-3 md:p-4">{item.text1}</td>
                    <td className="p-3 md:p-4">{item.text2}</td>
                </tr>
            ))}
        </table>
    );
};

export default Table;
