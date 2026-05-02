import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors.ts';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 8,
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    borderRadius: 28,
    elevation: 12,
  },
  container: {
    alignItems: 'center',
    gap: 4,
  },
  iconWrapper: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 100,
    overflow: 'hidden',
    position: 'relative',
  },
  animatedBg: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: colors.cyan_100,
  },
  label: {
    width: '100%',
    textAlign: 'center',
  },
});
