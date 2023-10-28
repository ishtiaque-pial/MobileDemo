import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  coverImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'absolute',
    top: 140,
    left: 20,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  companyDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  investmentInfo: {
    fontSize: 16,
    marginTop: 10,
  },
  locationInfo: {
    fontSize: 16,
    marginTop: 10,
  },
  endDate: {
    fontSize: 16,
    marginTop: 10,
  },
  valuation: {
    fontSize: 16,
    marginTop: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
