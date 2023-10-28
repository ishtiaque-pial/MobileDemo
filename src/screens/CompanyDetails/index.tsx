import {useQuery} from '@apollo/client';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {GET_COMAPNAY} from '../../api/queries';
import {styles} from './styles';

export const CompanyDetailsScreen = ({
  route: {params},
}: NativeStackScreenProps<any>) => {
  const {loading, error, data} = useQuery(GET_COMAPNAY, {
    variables: {id: params},
  });

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>${error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{uri: data.getCompany.coverImageUrl}}
        style={styles.coverImage}
      />
      <Image source={{uri: data.getCompany.logoUrl}} style={styles.logo} />
      <Text style={styles.companyName}>{data.getCompany.name}</Text>
      <Text style={styles.companyDescription}>
        {data.getCompany.description}
      </Text>
      <Text style={styles.investmentInfo}>
        Investment Raised: {data.getCompany.investmentRaised} / Investment
        Sought: {data.getCompany.investmentSought}
      </Text>
      <Text style={styles.investmentInfo}>
        Number of Investors: {data.getCompany.numberOfInvestors} / Percentage
        Raised: {data.getCompany.percentageRaised}%
      </Text>
      <Text style={styles.locationInfo}>
        Location: {data.getCompany.city}, {data.getCompany.country}
      </Text>
      <Text style={styles.endDate}>
        Campaign Ends: {data.getCompany.endDate}
      </Text>
      <Text style={styles.valuation}>
        Valuation: {data.getCompany.valuation}
      </Text>
    </View>
  );
};
