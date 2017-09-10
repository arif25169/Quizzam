import React, { Component } from 'react';
import { func, array } from 'prop-types';
import CreateFolder from './CreateFolder';
import Folder from './Folder';
import { getKey } from '../helpers';
import './styles/FolderAside.scss';

class FolderAside extends Component {
  constructor() {
    super();
    this.state = {
      folders: [],
    };
  }

  componentDidMount() {
    const { fetchFolders } = this.props;

    fetchFolders(1);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.folders.length !== this.props.folders.length) {
      this.setState({ folders: nextProps.folders });
    }
  }

  render() {
    const { folders } = this.state;
    const foldersArray = folders.map(folder => <Folder key={getKey()} folder={folder} />);

    return (
      <aside className="folder-aside">
        <CreateFolder />
        <section className="folders-wrapper">
          {foldersArray}
        </section>
      </aside>
    );
  }
}

FolderAside.propTypes = {
  folders: array,
  fetchFolders: func,
};

export default FolderAside;