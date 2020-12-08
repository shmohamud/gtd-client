import Card from '../Card'

//TODO: Make generic. Selector and Model, so List of Projects and Actions are equally viewable. Props should be: select & data

const List = ({ select, projects }) => {
    return (
      <ul>
        {projects.map(project => (
          <Card key={project._id} project={project} select={select} />
        ))}
      </ul>
    );
  };

  export default List