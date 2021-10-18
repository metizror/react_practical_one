import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { colors, Fonts, Images } from '../common';
const { height, width } = Dimensions.get('window');
const FullScreenImage = ({ route, navigation }) => {

  const backIcon = Images.ic_back;

  return (
    <View style={styles.mainContainer}>

    <View style={styles.container}>
       <Text style={styles.title}>{'Full Image View'}</Text>
      <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backContainer}>
          <Image source={backIcon} style={styles.backIcon} />
        </TouchableOpacity>
      </View>
    </View>

       <View style={styles.imageContainer}>
        <Image
          style={styles.itemContainer}
          source={{ uri: route.params.url }}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};

export default FullScreenImage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: colors.light_gray,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    color: colors.black,
    fontSize: 24,
    width: width,
    textAlign: 'center',
    position: 'absolute',
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
    paddingHorizontal: 20,
  },

  backContainer: {
    alignItems: 'center',
    width: height * 0.035,
    height: '100%',
  },
  backIcon: {
    resizeMode: 'contain',
    height: 24,
    width: 24,
  },
});
