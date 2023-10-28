import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import useCompanyDataController from '../../viewController/useCompanyDataController';
import {styles} from './styles';

export const CompanyDetailsScreen = ({
  route: {params},
}: NativeStackScreenProps<any>) => {
  /*const {loading, error, data} = useQuery(GET_COMAPNAY, {
    variables: {id: params},
  });*/

  const {loading, errorData, companyData} = useCompanyDataController(params);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (errorData) {
    return (
      <View style={styles.container}>
        <Text>${errorData}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{uri: companyData?.coverImageUrl}}
        style={styles.coverImage}
      />
      <Image source={{uri: companyData?.logoUrl}} style={styles.logo} />
      <Text style={styles.companyName}>{companyData?.name}</Text>
      <Text style={styles.companyDescription}>{companyData?.description}</Text>
      <Text style={styles.investmentInfo}>
        Investment Raised: {companyData?.investmentRaised} / Investment Sought:{' '}
        {companyData?.investmentSought}
      </Text>
      <Text style={styles.investmentInfo}>
        Number of Investors: {companyData?.numberOfInvestors} / Percentage
        Raised: {companyData?.percentageRaised}%
      </Text>
      <Text style={styles.locationInfo}>
        Location: {companyData?.city}, {companyData?.country}
      </Text>
      <Text style={styles.endDate}>Campaign Ends: {companyData?.endDate}</Text>
      <Text style={styles.valuation}>Valuation: {companyData?.valuation}</Text>
    </View>
  );
};
