import "./DetailsTable.scss";

interface ItemTable {
    atr: {
        item: {
            id: string,
            name: string,
            value_name: string
        }
    }
}

const DetailsTable = ({atr}: ItemTable) => {
    console.log(atr);
  return(
    <table>
        <tbody>
            {atr.slice(0,15).map(item => {
                return(
                    (item.value_name) 
                    &&
                    <tr key={item.id}>
                        <td data-label="Name">{item.name}</td>
                        <td data-label="Status">{item.value_name}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  );
};

export default DetailsTable;