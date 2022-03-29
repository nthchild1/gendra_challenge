import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';

function SearchBar({onChangeText, onSubmit}) {
  return (
    <View
      style={{
        backgroundColor: '#bbafaf',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TextInput
        style={{flex: 1, padding: 5}}
        placeholder={'Buscar licitaciones'}
        {...{onChangeText}}
      />
      <TouchableOpacity onPress={onSubmit}>
        <Image
          width={30}
          height={30}
          style={{width: 30, height: 30}}
          source={{
            uri: 'https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default SearchBar;

SearchBar.defaultProps = {};
