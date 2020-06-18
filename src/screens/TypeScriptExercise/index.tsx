import React, {useEffect, FunctionComponent} from 'react';
import {View, Button, Text} from 'react-native';
import {useToggle} from '../../helperFuncs/useToggle';
import {Flex, centerAll} from '../../values/Theme';
type Props = {
  title: String;
};
const TypeScriptExercise: FunctionComponent<Props> = ({title}) => {
  const [visivle, toggleVisible] = useToggle(false);

  return (
    <View style={[Flex, centerAll]}>
      <Button onPress={toggleVisible} title="CHANGE VISIBILITY" />
      {visivle && <Text>VISIBLE</Text>}
      {/* { children } */}
    </View>
  );
};
export default TypeScriptExercise;
