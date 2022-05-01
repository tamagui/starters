#!/bin/bash
# metro hates symlinks doing this for local dev :/

function sync() {
  echo "syncing...."
  rsync -a --delete -l ~/tamagui/packages/tamagui/ ./node_modules/tamagui &
  rsync -a --delete -l ~/tamagui/packages/tamagui-loader/ ./node_modules/tamagui-loader &
  rsync -a --delete -l ~/tamagui/packages/animated-presence/ ./node_modules/@tamagui/animated-presence &
  rsync -a --delete -l ~/tamagui/packages/animations-reanimated/ ./node_modules/@tamagui/animations-reanimated &
  rsync -a --delete -l ~/tamagui/packages/colors/ ./node_modules/@tamagui/colors &
  rsync -a --delete -l ~/tamagui/packages/drawer/ ./node_modules/@tamagui/drawer &
  rsync -a --delete -l ~/tamagui/packages/menu/ ./node_modules/@tamagui/menu &
  rsync -a --delete -l ~/tamagui/packages/helpers/ ./node_modules/@tamagui/helpers &
  rsync -a --delete -l ~/tamagui/packages/babel-plugin/ ./node_modules/@tamagui/babel-plugin &
  rsync -a --delete -l ~/tamagui/packages/core/ ./node_modules/@tamagui/core &
  rsync -a --delete -l ~/tamagui/packages/core-node/ ./node_modules/@tamagui/core-node &
  rsync -a --delete -l ~/tamagui/packages/static/ ./node_modules/@tamagui/static &
  rsync -a --delete -l ~/tamagui/packages/fake-react-native/ ./node_modules/@tamagui/fake-react-native &
  rsync -a --delete -l ~/tamagui/packages/font-inter/ ./node_modules/@tamagui/font-inter &
  rsync -a --delete -l ~/tamagui/packages/theme-base/ ./node_modules/@tamagui/theme-base &
  wait
  watchman watch-del-all
  rm -r $TMPDIR/metro-cache || true
}

sync
fswatch -o ~/tamagui/packages | while read f; do sync; done

# copy (but dont overwrite) others
# rsync -r -l ~/tamagui/node_modules/* ./node_modules &
