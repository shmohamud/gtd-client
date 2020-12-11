import GenericDetailsCard from '../GenericDetailsCard'


const List = ({ select, data, btnTexts, actionTextFields, modelName, textFields }) => {

      if(data === undefined){
        return ''
      }
      return (
     data.length && (<ul>
        {data.map( d => (
          <GenericDetailsCard key={d._id} data={d} select={select} btnTexts={btnTexts} actionTextFields={actionTextFields} modelName={modelName} textFields={textFields}  />
        ))}
      </ul>)
    );
  };

  export default List