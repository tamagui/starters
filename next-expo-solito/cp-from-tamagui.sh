#!/bin/bash

# metro hates symlinks doing this for local dev :/

# fresh copy tamagui module each time
rm -r node_modules/@tamagui || true
rm -r node_modules/tamagui || true
rm -r node_modules/tamagui-loader || true

cp -r ~/tamagui/packages/tamagui ./node_modules
cp -r ~/tamagui/packages/tamagui-loader ./node_modules

mkdir node_modules/@tamagui
cp -r ~/tamagui/packages/animated-presence ./node_modules/@tamagui
cp -r ~/tamagui/packages/animations-reanimated ./node_modules/@tamagui
cp -r ~/tamagui/packages/colors ./node_modules/@tamagui
cp -r ~/tamagui/packages/helpers ./node_modules/@tamagui
cp -r ~/tamagui/packages/babel-plugin ./node_modules/@tamagui
cp -r ~/tamagui/packages/core ./node_modules/@tamagui
cp -r ~/tamagui/packages/core-node ./node_modules/@tamagui
cp -r ~/tamagui/packages/static ./node_modules/@tamagui
cp -r ~/tamagui/packages/fake-react-native ./node_modules/@tamagui

# copy (but dont overwrite) others
cp -r -n ~/tamagui/node_modules/* ./node_modules/

watchman watch-del-all
rm -r $TMPDIR/metro-cache || true
