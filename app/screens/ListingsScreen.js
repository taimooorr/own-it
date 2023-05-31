import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppButton from "../components/Button";
import AppText from "../components/Text";
import ActivityIndicator from "../components/ActivityIndicator";

import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";




function ListingsScreen({ navigation }) {
 const {data:listings,error,loading,request:loadListings}= useApi(listingsApi.getListings);
  
  useEffect(() => {
    loadListings();
  }, []);
  
  return (
    <Screen style={styles.screen}>
      {error && (<>
        <AppText>Couldn't retrieve the listings.</AppText>
        <AppButton title="Retry" onPress={loadListings} />
      </>)}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            ImageUrl={item.images.length > 0 ? item.images[0].url : undefined}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 2,
    paddingTop: 0,
    width: "100%",
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
