import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  card: {
    margin: 10,
    padding: 15,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  title: {
    marginLeft: 10,
  },
  destription: {
    textAlign: 'justify',
    fontSize: 12,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
