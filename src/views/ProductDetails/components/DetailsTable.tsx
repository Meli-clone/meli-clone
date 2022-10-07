import { Attributes } from '../ProductDetails';
import './DetailsTable.scss';

interface Prop {
  atr: Attributes;
}

const DetailsTable = ({ atr }: Prop) => {
  return (
    <table>
      <tbody>
        {atr.slice(0, 15).map(item => {
          return (
            item.value_name && (
              <tr key={item.id}>
                <td data-label='Name'>{item.name}</td>
                <td data-label='Status'>{item.value_name}</td>
              </tr>
            )
          );
        })}
      </tbody>
    </table>
  );
};

export default DetailsTable;
