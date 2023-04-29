import React,{useState} from 'react';
import './App.css';
import data from './tableData'

function App() {
  const [cellData, setCellData] = useState(data)

  const onChangeInput = (e, id) => {
    const { name, value } = e.target

    const editData = cellData.map((item) =>
      item.id === id && name ? { ...item, [name]: value } : item
    )
    setCellData(editData)
  }

  const sendUpdateData = ({ e, id, type }) => {
    if (e.keyCode === 13 || type === "blur" && e.target.value !== "") {
      console.log("Event fired for Posting Data in Backend", cellData)

      // mention here your apis for post 
      // i.e ==> const postData= axios.post("www.localhost8000/cellData-saved...",cellData)
    }
  }

  return (
    <div className="container">
      <th className='table-title'>Month 1</th>
      <table>
        <tbody>
          {cellData.map(({ id, name, cell1, cell2, cell3, cell4, cell5, cell6 }) => (
            <tr key={id}>
              <thead>
                <tr>
                  <th>{name}</th>
                </tr>
              </thead>
              <td>
                <input
                  name="cell1"
                  value={cell1}
                  type="text"
                  onChange={(e) => onChangeInput(e, id)}
                  onBlur={(e) => { sendUpdateData({ e, id, type: "blur" }) }}
                  onKeyDown={(e) => { sendUpdateData({ e, id, type: "keypress" }) }}
                />
              </td>
              <td>
                <input
                  name="cell2"
                  value={cell2}
                  type="text"
                  className='input2-4 '
                  onChange={(e) => onChangeInput(e, id)}
                  onBlur={(e) => { sendUpdateData({ e, id, type: "blur" }) }}
                  onKeyDown={(e) => { sendUpdateData({ e, id, type: "keypress" }) }}
                />
              </td>
              <td>
                <input
                  name="cell3"
                  value={cell3}
                  type="text"
                  onChange={(e) => onChangeInput(e, id)}
                  onBlur={(e) => { sendUpdateData({ e, id, type: "blur" }) }}
                  onKeyDown={(e) => { sendUpdateData({ e, id, type: "keypress" }) }}
                />
              </td>
              <td>
                <input
                  name="cell4"
                  value={cell4}
                  type="text"
                  className='input4'
                  onChange={(e) => onChangeInput(e, id)}
                  onBlur={(e) => { sendUpdateData({ e, id, type: "blur" }) }}
                  onKeyDown={(e) => { sendUpdateData({ e, id, type: "keypress" }) }}
                />
              </td>
              <td>
                <input
                  name="cell5"
                  value={cell5}
                  type="text"
                  className='input2-4 '
                  onChange={(e) => onChangeInput(e, id)}
                  onBlur={(e) => { sendUpdateData({ e, id, type: "blur" }) }}
                  onKeyDown={(e) => { sendUpdateData({ e, id, type: "keypress" }) }}
                />
              </td>
              <td>
                <input
                  name="cell6"
                  value={cell6}
                  type="text"
                  onChange={(e) => onChangeInput(e, id)}
                  onBlur={(e) => { sendUpdateData({ e, id, type: "blur" }) }}
                  onKeyDown={(e) => { sendUpdateData({ e, id, type: "keypress" }) }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;
