import {Text, StyleSheet, View, FlatList} from 'react-native';
import React, {Component} from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../theme/styleConstant';

export default class Home extends Component {
  render() {
    const {data} = this.props.route.params;
    const arry = data.close_approach_data;
    const renderItem = ({item}) => {
      console.log(item, '####');

      return (
        <View style={styles.card}>
          <View style={styles.obj}>
            <Text style={styles.txtheaading}>Kilometer:</Text>
            <Text style={styles.txtheaading}>
              {item.miss_distance.kilometers}{' '}
            </Text>
          </View>
          <View style={styles.obj}>
            <Text style={styles.txtheaading}>Miles per Hour</Text>
            <Text style={styles.txtheaading}>
              {item.relative_velocity.miles_per_hour}{' '}
            </Text>
          </View>
        </View>
      );
    };
    return (
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <FlatList data={arry} renderItem={renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    margin: moderateScaleVertical(10),
    backgroundColor: 'white',
  },
  obj: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(10),
  },
  txtheaading: {
    fontSize: textScale(20),
    color: 'black',
  },
});
