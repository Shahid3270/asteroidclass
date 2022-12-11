import {Text, StyleSheet, View, FlatList} from 'react-native';
import React, {Component} from 'react';
import {moderateScaleVertical} from '../theme/styleConstant';

export default class Random extends Component {
  render() {
    const {data} = this.props.route.params;
    const arry = data.near_earth_objects;
    const renderItem = item => {
      console.log(item, '########');
      return (
        <View style={styles.card}>
          <View style={styles.obj}>
            <Text>Name</Text>
            <Text>{item.item.name_limited} </Text>
          </View>
          <View style={styles.obj}>
            <Text>Id</Text>
            <Text>{item.item.id} </Text>
          </View>
          <View style={styles.obj}>
            <Text>year</Text>
            <Text>{item.item.designation} </Text>
          </View>
        </View>
      );
    };
    return (
      <View style={{flex: 1}}>
        <FlatList data={arry} renderItem={renderItem} />
        <Text>name</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    marginTop: moderateScaleVertical(10),
  },
  obj: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
