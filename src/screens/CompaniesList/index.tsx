import React from 'react';
import {ActivityIndicator, Button, FlatList, Text, View} from 'react-native';
import {useCompanyListController} from '../../viewController';
import {CompanyListItem} from './component/companyListItem';
import {styles} from './styles';

export const CompaniesListScreen = () => {
  const {loading, companies, handleItemPress, error, signOut} =
    useCompanyListController();

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
        <Text>${error}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={companies}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CompanyListItem item={item} onPress={() => handleItemPress(item)} />
        )}
      />
      <Button testID="sign_out_button" onPress={signOut} title="Signout" />
    </View>
  );
};
