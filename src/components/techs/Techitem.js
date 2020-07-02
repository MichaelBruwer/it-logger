import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const Techitem = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id);
    M.toast({ html: 'Tech Deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' clasName='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>Delete</i>
        </a>
      </div>
    </li>
  );
};

Techitem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(Techitem);
