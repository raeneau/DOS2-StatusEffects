import './TableRow.css';

// -----------------------------------------------------------------------------

const cnBase = 'TableRow';
const cn = {
    text: `${cnBase}--text`,
    image: `${cnBase}--image`,
}

const TableRow = ({icon, statusName}) => 
(<tr>
    <td>
        <img src={icon} alt={statusName} className={cn.image} />
        <h4 className={cn.text}>{statusName}</h4>
    </td>
    <td>

    </td>
    <td>
    
    </td>
    <td>
    
    </td>
</tr>
);

// -----------------------------------------------------------------------------

export default TableRow;