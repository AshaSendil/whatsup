/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ToptabBar = () => {
  return (
    <>
      <>
        <View style={styles.homeScreenRoot}>
          {/* <Text style={{top: 15, fontWeight: 'bold', color: 'white'}}>[0]</Text> */}
          <Text
            style={{
              top: 18,
              color: 'white',
              marginLeft: 40,
              fontSize: 16,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}>
            CHATS
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              bottom: 5,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            STATUS
          </Text>
          <Text
            style={{
              textAlign: 'right',
              bottom: 26,
              color: 'white',
              marginRight: 10,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            CALLS
          </Text>
        </View>
        <View>
          <View style={styles.item}>
            <Text
              style={{
                backgroundColor: 'teal',
                borderRadius: 50,
                width: 50,
                height: 50,
              }}>
              .
            </Text>
            <Text style={styles.title}>Name</Text>
            <Text style={{color: 'grey', textAlign: 'right', bottom: 60}}>
              8:21 pm
            </Text>
          </View>
          <View style={styles.item}>
            <Text
              style={{
                backgroundColor: 'teal',
                borderRadius: 50,
                width: 50,
                height: 50,
              }}>
              .
            </Text>
            <Text style={styles.title}>Name</Text>
            <Text style={{color: 'grey', textAlign: 'right', bottom: 60}}>
              8:21 pm
            </Text>
          </View>
          <View style={styles.item}>
            <Text
              style={{
                backgroundColor: 'teal',
                borderRadius: 50,
                width: 50,
                height: 50,
              }}>
              .
            </Text>
            <Text style={styles.title}>Name</Text>
            <Text style={{color: 'grey', textAlign: 'right', bottom: 60}}>
              8:21 pm
            </Text>
          </View>
          <View style={styles.item}>
            <Text
              style={{
                backgroundColor: 'teal',
                borderRadius: 50,
                width: 50,
                height: 50,
              }}>
              .
            </Text>
            <Text style={styles.title}>Name</Text>
            <Text style={{color: 'grey', textAlign: 'right', bottom: 60}}>
              8:21 pm
            </Text>
          </View>
          <View style={styles.item}>
            <Text
              style={{
                backgroundColor: 'teal',
                borderRadius: 50,
                width: 50,
                height: 50,
              }}>
              .
            </Text>
            <Text style={styles.title}>Name</Text>
            <Text style={{color: 'grey', textAlign: 'right', bottom: 60}}>
              8:21 pm
            </Text>
          </View>
          <View style={styles.item}>
            <Text
              style={{
                backgroundColor: 'teal',
                borderRadius: 50,
                width: 50,
                height: 50,
              }}>
              .
            </Text>
            <Text style={styles.title}>Name</Text>
            <Text style={{color: 'grey', textAlign: 'right', bottom: 60}}>
              8:21 pm
            </Text>
          </View>
        </View>
      </>
    </>
  );
};
const styles = StyleSheet.create({
  homeScreenRoot: {
    height: 145,
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    bottom: 108,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 60,
    bottom: 35,
  },
});
export default ToptabBar;
