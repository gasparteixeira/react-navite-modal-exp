import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import Modal from 'react-native-modal'

export default class App extends React.Component {
  state = {
    isModalVisible: false,
    barStyle: 'dark-content'
  }
  _showModal = () => this.setState({ isModalVisible: true, barStyle: 'light-content' })

  _hideModal = () => this.setState({ isModalVisible: false, barStyle: 'dark-content' })
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent barStyle={this.state.barStyle}/>
        <TouchableOpacity onPress={() => this._showModal()}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isModalVisible}
          backdropColor='transparent'
          transparent={false}
          style={styles.modalWindow}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => this._hideModal()}>
              <Text style={{color: 'white'}}>Close</Text>
            </TouchableOpacity>
            <Text style={{color: 'white'}}>Modal full!</Text>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalWindow: {
    margin: 0,
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
