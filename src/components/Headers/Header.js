import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Header,
  HeaderCenter,
  HeaderLeftRight,
  _View,
  HeaderCenterComponent,
  HeaderRight,
  wp,
  _Image,
  _Text,
} from '..';
import { theme } from '../../constants';

const MainHeader = ({
  backgroundColor,
  name,
  height,
  Iconname,
  type,
  size,
  color,
  RightIconname,
  Rightcolor,
  Rightsize,
  Righttype,
  Namecolor,
  OnLeftPress,
  OnRightPress,
  img,
  orgName,
  imgRight,
}) => {
  return (
    <_View
      align="center"
      flexDirection="row"
      width={'100%'}
      paddings={{ paddingHorizontal: wp(3) }}
      justify="space-between"
      height={height}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : 'white',
        alignSelf: 'center',
      }}
    >
      <_View width={'20%'}>
        {img ? (
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={OnLeftPress}
          >
            <_Image
              margins={{ marginRight: 4 }}
              height={25}
              width={25}
              borderRadius={25 / 2}
              source={img}
            />
            <_Text
              fontweight="500"
              color={theme.colors.white}
              size={9}
              numberOfLines={1}
            >
              {orgName}
            </_Text>
          </TouchableOpacity>
        ) : (
          <HeaderLeftRight
            onPress={OnLeftPress}
            Iconname={Iconname}
            type={type}
            size={size}
            color={color}
          />
        )}
      </_View>
      <_View width={'60%'} align="center">
        <HeaderCenterComponent Namecolor={Namecolor} name={name} />
      </_View>
      <_View width={'20%'} align="flex-end">
        {imgRight ? (
          <TouchableOpacity onPress={OnRightPress}>
            <_Image
              margins={{ marginRight: 4 }}
              height={25}
              width={25}
              borderRadius={25 / 2}
              source={imgRight}
            />
          </TouchableOpacity>
        ) : (
          <HeaderLeftRight
            onPress={OnRightPress}
            Iconname={RightIconname}
            type={Righttype}
            size={Rightsize}
            color={Rightcolor}
          />
        )}
      </_View>
    </_View>
  );
};

export { MainHeader };
