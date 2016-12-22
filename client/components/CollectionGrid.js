import React from 'react';
import {GridList} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import CollectionCard from './CollectionCard';
import AtvImg from 'react-atv-img';
import GoogleMapStart from './GoogleMap';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    justifyContent: 'center',
  },
  gridList: {
    width: 900,
    height: '100%',
    overflowY: 'auto',
  },
  map: {
    // width: '50%'
  }
};

const rootDivStyle = {
  // position: 'absolute',
  // top: 150,
  // right: '50%',
  // bottom: 0,
    width: '50%',
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // backgroundColor: 'rgba(238, 239, 244, 1)',
};


class CollectionGrid extends React.Component {

  constructor(props) {
    super(props)
    this.renderSearch = this.renderSearch.bind(this)
    this.renderDefault = this.renderDefault.bind(this)
  }
  componentWillMount() {
    this.props.fetchCollections();
  }

  renderSearch() {
    return this.props.searchCollections.map((collection, i) => (
      <CollectionCard
        key={i}
        collectionId={collection.id}
        title={collection.title}
        image={collection.primary_object.image_url}
        user={collection.user}

        >
      </CollectionCard>
    ))
  }

  renderDefault() {
    return this.props.collections.collections.map((collection, i) => (
      <CollectionCard
        key={i}
        collectionId={collection.id}
        title={collection.title}
        image={collection.primary_object.image_url}
        user={collection.user}
        >
      </CollectionCard>
    ))
  }


  render() {
    return (
      <div style={styles.root}>
        <div style={rootDivStyle}>
          <AtvImg
            layers={[
              'http://lh4.ggpht.com/hr2NvVMJ1_ER4X-LeyHDBOaKm4aorUB4HaXtrb8JoZwtqZb6xsCnvaBT9r4SQiKK5svwtR0JwQUcYjmqhw71Hx9wfc8=s0',
              // 'http://kloc.pm/images/front.png',
            ]}
            staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
            style={{ width: 420, height: 590 }}
          />

        </div>
        <div style={styles.map}>
          <GoogleMapStart styleObject={{ height: '500px', width: '500px' }} />
        </div>
        {/* <GridList
          cellHeight={400}
          cols={3.1}
          style={styles.gridList}
        >
          <Subheader>Collections</Subheader>
          {this.props.searchCollections.length > 0 ? this.renderSearch() : this.renderDefault()}
        </GridList> */}

      </div>
    );
  }

}

export default CollectionGrid;
