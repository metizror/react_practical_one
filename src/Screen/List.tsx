import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
} from 'react-native';
import { colors, Fonts, Images } from '../common';
import { useDispatch, useSelector } from "react-redux";
import { getMyListingApi } from '../redux/services/Service';
import Loader from '../components/Loader';
const { height, width } = Dimensions.get('window');

const List = ({navigation}) => {

  const { listData, isLoading } = useSelector(state => ({
    listData: state.listDataReducer.getList.listDetails,
    isLoading: state.listDataReducer.getList.isLoading,
  }));

  const dispatch = useDispatch();
  const [startCount, setStartCount] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(getMyListingApi('0', startCount));
  };

  const onPressItem = item => {
    navigation.navigate('FullScreenImage', {
      url: item.url,
    });
  };

  const renderItemTransaction = ({item}) => {
    return (
      <Pressable onPress={() => onPressItem(item)}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.white,
              borderRadius: 10,
              shadowColor: colors.black,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 6,
              shadowOpacity: 0.26,
              elevation: 5,
              padding: 10,
              margin: 10,
            }}>
            <Image source={{uri: item.thumbnailUrl}} style={styles.icon} />
            <View style={{flex: 1, marginLeft: 10}}>
              <Text
                style={{
                  marginBottom: 5,
                  fontSize: 22,
                  color: colors.dark_gray,
                  fontFamily: Fonts.Helvetica,
                  fontWeight: '700',
                  justifyContent: 'center',
              }}>
                {item.title}
              </Text>
            </View>
          </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        backgroundColor={colors.PrimaryColor}
        barStyle="light-content"
      />
      <Loader loading={isLoading} />

      <View style={styles.container}>
        <Text style={styles.title}>{'List Data'}</Text>
      </View>
      <FlatList
        data={listData}
        renderItem={renderItemTransaction}
        keyExtractor={item => item.id}
        onEndReached={e => {
          setStartCount(startCount + 1);
          getData();
        }}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: colors.light_gray,
  },
  icon: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  title: {
    color: colors.black,
    fontSize: 24,
    width: width,
    textAlign: 'center',
    fontFamily: Fonts.Helvetica,
    fontWeight: '700',
  },
  container: {
    flexDirection: 'row',
    height: height * 0.07,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});
