module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-extend-native': ['error', {exceptions: ['Object']}],
  },
};
