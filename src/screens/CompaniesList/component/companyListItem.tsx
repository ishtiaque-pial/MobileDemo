import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';
import {Company} from '../../../types/companyListType';
import {styles} from '../styles';

type ItemProps = {
  item: Company;
  onPress: () => void;
};

export const CompanyListItem = ({item, onPress}: ItemProps) => {
  return (
    <Pressable onPress={onPress}>
      <Card style={styles.card}>
        <View>
          <View style={styles.titleContainer}>
            <Image source={{uri: item.logoUrl}} style={styles.roundImage} />
            <Title style={styles.title}>{item.name}</Title>
          </View>
          <Paragraph style={styles.destription}>{item.description}</Paragraph>
        </View>
      </Card>
    </Pressable>
  );
};
