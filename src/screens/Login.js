import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../theme/styleConstant';
import axios from 'axios';
import Home from './Home';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
    };
  }
  render() {
    const onSubmit = async () => {
      await axios
        .get(
          `https://api.nasa.gov/neo/rest/v1/neo/${this.state.id}?api_key=DEMO_KEY`,
        )
        .then(response => {
          // console.log(response.data, 'Shahid');
          this.props.navigation.navigate('Home', {data: response.data});
        })
        .catch(e => {
          console.log(e);
        });
    };
    const randomAsteroid = async () => {
      await axios
        .get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
        .then(response => {
          this.props.navigation.navigate('Random', {data: response.data});
        })

        .catch(e => {
          console.log(e);
        });
    };

    return (
      <View style={styles.container}>
        {/* <Text>{this.state.id}</Text> */}
        <TextInput
          placeholder="Enter Id"
          onChangeText={text => this.setState({id: text})}
          style={styles.input}
          //   value={id}
        />
        <TouchableOpacity style={styles.btn} onPress={onSubmit}>
          <Text style={styles.btnText}>submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={randomAsteroid}>
          <Text style={styles.btnText}>Asteroid</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: moderateScale(320),
    borderWidth: 1,
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(10),
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(280),
    borderWidth: 1,
    height: moderateScaleVertical(42),
    borderRadius: moderateScale(8),
    marginTop: moderateScaleVertical(30),
    backgroundColor: 'blue',
  },
  btnText: {
    fontSize: textScale(20),
    fontWeight: '500',
    color: 'white',
  },
});
