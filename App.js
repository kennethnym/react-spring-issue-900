/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {animated, useTransition} from 'react-spring';

const AnimatedView = animated(View);

const App = () => {
  const [shouldShowBox, setShouldShowBox] = React.useState(false);
  const transitions = useTransition(shouldShowBox, null, {
    from: {transform: [{translateY: 10}]},
    enter: {transform: [{translateY: 0}]},
    exit: {transform: [{translateY: 10}]},
  });

  React.useEffect(() => {
    setTimeout(() => {
      setShouldShowBox(true);
    }, 1000);
  }, []);

  return (
    <SafeAreaView>
      {transitions.map(
        ({item, key, props}) =>
          item && <AnimatedView key={key} style={[styles.box, props]} />,
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export default App;
