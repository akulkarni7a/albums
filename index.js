//library import
import React from 'react';
import { AppRegistry, View } from 'react-native';

//component import
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


const App = () => {
	return (
		<View style={{flex:1}}>
			<Header headerText={'Albums'}/>
			<AlbumList/>
		</View>
		);
};



AppRegistry.registerComponent('albums',()=>App);